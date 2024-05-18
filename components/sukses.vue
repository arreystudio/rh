<template>
    <div class="fixed h-screen w-screen left-0 top-0 flex items-center justify-center">
        <div class="bg-white rounded px-6 pb-4 shadow-lg">
            <div class="text-9xl text-center">
                <Icon class="mr-4 text-green-600" name="line-md:check-all" />
            </div>
            <div class="text-center">Berhasil menyimpan data</div>
            <button type="button" class="px-6 py-2 w-full text-xs bg-[#3f778c] text-white rounded mt-6" @click="$emit('tutup')">Tutup</button>
        </div>
    </div>
</template>

<script setup>
</script>