<template>
    <div class="flex-container-table-data1212">
        <router-view></router-view>
        <div class="menu-table-data1212" v-show="show_list_menu">
            <router-link to="/report/kabupaten">Kabupaten</router-link>
            <router-link to="/report/supervisor">Supervisor</router-link>
            <router-link to="/report/salesforce">Salesforce</router-link>
            <router-link to="/report/outlet">Outlet</router-link>
        </div>
        <div class="btn-menu-table-data1212" @click="show_list_menu = !show_list_menu">
             <font-awesome-icon icon="layer-group" size="lg"/> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataList',
    data: function(){
        return {
            show_list_menu: false
        }
    }
}
</script>

<style>
.flex-container-table-data1212 {
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
}
.row-table-data1212 {
    width: 75%;
    background: #4D527E;
    border-radius: 10px;
    padding: 10px;
    color: white;
    display: flex;
    align-items: center;
    min-height: 65vh;
    flex-direction: column;
}
.table-data1212{
    border-spacing: 0px;
    width: 80%;
}
.table-data1212 th{
    padding: 10px;
    background: red;
    /* border-top: 1px solid #ddd; */
}
.table-data1212 td{
    padding: 10px;
    border-collapse: collapse;
    border-top: 1px solid #ddd;
}
.btn-menu-table-data1212{
    position: fixed;
    bottom: 10px;
    left: 10px;
    background: white;
    padding: 12px;
    border-radius: 10px;
    cursor: pointer;
    color: #a2a2a2;
}
.btn-menu-table-data1212:hover{
    color: #704848;
    box-shadow: 0px 2px 11px -1px rgba(255, 255, 255, 0.75);
}
.menu-table-data1212{
    position: fixed;
    background: white;
    padding: 16px;
    border-radius: 10px;
    bottom: 58px;
    left: 48px;
    display: grid;
}
.menu-table-data1212 > a {
    color: black;
    text-decoration: none;
}
.menu-table-data1212 > a {
    padding: 10px;
}
.menu-table-data1212 > a:hover {
    background: #704848;
    cursor: pointer;
    color: white;
}
.menu-table-data1212 > a:nth-child(2){
    margin: 10px 0px 10px 0px;
}
.menu-table-data1212 > a:nth-child(3) {
    margin: 0px 0px 10px 0px;
}
</style>