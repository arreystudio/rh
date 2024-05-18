<template>
    <div>
        <div class="bg-[#3f778c] h-48 px-4 lg:px-8 overflow-y-visible">
            <div class="text-white pt-12 font-bold text-xl lg:text-2xl flex justify-center">
                <div v-if="!preload">Periode Aktif</div>
                <div v-else class="h-[28px] lg:h-[32px] w-[150px] bg-gray-400 animate-pulse rounded-2xl"></div>
            </div>
            <div class="bg-white rounded shadow-xl mt-8 px-4 py-6">
                <form @submit.prevent="submit()">
                    <div v-if="!preload" class="font-bold text-sm lg:text-base">Tahun</div>
                    <div v-else class="h-[20px] lg:h-[24px] w-[100px] bg-gray-300 animate-pulse rounded-xl"></div>
                    <select v-if="!preload" v-model="periode.tahun" name="tahun" id="tahun" class="w-full mt-1 rounded-lg px-4 py-2 text-sm lg:text-base bg-[#eee] outline-none" @change="periode.bulan = 0; periode.minggu = 0">
                        <option value="0">-- Pilih Tahun --</option>
                        <option :value="item" v-for="(item, index) in daftarTahun()" :key="index">{{ item }}</option>
                    </select>
                    <div v-else class="h-[37px] lg:h-[40px] w-full bg-gray-300 animate-pulse rounded-lg mt-1"></div>

                    <div v-if="!preload" class="font-bold text-sm lg:text-base mt-4">Bulan</div>
                    <div v-else class="h-[20px] lg:h-[24px] w-[100px] bg-gray-300 animate-pulse rounded-xl mt-4"></div>
                    <select v-if="!preload" v-model="periode.bulan" name="bulan" id="bulan" class="w-full mt-1 rounded-lg px-4 py-2 text-sm lg:text-base bg-[#eee] outline-none disabled:bg-gray-100 disabled:text-white transition-all duration-500 ease-in-out" :disabled="periode.tahun == 0" @change="periode.minggu = 0">
                        <option value="0">-- Pilih Bulan --</option>
                        <option :value="item" v-for="(item, index) in daftarBulan()" :key="index">{{ bantuan.bulan.value[item - 1] }}</option>
                    </select>
                    <div v-else class="h-[37px] lg:h-[40px] w-full bg-gray-300 animate-pulse rounded-lg mt-1"></div>

                    <div v-if="!preload" class="font-bold text-sm lg:text-base mt-4">Minggu</div>
                    <div v-else class="h-[20px] lg:h-[24px] w-[100px] bg-gray-300 animate-pulse rounded-xl mt-4"></div>
                    <select v-if="!preload" v-model="periode.minggu" name="minggu" id="minggu" class="w-full mt-1 rounded-lg px-4 py-2 text-sm lg:text-base bg-[#eee] outline-none disabled:bg-gray-100 disabled:text-white transition-all duration-500 ease-in-out" :disabled="periode.bulan == 0 || periode.tahun == 0">
                        <option value="0">-- Pilih Minggu --</option>
                        <option :value="item" v-for="(item, index) in daftarMinggu()" :key="index">{{ 'Ke-' + item }}</option>
                    </select>
                    <div v-else class="h-[37px] lg:h-[40px] w-full bg-gray-300 animate-pulse rounded-lg mt-1"></div>

                    <div class="flex justify-end mt-8">
                        <button v-if="!preload" type="submit" class="bg-[#3f778c] text-white px-6 py-2 rounded text-xs lg:text-sm hover:bg-teal-900 disabled:opacity-40 transition-all duration-500 ease-in-out" :disabled="periode.tahun == 0 || periode.bulan == 0 || periode.minggu == 0">Simpan</button>
                        <div v-else class="h-[32px] lg:h-[36px] w-[89px] bg-gray-300 animate-pulse rounded"></div>
                    </div>
                </form>
            </div>
        </div>

        <Sukses v-if="sukses" @tutup="sukses = false" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'halaman'
})
const config = useRuntimeConfig()
const preload = ref(true)
const bantuan = useReference()
const sukses = ref(false)

const periode = ref({
    tahun: useState('tahun').value === undefined ? useState('tahun', () => 0) : useState('tahun').value,
    bulan: useState('bulan').value === undefined ? useState('bulan', () => 0) : useState('bulan').value,
    minggu: useState('minggu').value === undefined ? useState('minggu', () => 0) : useState('minggu').value
})

const tersedia = ref([])

getPeriode()

function submit() {
    let reytahun = useState('tahun')
    let reybulan = useState('bulan')
    let reyminggu = useState('minggu')
    reytahun.value = periode.value.tahun
    reybulan.value = periode.value.bulan
    reyminggu.value = periode.value.minggu
    sukses.value = true
}

async function getPeriode() {
    const { data: rey, error: alpha } = await useFetch(config.public.api_url + '/periode', { method: 'get' })
    if (!!rey.value) {
        tersedia.value = rey.value.periode
        let reytahun = useState('tahun')
        if (reytahun.value === 0) {
            reytahun.value = rey.value.tahun
            periode.value.tahun = rey.value.tahun
        }
        let reybulan = useState('bulan')
        if (reybulan.value === 0) {
            reybulan.value = rey.value.bulan
            periode.value.bulan = rey.value.bulan
        }
        let reyminggu = useState('minggu')
        if (reyminggu.value === 0) {
            reyminggu.value = rey.value.minggu
            periode.value.minggu = rey.value.minggu
        }
        preload.value = false
    } 
}

function daftarTahun() {
    return [...new Set(tersedia.value.map((item) => item.tahun))]
}

function daftarBulan() {
    if (periode.value.tahun > 0) {
        let bulan_temp = tersedia.value.filter((item) => {
            return (item.tahun == periode.value.tahun)
        })
        return [...new Set(bulan_temp.map((item) => item.bulan))]
    }
    return []
}

function daftarMinggu() {
    if (periode.value.tahun > 0 && periode.value.bulan > 0) {
        let minggu_temp = tersedia.value.filter((item) => {
            return (item.tahun == periode.value.tahun && item.bulan == periode.value.bulan)
        })
        return [...new Set(minggu_temp.map((item) => item.minggu))]
    }
    return []
}
</script>