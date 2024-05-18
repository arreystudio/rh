<template>
    <div>
        <div class="bg-[#3f778c] h-80 rounded-b-[70px] text-white px-4 lg:px-8 py-6 overflow-y-visible">
            <div v-if="!preload" class="flex justify-center">
                <img src="/bps.png" alt="logo_bps" class="w-[60px] md:w-[80px] lg:w-[100px] mr-4" />
                <div class="text-white font-bold font-[arial] italic text-sm md:text-base lg:text-lg">
                    <div>BADAN PUSAT STATISTIK</div>
                    <div>KOTA MAKASSAR</div>
                </div>
            </div>
            <div v-else class="text-center">
                <div class="h-[46.5px] lg:h-[77.52px] w-[300px] bg-gray-300 animate-pulse rounded-2xl inline-block"></div>
            </div>
            <div v-if="!preload" class="font-bold text-center lg:text-xl mt-12">
                HASIL PENGHITUNGAN RH (RELATIF HARGA) <span class="text-yellow-400 uppercase">MINGGU KE-{{ periode.minggu }} BULAN {{ bantuan.bulan.value[periode.bulan - 1] + ' ' + periode.tahun }}</span> BPS KOTA MAKASSAR
            </div>
            <div v-else class="text-center mt-12">
                <div class="h-[16px] lg:h-[28px] w-full bg-gray-300 animate-pulse rounded-2xl inline-block"></div>
                <div class="lg:hidden h-[16px] w-full bg-gray-300 animate-pulse rounded-2xl inline-block"></div>
                <div class="md:hidden h-[16px] w-[270px] bg-gray-300 animate-pulse rounded-2xl inline-block"></div>
            </div>

            <div class="bg-white boogaloo w-full pl-4 pr-4 lg:pr-1 pt-4 lg:pt-6 text-sm text-black shadow-lg rounded mt-6 lg:mt-8">
                <div v-if="!preload" class="lg:text-xl">5 Komoditas <span class="text-orange-600">RH Tertinggi</span></div>
                <div v-else class="h-[20px] lg:h-[28px] w-[150px] lg:w-[250px] bg-gray-300 animate-pulse rounded-2xl"></div>
                <div class="overflow-x-auto pt-4 pb-3 lg:pb-6 text-xs lg:text-sm reyhide">
                    <div v-if="!preload" class="flex items-center w-fit -m-2 lg:w-full">
                        <div v-for="(item, index) in hof.top" :key="index" class="p-2 rounded shadow bg-red-50 m-2 w-[150px] lg:flex-1 overflow-hidden">
                            <div class="flex items-center">
                                <div class="text-nowrap">{{ item.komoditas }}</div>
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <Icon :name="bantuan.icon.value[item.komoditas_id - 1]" class="text-xl lg:text-3xl" />
                                <div class="flex justify-end items-center">
                                    <div class="font-bold text-xl lg:text-3xl">{{ item.rh }}</div>
                                    <Icon v-if="item.rh > 100" name="fluent:arrow-up-12-filled" class="text-orange-600 text-xl lg:text-3xl" />
                                    <Icon v-else-if="item.rh < 100" name="fluent:arrow-down-12-filled" class="text-emerald-600 text-xl lg:text-3xl" />
                                    <Icon v-else name="el:minus" class="text-slate-600 text-xl lg:text-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="flex items-center w-fit lg:w-full -m-2">
                        <div class="h-[68px] lg:h-[80px] w-[150px] lg:flex-1 bg-gray-300 animate-pulse rounded m-2" v-for="(item, index) in [1,2,3,4,5]" :key="index"></div>
                    </div>
                </div>
            </div>

            <div class="bg-white boogaloo w-full pl-4 pr-4 lg:pr-1 pt-4 lg:pt-6 text-sm text-black shadow-lg rounded mt-6 lg:mt-8">
                <div v-if="!preload" class="lg:text-xl">5 Komoditas <span class="text-emerald-600">RH Terendah</span></div>
                <div v-else class="h-[20px] lg:h-[28px] w-[150px] lg:w-[250px] bg-gray-300 animate-pulse rounded-2xl"></div>
                <div class="overflow-x-auto pt-4 pb-3 lg:pb-6 text-xs lg:text-sm reyhide">
                    <div v-if="!preload" class="flex items-center w-fit -m-2 lg:w-full">
                        <div v-for="(item, index) in hof.bot" :key="index" class="p-2 rounded shadow bg-emerald-50 m-2 w-[150px] lg:flex-1 overflow-hidden">
                            <div class="flex items-center">
                                <div class="text-nowrap">{{ item.komoditas }}</div>
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <Icon :name="bantuan.icon.value[item.komoditas_id - 1]" class="text-xl lg:text-3xl" />
                                <div class="flex justify-end items-center">
                                    <div class="font-bold text-xl lg:text-3xl">{{ item.rh }}</div>
                                    <Icon v-if="item.rh > 100" name="fluent:arrow-up-12-filled" class="text-orange-600 text-xl lg:text-3xl" />
                                    <Icon v-else-if="item.rh < 100" name="fluent:arrow-down-12-filled" class="text-emerald-600 text-xl lg:text-3xl" />
                                    <Icon v-else name="el:minus" class="text-slate-600 text-xl lg:text-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="flex items-center w-fit lg:w-full -m-2">
                        <div class="h-[68px] lg:h-[80px] w-[150px] lg:flex-1 bg-gray-300 animate-pulse rounded m-2" v-for="(item, index) in [1,2,3,4,5]" :key="index"></div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded w-full text-black mt-6 lg:mt-8 shadow-lg px-2 lg:px-4 pb-6">
                <div v-if="!preload" class="text-center font-bold px-4 py-4 lg:text-xl">RH Per Komoditas</div>
                <div v-else class="flex justify-center py-4">
                    <div class="h-[24px] lg:h-[28px] w-[150px] lg:[250px] bg-gray-300 animate-pulse rounded-xl"></div>
                </div>
                <div v-if="!preload" class="mt-2 lg:mt-4">
                    <div v-for="(item, index) in raw" :key="index" class="flex mt-2 lg:mt-4 px-2 py-2 border" :class="item.rh > 100 ? 'bg-red-100' : item.rh < 100 ? 'bg-emerald-100' : 'bg-white'">
                        <div class="w-[12%] lg:w-[6%] flex items-center">
                            <Icon :name="bantuan.icon.value[item.komoditas_id - 1]" class="text-xl lg:text-3xl" />
                        </div>
                        <div class="capitalize flex-1 lg:text-lg flex items-center">
                            <div>{{ item.komoditas.komoditas.toLowerCase() }}</div>
                        </div>
                        <div class="font-bold text-sm lg:text-lg w-[16%] lg:w-[8%] flex items-center pl-1">
                            <div>{{ item.rh }}</div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="h-[42px] lg:h-[48px] w-full bg-gray-300 animate-pulse rounded mt-2 lg:mt-4" v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]" :key="index"></div>
                </div>
            </div>

            <div class="h-28 lg:h-14"></div>

        </div>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'halaman'
})
const config = useRuntimeConfig()
const preload = ref(true)
const bantuan = useReference()

const periode = ref({
    tahun: useState('tahun').value === undefined ? useState('tahun', () => 0) : useState('tahun').value,
    bulan: useState('bulan').value === undefined ? useState('bulan', () => 0) : useState('bulan').value,
    minggu: useState('minggu').value === undefined ? useState('minggu', () => 0) : useState('minggu').value
})

const hof = ref({
    top: [],
    bot: []
})

const raw = ref([])

getData()

async function getData() {
    try {
        let url_param = '/main/' + periode.value.tahun + '/' + periode.value.bulan + '/' + periode.value.minggu
        const rey = await $fetch(config.public.api_url + url_param, { method: 'get' })
        periode.value.tahun = rey.tahun
        let reytahun = useState('tahun')
        reytahun.value = rey.tahun
        periode.value.bulan = rey.bulan
        let reybulan = useState('bulan')
        reybulan.value = rey.bulan
        periode.value.minggu = rey.minggu
        let reyminggu = useState('minggu')
        reyminggu.value = rey.minggu
        hof.value.top = rey.top5
        hof.value.bot = rey.bot5
        raw.value = rey.semua
        preload.value = false
    } catch(e) {
        console.log(e)
    }
}
</script>