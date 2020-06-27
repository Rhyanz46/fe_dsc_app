import { STACK_KABUPATEN, STACK_SUPERVISOR, STACK_KECAMATAN, STACK_SALESFORCE } from "@/store/urls";

export let URL_BY_FIELD = {
    kabupaten: STACK_KABUPATEN,
    supervisor: STACK_SUPERVISOR,
    kecamatan: STACK_KECAMATAN,
    salesforce: STACK_SALESFORCE
}

export let DATA_BY_FIELD = {
    kategori_outlet: [
        {name: "kategori outlet", id:1},
        {name: "kategori outlet 1", id:2},
        {name: "kategori outlet 1212", id:3},
        {name: "kategori outlet dede", id:4}
    ],
    hari_kunjungan: [
        {name: "senin", id:1},
        {name: "selasa", id:2},
        {name: "rabu", id:3},
        {name: "kamis", id:4},
        {name: "jumat", id:5},
        {name: "sabtu", id:6},
        {name: "minggu", id:7}
    ],
    jenis_penjualan: [
        {name: "Retail", id: 1}
    ],
    device: [
        {name: "WOW", id: 1}
    ]
}
