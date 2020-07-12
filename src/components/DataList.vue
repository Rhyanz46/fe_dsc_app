<template>
    <div class="flex-container-table-data1212">
        <router-view></router-view>
        <div class="menu-table-data1212">
            <div>Outlet</div>
            <div>Kabupaten</div>
            <div>Supervisor</div>
            <div>Salesforce</div>
        </div>
        <div class="btn-menu-table-data1212">
             <font-awesome-icon icon="layer-group" size="lg"/> 
        </div>
    </div>
</template>

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
}
.menu-table-data1212 > div {
    padding: 10px;
}
.menu-table-data1212 > div:hover {
    background: #704848;
    cursor: pointer;
    color: white;
}
.menu-table-data1212 > div:nth-child(2), div:nth-child(3) {
    margin: 10px 0px 10px 0px;
}
</style>