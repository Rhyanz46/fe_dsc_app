<template>
    <div class="flex-container-table-data1212">
        <router-view></router-view>
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
</style>