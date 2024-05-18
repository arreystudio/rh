<template>
    <div class="bg-[#3f778c] h-48 px-4 lg:px-8 pt-6 overflow-y-visible">
        <div class="bg-white rounded shadow-lg px-4 py-4">
            <div v-if="!preload" class="font-bold text-sm lg:text-base">Komoditas</div>
            <div v-else class="h-[20px] lg:h-[24px] w-[200px] bg-gray-300 animate-pulse rounded-2xl"></div>
            <select v-if="!preload" v-model="komoditas" @change="loadData()" name="komoditas" id="komoditas" class="w-full mt-1 rounded-lg px-4 py-2 text-sm lg:text-base bg-[#eee] outline-none">
                <option value="0">-- Pilih Komoditas --</option>
                <option :value="item.id" v-for="(item, index) in daftar_komoditas" :key="index">{{ item.komoditas }}</option>
            </select>
            <div v-else class="h-[37px] lg:h-[40px] w-full bg-gray-300 animate-pulse rounded mt-1"></div>
        </div>

        <div class="lg:flex lg:space-x-6">
            <div class="lg:w-2/3">
                <div class="bg-white rounded shadow-lg px-4 py-4 mt-6">
                    <div v-if="!preload" class="font-bold text-sm lg:text-base">Diagram Garis Perkembangan Relatif Harga <span v-if="komoditas > 0" class="capitalize">{{ getKomoditasById().komoditas.toLowerCase() }} Per Minggu Pada {{ data_series.length }} Minggu Terakhir</span></div>
                    <div v-else class="h-[20px] lg:h-[24px] w-full bg-gray-300 animate-pulse rounded-2xl"></div>
                    <div v-if="komoditas == 0" class="w-full bg-sky-100 text-sky-600 px-4 py-2 rounded mt-2">
                        <div v-if="!preload">Mohon pilih komoditas terlebih dahulu.</div>
                        <div v-else class="h-[24px] w-full bg-gray-300 animate-pulse rounded-2xl"></div>
                    </div>
                    
                    <LineChart v-if="!preload" :chartData="thedata" class="mt-2" />
                    <div v-else class="w-full aspect-[2/1] bg-gray-300 animate-pulse mt-1"></div>
                </div>
            </div>
            
            <div class="lg:flex-1">
                <div class="bg-white rounded shadow-lg px-4 py-4 mt-6">
                    <div v-if="!preload" class="font-bold text-sm lg:text-base">Riwayat Perkembangan Harga <span v-if="komoditas > 0" class="capitalize">{{ getKomoditasById().komoditas.toLowerCase() }}</span></div>
                    <div v-else class="h-[20px] lg:h-[24px] w-full bg-gray-300 animate-pulse rounded-2xl"></div>
                    <div v-if="komoditas == 0" class="w-full bg-sky-100 text-sky-600 px-4 py-2 rounded mt-2">
                        <div v-if="!preload">Mohon pilih komoditas terlebih dahulu.</div>
                        <div v-else class="h-[24px] w-full bg-gray-300 animate-pulse rounded-2xl"></div>
                    </div>
                    <div class="mt-2" v-if="data_series.length > 0">
                        <div v-for="(item, index) in data_series" :key="index" class="flex justify-between items-center px-3 py-2 border mt-2">
                            <div>
                                <div class="font-bold text-sm lg:text-base">{{ bantuan.bulan.value[item.bulan - 1] + ' ' + item.tahun }}</div>
                                <div class="text-xs lg:text-sm mt-1 text-gray-600">{{ 'Minggu ke-' + item.minggu }}</div>
                            </div>
                            <div>
                                <div class="font-bold text-sm lg:text-base text-right">{{ item.rh }}</div>
                                <div class="text-xs lg:text-sm text-white rounded px-3 py-1 font-bold text-center" :class="parseFloat(item.rh) > parseFloat(data_series[index === 0 ? 0 : index-1].rh) ? 'bg-red-600' : (item.rh == data_series[index === 0 ? 0 : index-1].rh ? 'bg-slate-600' : 'bg-green-600')">{{ parseFloat(item.rh) > parseFloat(data_series[index === 0 ? 0 : index-1].rh) ? '+' : (item.rh == data_series[index === 0 ? 0 : index-1].rh ? '' : '-') }} {{ Math.abs((item.rh - data_series[index === 0 ? 0 : index-1].rh).toFixed(2)) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-28 lg:h-14"></div>

        <Loading v-if="loading" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'halaman'
})
const config = useRuntimeConfig()
const bantuan = useReference()
const preload = ref(true)
const loading = ref(false)

const komoditas = ref(0)
const daftar_komoditas = ref([])
const data_series = ref([])

getKomoditas()

const thedata = ref({
    labels: [],
    datasets: [{
        label: 'Series RH',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
})

async function getKomoditas() {
    const { data: rey, error: alpha } = await useFetch(config.public.api_url + '/komoditas', { method: 'get' })
    if (!!rey.value) {
        daftar_komoditas.value = rey.value.komoditas
        preload.value = false
    }
}

function getKomoditasById(id) {
    return daftar_komoditas.value.find((item) => {
        return item.id == komoditas.value
    })
}

async function loadData() {
    if (komoditas.value == 0) {
        data_series.value = []
        thedata.value = {
            labels: [],
            datasets: [{
                label: 'Series RH',
                data: [],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
        return
    }
    loading.value = true
    try {
        const rey = await $fetch(config.public.api_url + '/tigabulan/' + komoditas.value, { method: 'get' })
        let x_axis = []
        let isian = []
        rey.data.forEach(element => {
            x_axis.push(bantuan.bulan_short.value[element.bulan - 1] + '-M' + element.minggu)
            isian.push(element.rh)
        })
        thedata.value = {
            labels: x_axis,
            datasets: [{
                label: 'Series RH',
                data: isian,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
        data_series.value = rey.data
        loading.value = false
    } catch(e) {
        console.log("Koneksi dengan server gagal dilakukan")
    }
}
</script>