<template>
    <div class="flex-container">
        <div class="row">
            <table class="table-data">
                <tr><th>No</th><th>Nama</th></tr>
                <tr><td>1</td><td>Arian</td></tr>
                <tr><td>2</td><td>Saputra</td></tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
.table-data{
    border-spacing: 0px;
}
.table-data th{
    padding: 10px;
    background: red;
    /* border-top: 1px solid #ddd; */
}
.table-data td{
    padding: 10px;
    border-collapse: collapse;
    border-top: 1px solid #ddd;
}
.flex-container {
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
.row {
    width: 75%;
    background: #4D527E;
    border-radius: 10px;
    padding: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 65vh;
}
.flex-item {
    background-color: tomato;
    padding: 5px;
    width: 20px;
    height: 20px;
    margin: 10px;
    line-height: 20px;
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
}
</style>