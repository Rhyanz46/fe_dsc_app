<template> 
    <div>
        <div class="sub-menu wrapper-center">
            <div class="menus-container">
                <div class="filter-list wrapper-center" @click="switch_modal('kabupaten')">Kabupaten</div>
                <div class="filter-list wrapper-center" @click="switch_modal('supervisor')">Supervisor</div>
            </div>
            <div class="menus-container">
                <div class="filter-list wrapper-center" @click="switch_modal('kecamatan')">Kecamatan</div>
                <div class="filter-list wrapper-center" @click="switch_modal('salesforce')">Salesforce</div>
            </div>
            <div class="menus-container">
                <div></div>
                <div></div>
            </div>
            <div class="menus-container" >
                <div class="filter-list wrapper-center" @click="switch_modal('kategori_outlet')">Kategori Outlet</div>
                <div class="filter-list wrapper-center" @click="switch_modal('hari_kunjungan')">Hari Kunjungan</div>
            </div>
            <div class="menus-container">
                <div class="filter-list wrapper-center" @click="switch_modal('device')">Device</div>
                <div class="filter-list wrapper-center" @click="switch_modal('jenis_penjualan')">Retail</div>
            </div>
        </div>
        <FilterModal v-if="modal" v-bind:selected="selected" v-bind:data="data"/>
    </div> 
</template>

<script>
import FilterModal from "@/components/menus/filter/Modal";
import { DATA_BY_FIELD, URL_BY_FIELD } from "@/store/static_data";

export default {
    name: "FilterMenu",
    components: {
        FilterModal,
    },
    data: function (){
        return {
            modal: false,
            selected: null,
            data: [
                {name: "loading", id:1},
            ]
        }
    },
    methods: {
        switch_modal: function(field){
            if(URL_BY_FIELD[field]){
                this.$axios.get(URL_BY_FIELD[field]).then((res)=>{
                    this.data = res.data.data
                }).catch((err)=>{
                    console.log(err.response.message)
                })
            }else{
                this.data = DATA_BY_FIELD[field]
            }
            if(this.modal == false){
                this.selected = field
            }

            if(this.selected == null){
                this.selected = field
            }

            if(field != this.selected){
                this.selected = field
                return
            }else{
                this.modal = !this.modal
                this.selected = field
            }
        }
    }
}
</script>

<style scoped>

.sub-menu{
    background: #FFFFFF;
    margin: 5px 10% 5px 10%;
    box-shadow: 3px 5px 19px 0px rgba(0,0,0,0.75);
    padding: 5px;
    border-radius: 10px;
    height: 60px;
}

.sub-menu > .menus-container:nth-child(1) {
    flex: 1;
}

.sub-menu > .menus-container:nth-child(2) {
    flex: 1;
}

.sub-menu > .menus-container:nth-child(4) {
    flex: 1;
}

.sub-menu > .menus-container:nth-child(5) {
    flex: 1;
}

.filter-list{
    padding: 3px;
    cursor: pointer;
}

.filter-list:hover{
    background: #868686;
    color: white;
}

.wrapper-center{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: flex-end;
}

.menus-container {
    position: static;
    align-self: stretch;
    order: 0;
    flex-shrink: 0;
    flex-basis: 90px;
    padding-top: 5px;
}

</style>