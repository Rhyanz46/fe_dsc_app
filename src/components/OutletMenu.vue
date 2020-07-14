<template>
    <div class="flex-container">
        <div class="row-table">
            <div class="list-menu" v-if="!selected">
                <div @click="selected = 'add_outlet_target'">
                    Pasang Target Outlet
                </div>
                <div>
                    Hapus Data Terakhir ( on progress )
                </div>
                <div>
                    Menu Lain ( on progress )
                </div>
                <div>
                    Menu Lain ( on progress )
                </div>
            </div>
            <div v-else>
                <IndexOutletMenu :selected="selected"/>
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
            selected: null
        }
    },
    methods: {
        close: function(){
            if (this.selected){
                this.selected = null
            }else{
                this.$router.replace({path: '/report/kabupaten'})
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