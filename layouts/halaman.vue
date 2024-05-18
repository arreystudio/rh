<template>
    <div class="w-full">
        <div class="flex w-full">
            <div class="hidden lg:block bg-[#2a3f5e] text-white h-screen fixed w-1/6 z-40 py-6 px-4">
                <div class="tracking-widest">MENU</div>
                <button @click="navigateTo('/dash')" type="button" class="flex items-center py-2 rounded w-full mt-4" :class="path.path === '/dash' ? 'bg-white text-[#2a3f5e]' : 'hover:bg-slate-600 hover:text-white'">
                    <Icon name="clarity:home-solid" class="w-1/6 text-xl mr-2 ml-1" />
                    <div class="w-5/6 text-left">Beranda</div>
                </button>
                <button @click="navigateTo('/series')" type="button" class="flex items-center py-2 rounded w-full mt-4" :class="path.path === '/series' ? 'bg-white text-[#2a3f5e]' : 'hover:bg-slate-600 hover:text-white'">
                    <Icon name="fa-solid:chart-line" class="w-1/6 text-xl mr-2 ml-1" />
                    <div class="w-5/6 text-left">Series</div>
                </button>
                <button @click="navigateTo('/periode')" type="button" class="flex items-center py-2 rounded w-full mt-4" :class="path.path === '/periode' ? 'bg-white text-[#2a3f5e]' : 'hover:bg-slate-600 hover:text-white'">
                    <Icon name="fluent-mdl2:calendar-settings" class="w-1/6 text-xl mr-2 ml-1" />
                    <div class="w-5/6 text-left">Periode</div>
                </button>
                <button @click="navigateTo('/keterangan')" type="button" class="flex items-center py-2 rounded w-full mt-4" :class="path.path === '/keterangan' ? 'bg-white text-[#2a3f5e]' : 'hover:bg-slate-600 hover:text-white'">
                    <Icon name="iconoir:book-solid" class="w-1/6 text-xl mr-2 ml-1" />
                    <div class="w-5/6 text-left">Panduan</div>
                </button>
            </div>
            <div class="hidden lg:block w-1/6"></div>
            <div class="w-full lg:w-5/6"><slot /></div>
        </div>
        <div class="flex items-center justify-between space-x-2 lg:hidden bg-[#2a3f5e] text-white fixed z-50 left-0 bottom-0 w-screen h-14 px-6 py-1">
            <button @click="navigateTo('/dash')" type="button" class="py-1 rounded w-[70px]" :class="path.path === '/dash' ? 'bg-white text-[#2a3f5e]' : ''">
                <Icon class="text-2xl" name="clarity:home-solid" />
                <div class="text-[10px]">Beranda</div>
            </button>
            <button @click="navigateTo('/series')" type="button" class="py-1 rounded w-[70px]" :class="path.path === '/series' ? 'bg-white text-[#2a3f5e]' : ''">
                <Icon class="text-2xl" name="fa-solid:chart-line" />
                <div class="text-[10px]">Series</div>
            </button>
            <button @click="navigateTo('/periode')" type="button" class="py-1 rounded w-[70px]" :class="path.path === '/periode' ? 'bg-white text-[#2a3f5e]' : ''">
                <Icon class="text-2xl" name="fluent-mdl2:calendar-settings" />
                <div class="text-[10px]">Periode</div>
            </button>
            <button @click="navigateTo('/keterangan')" type="button" class="py-1 rounded w-[70px]" :class="path.path === '/keterangan' ? 'bg-white text-[#2a3f5e]' : ''">
                <Icon class="text-2xl" name="iconoir:book-solid" />
                <div class="text-[10px]">Panduan</div>
            </button>
        </div>
    </div>
</template>

<script setup>
const path = useRoute()
</script>