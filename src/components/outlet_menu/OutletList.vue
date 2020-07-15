<template>
    <div>
        <div class="sub-menu" ref="sub_menu" v-show="show_sub_menu">
            <div class="sub-menu-desc"></div>
            <div class="sub-menu-body">
                <div class="sub-menu-list">Pasang Target</div>
                <div class="sub-menu-list">Edit Target</div>
                <div class="sub-menu-list">Delete</div>
            </div>
        </div>
        <table>
            <tr>
                <th>Outlet ID</th>
                <th>Name</th>
                <th>Last Month Target</th>
                <th>This Mont Target</th>
            </tr>
            <tr :key="outlet.index" v-for="outlet in data">
                <td>{{outlet.outlet_id}}</td>
                <td @click="select_outlet(outlet.outlet_id)">{{outlet.name}}</td>
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
    name: 'OutletList',
    data: function(){
        return {
            show_sub_menu: false,
            selected: false,
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
            this.selected = !this.selected
            console.log(`select ${outlet_id}`)
            // console.log(this.$refs.sub_menu)
            this.$emit('sub_menu_selected', this.selected)
            if(!this.show_sub_menu){
                console.log("google")
                setTimeout(()=>{this.show_sub_menu = !this.show_sub_menu},300, this)
            }else{
                console.log("wowo")
                this.show_sub_menu = !this.show_sub_menu
            }
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
    border-spacing: 0px;
    width: 100%;
    position: relative;
    border-collapse: collapse;
    overflow-x: auto;
}
table th{
    padding: 10px;
    background: #bebdc3;
}
table td, th{
    padding: 10px;
    border: 1px solid #ddd;
}
table tr{
    cursor: text;
}
table tr td:nth-child(2){
    cursor: pointer;
}
table tr:hover {background-color: #ddd;}

.sub-menu{
    background: #4D527E;
    border-radius: 10px;
    color: white;

    top: 0px;
    padding: 10px;
    position: absolute;
    width: 68%;
    box-shadow: 3px 5px 19px 0px rgba(0,0,0,0.75);
    right: -74%;
    min-height: 85vh;
    transition: all 0.5s;
}
</style>