<template>
    <div>
        <div class="container">
            <div class="wrapper-center">
                <div class="btn-container wrapper-center">
                    <div ref="btn_filter" class="btn-menus btn-filter wrapper-center" @click="change_menu('menu','filter')">
                        <font-awesome-icon icon="filter" size="lg"/> 
                    </div>
                </div>
                <div class="btn-container wrapper-center">
                    <div ref="btn_upload" class="btn-menus btn-upload wrapper-center" @click="change_menu('upload_menu', !upload_menu)">
                        <font-awesome-icon icon="file-upload" size="2x"/> 
                    </div>
                </div>
                <div class="btn-container wrapper-center">
                    <div ref="btn_menu" class="btn-menus btn-menu wrapper-center" @click="change_menu('menu','common')">
                        <font-awesome-icon icon="bars" size="lg"/> 
                    </div>
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
            upload_menu: true
        }
    },
    methods: {
        change_menu: function(key, value){
            if(typeof value == 'boolean'){
                if(this.upload_menu == false){
                    this.$children[0].modal = false
                }
            }
            if(value == 'filter'){
                if (this.$children[0].modal){
                    this.$children[0].modal = false
                }
            }
            this.change_active_menu_style(value)
            this.$change_state(this, key, value)
        },
        change_active_menu_style: function(value){
            this.$refs.btn_filter.style.color = "#868686"
            this.$refs.btn_menu.style.color = "#868686"
            this.$refs.btn_upload.style.color = "#868686"
            if(value == 'filter'){
                this.$refs.btn_filter.style.color = "#704848"
            }else if(value == 'common'){
                this.$refs.btn_menu.style.color = "#704848"
            }else{
                if (this.upload_menu){
                    this.$refs.btn_upload.style.color = "#868686"
                    if(this.menu == 'filter'){
                        this.$refs.btn_filter.style.color = "#704848"
                    }else{
                        this.$refs.btn_menu.style.color = "#704848"
                    }
                }else{
                    this.$refs.btn_upload.style.color = "#704848"
                }
            }
        }
    },
    mounted: function(){
        this.change_active_menu_style(this.menu)
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
    align-items: center !important;
    cursor: pointer;
    top: 18px;
    position: relative;
    background: #ACACAC;
    color: #868686;
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

.btn-menus:hover{
    color: #704848;
}

</style>