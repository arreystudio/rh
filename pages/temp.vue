<template>
    <div>
        <slot />
        <div class="flex items-center justify-between space-x-2 lg:hidden bg-[#2a3f5e] text-white fixed z-50 left-0 bottom-0 w-screen h-14 px-6 py-1">
            <button @click="navigateTo('/dash')" type="button" class="py-1 rounded w-[70px]" :class="path.path === '/dash' ? 'bg-white text-[#2a3f5e]' : ''">
                <Icon class="text-2xl" name="clarity:home-solid" />
                <div class="text-[10px]">Beranda</div>
            </button>
            <button @click="navigateTo('/series')" type="button" class="py-1 rounded w-[70px]" :class="path.path === '/series' ? 'bg-white text-[#2a3f5e]' : ''">
                <Icon class="text-2xl" name="fa-solid:chart-line" />
                <div class="text-[10px]">Series</div>
            </button>
            <button @click="navigateTo('/keterangan')" type="button" class="py-1 rounded w-[70px]" :class="path.path === '/keterangan' ? 'bg-white text-[#2a3f5e]' : ''">
                <Icon class="text-2xl" name="iconoir:book-solid" />
                <div class="text-[10px]">Keterangan</div>
            </button>
            <button @click="navigateTo('/periode')" type="button" class="py-1 rounded w-[70px]" :class="path.path === '/periode' ? 'bg-white text-[#2a3f5e]' : ''">
                <Icon class="text-2xl" name="fluent-mdl2:calendar-settings" />
                <div class="text-xs text-[10px]">Periode</div>
            </button>
        </div>
    </div>
</template>

<script setup>
const path = useRoute()
</script>