<template>
    <div>
        <div class="container wrapper-center">
            <div class="modal-content wrapper-center">
                <dir class="label-data">
                    {{real_name(selected)}}
                </dir>
                <div 
                    class="container-list-search wrapper-center" 
                    v-if="show_search_field(selected)">
                    <input class="list-search" type="text" placeholder="Cari . . .">
                </div>
                <div class="container-list">
                    <div class="list" :key="item.id" v-for="item in data">{{item.name}}</div>
                    <div>terus</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterModal",
    props: [
        'selected'
    ],
    data: function(){
        return {
            data: [
                {name: this.$props.selected, id:1},
                {name: this.$props.selected, id:2},
                {name: this.$props.selected, id:3},
                {name: this.$props.selected, id:4},
                {name: this.$props.selected, id:5},
                {name: this.$props.selected, id:6},
                {name: this.$props.selected, id:7},
                {name: this.$props.selected, id:8},
                {name: this.$props.selected, id:9},
                {name: this.$props.selected, id:10},
                {name: this.$props.selected, id:11},
            ]
        }
    },
    methods: {
        real_name: function(field_name){
            return field_name.replace("_"," ").toUpperCase()
        },
        show_search_field(selected){
            switch (selected) {
                case 'hari_kunjungan':
                    return false
                case 'jenis_penjualan':
                    return false
                case 'device':
                    return false
                case 'kategori_outlet':
                    return false
                default:
                    return true
            }
        }
    }
}
</script>

<style scoped>
.container{
    position: fixed;
    width: 100%;
    height: 45%;
    top: 29vh;
    z-index: 1;
}
.wrapper-center{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
}
.modal-content{
    margin-top: 100px;
    background: #C4C4C4;
    width: 500px;
    height: 365px;
    border-radius: 10px;
    padding: 10px;
    align-items: normal;
}
.list{
    margin-top: 5px;
    background: coral;
    cursor: pointer;
    padding: 5px;
}
.list:nth-child(1){
    margin-top: 0px;
}
.list:hover{
    background: seagreen;
    color: white;
}
.container-list-search{
    margin-bottom: 10px;
}
.list-search{
    background: seagreen;
    padding: 10px;
    border-radius: 10px;
    border: none;
    color: white;
}
.list-search{
    width: 90%;
}
.container-list{
    overflow-y: scroll;
    /* overflow: hidden; */
}
textarea:focus, input:focus{
    outline: none;
    text-align: center;
}
.label-data{
    border-bottom: 5px solid #9c9090;
    text-align: center;
    padding: 0px;
}
::-webkit-scrollbar {
    display: none;
}
::placeholder {
  color: #b5b5b5;
  opacity: 1; /* Firefox */
  text-align: center;
}
</style>