import { 
    STACK_KABUPATEN, STACK_SUPERVISOR, 
    STACK_KECAMATAN, STACK_SALESFORCE 
} from "@/store/urls";

export let URL_BY_FIELD = {
    kabupaten: STACK_KABUPATEN,
    supervisor: STACK_SUPERVISOR,
    kecamatan: STACK_KECAMATAN,
    salesforce: STACK_SALESFORCE
}

export let DATA_BY_FIELD = {
    kategori_outlet: [
        {name: "SILVER", id:1},
        {name: "PLATINUM", id:2},
        {name: "GOLD", id:3},
        {name: "BRONZE", id:4}
    ],
    hari_kunjungan: [
        {name: "Senin", id:1},
        {name: "Selasa", id:2},
        {name: "Rabu", id:3},
        {name: "Kamis", id:4},
        {name: "Jumat", id:5},
        {name: "Sabtu", id:6},
        {name: "Minggu", id:7}
    ],
    jenis_penjualan: [
        {name: "Retail", id: 1},
        {name: "Wholesales", id: 2},
    ],
    device: [
        {name: "REG", id: 1},
        {name: "OSAKA", id: 2},
        {name: "DEV", id: 3}
    ]
}
