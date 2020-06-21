<template> 
    <div>
        <div class="sub-menu wrapper-center">
            <div class="menus-container">
                <div class="filter-list wrapper-center" @click="switch_modal('kabupaten')">Kabupaten</div>
                <div class="filter-list wrapper-center" @click="switch_modal('supervisor')">Supervisor</div>
            </div>
            <div class="menus-container">
                <div class="filter-list wrapper-center" @click="switch_modal('kecamatan')">Kecamatan</div>
                <div class="filter-list wrapper-center" @click="switch_modal('sales_force')">Sales Force</div>
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
        <FilterModal v-if="modal" @switch_modal="switch_modal(null)" v-bind:selected="selected"/>
    </div> 
</template>

<script>
import FilterModal from "@/components/menus/filter/Modal";

export default {
    name: "FilterMenu",
    components: {
        FilterModal,
    },
    data: function (){
        return {
            modal: false,
            selected: null
        }
    },
    methods: {
        switch_modal: function(field){
            console.log(this.selected, this.field)
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
    background: plum;
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