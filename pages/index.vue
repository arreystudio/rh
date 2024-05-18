<template>
    <div class="bg-white relative w-screen h-screen flex items-center justify-center">
        <div>
            <div class="flex">
                <img src="/bps.png" alt="logo_bps" class="w-[60px] md:w-[80px] lg:w-[100px] mr-4" />
                <div class="text-blue-500 font-bold font-[arial] italic text-sm md:text-base lg:text-lg">
                    <div>BADAN PUSAT STATISTIK</div>
                    <div>KOTA MAKASSAR</div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-20">
            <div class="w-full text-5xl text-center mt-16 text-teal-600"><Icon name="eos-icons:bubble-loading" /></div>
            <div class="mt-6 w-full text-center">Mohon Tunggu</div>
        </div>
    </div>
</template>

<script setup>
setTimeout(() => {
    navigateTo('/dash')
}, 5000)
</script>