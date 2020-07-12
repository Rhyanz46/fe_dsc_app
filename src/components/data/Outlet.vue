<template>
   <div class="row-table-data1212">
       VOUCHER FISIK PERFORMANCE
        <table class="table-data1212">
            <tr>
                <th>No</th>
                <th>Nama Outlet</th>
                <th>ID DIGIPOS</th>
                <th>TARGET</th>
                <th>Ach</th>
                <th>%Ach</th>
                <th>W1</th>
                <th>W2</th>
                <th>W3</th>
                <th>W4</th>
            </tr>
            <tr :key="ngrs_data.index" v-for="ngrs_data in ngrs">
                <td>{{ngrs_data.index}}</td>
                <td>{{ngrs_data.name}}</td> 
                <td>{{ngrs_data.target}}</td> 
                <td>{{ngrs_data.ach}}</td> 
                <td>{{ngrs_data.ach_percent}}</td> 
                <td>{{ngrs_data.week_1}}</td> 
                <td>{{ngrs_data.week_2}}</td> 
                <td>{{ngrs_data.week_3}}</td> 
                <td>{{ngrs_data.week_4}}</td> 
            </tr>
        </table>
    </div>
</template>

<script>
import { REPORT_KABUPATEN_NGRS_PERFORMANCE } from "@/store/urls";
export default {
    name : 'ReportDataKabupaten',
    data: function(){
        return {
            ngrs_index: 0,
            ngrs: []
        }
    },
    methods: {
        load_ngrs: function(page=1){
             this.$axios.get(REPORT_KABUPATEN_NGRS_PERFORMANCE + `?page=${page}`).then((res)=>{
                this.ngrs = res.data.data
            }).catch((err)=>{
                console.log(err.response.data.message)
            })
        }
    },
    mounted: function(){
        // this.load_ngrs()
    }
}
</script>