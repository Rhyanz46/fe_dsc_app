<template>
    <div>
        <table>
            <tr>
                <th>Outlet ID</th>
                <th>Name</th>
                <th>Last Month Target</th>
                <th>This Mont Target</th>
            </tr>
            <tr :key="outlet.index" v-for="outlet in data" @click="select_outlet(outlet.outlet_id)">
                <td>{{outlet.outlet_id}}</td>
                <td>{{outlet.name}}</td>
                <td>{{outlet.last_month}}</td>
                <td>{{outlet.this_month}}</td>
                <div class="product-popup">
                    <div>NGRS</div>
                    <div>PERDANA SA</div>
                    <div>VF</div>
                </div>
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
            select: null,
            data: []
        }
    },
    methods: {
        get_target: function(){
            this.$axios.get(MY_OUTLET_TARGET).then((res)=>{
                this.data = res.data.data
            })
        },
        select_outlet: function(outlet_id){
            console.log(`select ${outlet_id}`)
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

.product-popup{
    background: red;
    padding: 30px;
    position: absolute;
}
</style>