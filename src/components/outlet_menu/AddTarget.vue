<template>
    <div>
        <table>
            <tr>
                <th>Outlet ID</th>
                <th>Name</th>
                <th>Last Month Target</th>
                <th>This Mont Target</th>
            </tr>
            <tr :key="outlet.index" v-for="outlet in data">
                <td>{{outlet.outlet_id}}</td>
                <td>{{outlet.name}}</td>
                <td>{{outlet.last_month}}</td>
                <td>{{outlet.this_month}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
// OUTLET_TARGET
import { MY_OUTLET_TARGET } from "@/store/urls";
export default {
    name: 'AddTarget',
    data: function(){
        return {
            data: []
        }
    },
    methods: {
        get_target: function(){
            this.$axios.get(MY_OUTLET_TARGET).then((res)=>{
                this.data = res.data.data
            })
        }
    },
    mounted: function(){
        this.get_target()
    }
}
</script>

<style scoped>
table{
    color: black;
    background: white;
    padding: 12px;
    cursor: pointer;
    border-spacing: 0px;
    width: 100%;
    border-collapse: collapse;
}
table th{
    padding: 10px;
    background: #bebdc3;
}
table td, th{
    padding: 10px;
    border: 1px solid #ddd;
}
table tr:hover {background-color: #ddd;}
</style>