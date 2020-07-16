<template>
    <div>
        <div class="form">
            <div>
                <div>Product Name :</div>
                <div>
                    <select v-model="product_selected">
                        <option value="product_default_djueux">Pilih Product</option>
                        <option :key="product.name" v-for="product in product_list">
                            {{product.name}}
                        </option>
                    </select>
                </div>
            </div>
            <div>
                <div>Target Untuk Waktu : </div>
                <div>
                    <select v-model="bulan_selected">
                        <option value="bulan">Bulan</option>
                        <option 
                            :key="bulan" 
                            v-for="bulan in bulan_list">
                            {{bulan}}
                        </option>
                    </select>
                    <select v-model="tahun_selected">
                        <option value="tahun">Tahun</option>
                        <option 
                            :key="tahun" 
                            v-for="tahun in tahun_list">
                            {{tahun}}
                        </option>
                    </select>
                </div>
            </div>
            <div>
                <div>Jumlah : </div>
                <input v-model.number="target_value" type="number">
            </div>
            <div>
                <div><button @click="set_target">Pasang</button></div>
            </div>
        </div>
    </div>
</template>

<script>
import { STACK_PRODUCT, OUTLET_TARGET } from "@/store/urls";
import { get_year_list_between } from "@/utils/functions";
export default {
    name: 'SetTarget',
    props: ['outlet_id'],
    data: function(){
        return {
            product_list: [
                { name: "NGRS" },
                { name: "PERDANA SA" },
                { name: "VF" },
                { name: "AW" },
            ],
            tahun_list: [],
            tahun_selected: "tahun",
            bulan_list: [],
            bulan_selected: 'bulan',
            product_selected: "product_default_djueux",
            month_target: null,
            target_value: null
        }
    },
    methods: {
        get_prodcut_list: function(){
            this.$axios.get(STACK_PRODUCT).then((res)=>{
                this.product_list = res.data.data
            })
        },
        set_target: function(){
            if (this.product_selected == 'product_default_djueux'){
                alert("Pilih Product")
                return
            }
            if (isNaN(this.bulan_selected) || isNaN(this.tahun_selected)){
                alert("Pilih tanggal dengan benar")
                return
            }
            if (isNaN(this.target_value)){
                alert("Jumlah Tidak Valid")
                return
            }
            this.$axios.post(OUTLET_TARGET(this.$props.outlet_id), {
                product_name: this.product_selected,
                target_value: this.target_value,
                target_date: `1-${this.bulan_selected}-${this.tahun_selected}`
            }).then(()=>{
                this.$emit('refresh_outlet_list')
            }).catch((err)=>{
                alert(err.response.data.message)
            })
        }
    },
    mounted: function(){
        let endYear = new Date();
        endYear = new Date(endYear.setFullYear(endYear.getFullYear() + 10))
        this.tahun_list = get_year_list_between(
            new Date().getFullYear(), endYear.getFullYear()
        )
        
        let count_mounth = true;
        let mounts =[]
        let start_mounth = new Date().getMonth();
        while(count_mounth){
            start_mounth+=1
            mounts.push(start_mounth)
            if (start_mounth == 12){
                break
            }
        }
        this.bulan_list = mounts

        this.get_prodcut_list();
    }
}
</script>

<style scoped>
a{
    padding: 10px;
    width: 100%;
    cursor: pointer;
}
</style>