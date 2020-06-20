<template>
    <div>
        <div class="container">
            <div class="wrapper-center">
                <div class="btn-container wrapper-center">
                    <div class="btn-menus btn-filter" @click="change_state('menu','filter')"></div>
                </div>
                <div class="btn-container wrapper-center">
                    <div class="btn-menus btn-upload" @click="change_state('upload_menu', !upload_menu)"></div>
                </div>
                <div class="btn-container wrapper-center">
                    <div class="btn-menus btn-menu" @click="change_state('menu','common')"></div>
                </div>
            </div>
        </div>
        <FilterMenu v-if="menu == 'filter'"/>
        <CommonMenu v-if="menu == 'common'"/>
        <ModalUploadMenu v-if="upload_menu"/>
    </div>
</template>

<script>
import FilterMenu from "@/components/menus/FilterMenu";
import CommonMenu from "@/components/menus/CommonMenu";
import ModalUploadMenu from "@/components/menus/ModalUploadMenu";

export default {
    name: "Menus",
    components: {
        FilterMenu,
        CommonMenu,
        ModalUploadMenu
    },
    data: function(){
        return {
            menu: "filter",
            upload_menu: false
        }
    },
    methods: {
        change_state: function(key, value){
            this.$change_state(this, key, value)
        }
    }
}
</script>

<style scoped>

.container{
    background: #FFFFFF;
    margin: 3% 15% 0px 15%;
    box-shadow: 3px 5px 19px 0px rgba(0,0,0,0.75);
    padding: 5px;
    border-radius: 10px;
}

.container > .wrapper-center {
    background: #704848;
    height: 37px;
    padding: 10px;
    border-radius: 6px;
}

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

.btn-container {
    position: static;
    align-self: stretch;
    order: 0;
    flex: 1;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 90px;
}

.menus-container {
    position: static;
    align-self: stretch;
    order: 0;
    flex-shrink: 0;
    flex-basis: 90px;
    padding-top: 5px;
}

.btn-menus{
    cursor: pointer;
    top: 18px;
    position: relative;
    background: #ACACAC;
    box-shadow: 0px 2px 11px -1px rgba(0,0,0,0.75);
}

.btn-filter{
    width: 50px;
    height: 50px;
    border-radius: 25px;
}

.btn-upload{
    width: 67px;
    height: 67px;
    border-radius: 35px;
    position: relative;
    z-index: 1;
}

.btn-menu{
    width: 50px;
    height: 50px;
    border-radius: 25px;
}

</style>