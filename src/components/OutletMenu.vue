<template>
    <div class="flex-container">
        <div class="row-table" ref="menu_container">
            <div class="list-menu" v-if="!selected">
                <div @click="selected = 'add_outlet_target'">
                    Outlet List
                </div>
                <div>
                    Upload History
                </div>
                <div>
                    Pengaturan Account
                </div>
            </div>
            <div v-else>
                <IndexOutletMenu :selected="selected" @sub_menu_selected='sub_menu_selected'/>
            </div>
            <div class="close" @click="close">
                <font-awesome-icon icon="home" size="2x" v-if="!selected"/>
                <font-awesome-icon icon="chevron-circle-left" size="2x" v-else/>
            </div>
       </div>
    </div>
</template>

<script>
import IndexOutletMenu from "@/components/outlet_menu/Index";

export default {
    name: 'OutletMenu',
    components: {
        IndexOutletMenu
    },
    data: function(){
        return {
            selected: null,
            to_left: false
        }
    },
    methods: {
        close: function(){
            if(this.to_left){
                this.$refs.menu_container.style.marginRight = "0px"
            }
            if (this.selected){
                this.selected = null
            }else{
                this.$router.replace({path: '/report/kabupaten'})
            }
        },
        sub_menu_selected: function(selected){
            this.to_left = selected
            if(selected){
                this.$refs.menu_container.style.marginRight = "35%"
            }else{
                this.$refs.menu_container.style.marginRight = "0px"
            }
        }
    }
}
</script>

<style scoped>
.flex-container{
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    position: relative;
}
.row-table {
    width: 50%;
    background: #4D527E;
    border-radius: 10px;
    padding: 10px;
    color: white;
    display: flex;
    /* align-items: center; */
    min-height: 80vh;
    flex-direction: column;
    position: relative;
    transition: all 0.5s;
}
.close{
    position: absolute;
    left: -43px;
    cursor: pointer;
    color: #4d527d;
}
.list-menu{
    display: grid;
    /* grid-template-rows: repeat(3, [row-start] 1fr [row-end]);
    grid-template-columns: repeat(3, [col-start] 1fr [col-end]); */
}
.list-menu > div {
    background: #d3d2d8;
    padding: 30px;
    margin: 2px;
    cursor: pointer;
    /* border-radius: 10px; */
    color: black;
}
.list-menu > div:hover {
    color: white;
    background: rgb(211,210,216);
    background: linear-gradient(0deg, rgba(211,210,216,0.8925945378151261) 9%, rgba(9,31,70,0.654499299719888) 22%, rgba(211,210,216,0) 47%);
}
</style>