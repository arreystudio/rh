<template>
    <div class="bg-[#3f778c] h-48 px-4 lg:px-8 overflow-y-visible">
        <div class="text-white pt-12 font-bold text-xl lg:text-2xl flex justify-center">Panduan</div>

        <div class="bg-white rounded shadow-lg px-4 py-6 mt-8">
            <div class="text-base font-bold">Relatif Harga (RH)</div>
            <div class="bg-teal-600 w-[70px] rounded-lg h-2 mt-1"></div>

            <div class="font-bold text-sm mt-4">RH > 100</div>
            <div class="text-sm">Harga mengalami kenaikan dari harga bulan sebelumnya</div>

            <div class="font-bold text-sm mt-4">RH = 100</div>
            <div class="text-sm">Harga tidak mengalami perubahan dari harga bulan sebelumnya</div>

            <div class="font-bold text-sm mt-4">{{ "RH < 100" }}</div>
            <div class="text-sm">Harga mengalami penurunan dari harga bulan sebelumnya</div>

            <div class="text-base font-bold mt-6">Menu Beranda</div>
            <div class="bg-teal-600 w-[70px] rounded-lg h-2 mt-1"></div>

            <div class="text-sm mt-4">Data RH yang tampil pada halaman <b>Beranda</b> adalah data RH terbaru. Apabila periode aktif sudah dirubah pada menu <b>Periode</b> maka data yang tampil adalah data periode aktif tersebut.</div>

            <div class="font-bold text-sm mt-4">5 Komoditas RH Tertinggi</div>
            <div class="text-sm mt-1">5 Komoditas yang mengalami kenaikan harga yang paling signifikan jika dibandingkan bulan sebelumnya.</div>

            <div class="font-bold text-sm mt-4">5 Komoditas RH Terendah</div>
            <div class="text-sm mt-1">5 Komoditas yang mengalami penurunan harga yang paling signifikan jika dibandingkan bulan sebelumnya.</div>

            <div class="font-bold text-sm mt-4">RH Per Komoditas</div>
            <div class="text-sm mt-1">Menyajikan seluruh RH periode aktif untuk setiap komoditas.</div>

            <div class="text-base font-bold mt-6">Menu Series</div>
            <div class="bg-teal-600 w-[70px] rounded-lg h-2 mt-1"></div>

            <div class="text-sm mt-4">Menyediakan kemudahan untuk melakukan analisis <i>Time Series</i> per komoditas sehingga mengetahui perubahan RH masing-masing komoditas per minggu.</div>

            <div class="font-bold text-sm mt-4">Diagram Garis Perkembangan Relatif Harga</div>
            <div class="text-sm mt-1">Menyajikan diagram garis atau <i>Line Chart</i> untuk memudahkan mengetahui pergerakan RH komoditas tertentu.</div>

            <div class="font-bold text-sm mt-4">Riwayat Perkembangan Harga</div>
            <div class="text-sm mt-1">Memberikan daftar RH komoditas terkait beserta nilai perubahannya jika dibandingkan minggu sebelumnya.</div>

            <div class="text-base font-bold mt-6">Menu Periode</div>
            <div class="bg-teal-600 w-[70px] rounded-lg h-2 mt-1"></div>

            <div class="text-sm mt-4">Menyediakan setting untuk periode aktif. Hal ini memungkinkan kita mengetahui daftar harga pada periode yang telah lalu. Jika periode aktif dirubah, anda bisa melihat perubahannya pada menu <b>Beranda</b></div>
        </div>

        <div class="h-28 lg:h-14"></div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'halaman'
})
</script>