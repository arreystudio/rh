export const useReference = () => {
    const icon = ref([
        'fxemoji:chilipepper', // cabai rawit
        'noto:hot-pepper', // cabai merah
        'noto:egg', // telur ayam ras
        'noto-v1:egg', // telur ayam kampung
        'twemoji:onion', // bawang putih
        'fxemoji:cookedrice', // beras
        'noto-v1:fish', // bandeng
        'noto:chicken', // daging ayam ras
        'game-icons:milk-carton', // susu bubuk
        'mdi:spoon-sugar', // gula
        'fluent-emoji:onion', // bawang merah
        'icon-park:five-key', // susu bubuk balita
        'game-icons:flour', // tepung terigu
        'mdi:boil-point', // minyak goreng
        'mdi:cooktop-burner', // bahan bakar rumah tangga
        'mdi:gold', // emas
        'fluent-emoji:cut-of-meat', // daging sapi
        'twemoji:glass-of-milk', // susu kental manis
        'noto:fish', // kembung
        'noto:baby-bottle', // susu bubuk bayi
        'noto:beans', // tempe
        'fluent:rectangle-landscape-sparkle-24-filled', // tahun
        'noto:tomato' //tomat
    ])

    const bulan = ref([
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
    ])

    const bulan_short = ref([
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Agu',
        'Sep',
        'Okt',
        'Nov',
        'Des'
    ])
    return { icon, bulan, bulan_short }
}