<template>
    <div>
        <div class="sub-menu" v-show="show_sub_menu">
            <div class="sub-menu-btn-close" @click="close_sub_menu">
                <font-awesome-icon icon="times-circle" size="lg"/> 
            </div>
            <div class="sub-menu-desc">
                Outlet ID : {{outlet_id}}
                <hr/>
            </div>
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
            outlet_id: null,
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
            this.outlet_id = outlet_id
            this.$emit('sub_menu_selected', true)
            if(!this.show_sub_menu){
                setTimeout(()=>{this.show_sub_menu = true},300, this)
            }
        },
        close_sub_menu: function(){
            this.outlet_id = null
            this.$emit('sub_menu_selected', false)
            this.show_sub_menu = false
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
.sub-menu-desc{
    padding: 10px;
}
.sub-menu-body{
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    position: relative;
}
.sub-menu-body .sub-menu-list{
    background: #2c2f4e;
    padding: 10px;
    margin-bottom: 2px;
    cursor: pointer;
}
.sub-menu-body .sub-menu-list:hover{
    background: #161827;
    box-shadow: 3px 5px 19px 0px rgba(0,0,0,0.75);
}
.sub-menu-body .sub-menu-list:last-child:hover{
    background: #940303;
}
.sub-menu-btn-close{
    position: absolute;
    right: 9px;
    cursor: pointer;
}
</style>