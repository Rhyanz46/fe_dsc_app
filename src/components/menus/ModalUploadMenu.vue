<template>
    <div>
        <div class="container wrapper-center">
            <div class="modal-content wrapper-center">
                <div>
                    <!-- <div class="container-date"><input type="date" v-model="date"></div> -->
                    <div class="btn-file">
                        <font-awesome-icon icon="file-alt" size="2x"/> 
                        <input type="file" ref="file" @change="handleFileUpload">
                    </div>
                    <div class="container-btn-upload">
                        <button @click="upload" class="btn-upload">Upload</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { REPORT } from "@/store/urls";

export default {
    name: 'ModalUploadMenu',
    data: function(){
        let today_obj = new Date()
        let month = today_obj.getMonth()+1;
        if (String(month).length == 1){month = `0${month}`}
        let today = `${today_obj.getFullYear()}-${month}-${today_obj.getDate()}`;

        return {
            date: today,
            file: ''
        }
    },
    methods: {
        upload: function(){
            let formData = new FormData();
            if (this.file == ''){
                console.log("gagal")
                return
            }
            formData.append('date', this.date)
            formData.append('file', this.file)
            this.$axios.post(REPORT, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(()=>{
                alert("sukses")
            }).catch(()=>{
                alert("gagal")
            })
        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        }
    }
}
</script>
<style scoped>
.container{
    position: fixed;
    background: linear-gradient(180deg, #221F39 1.06%, rgba(236, 117, 117, 0) 100%);
    width: 100%;
    height: 100%;
    top: 0px;
}
.wrapper-center{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
}
.modal-content{
    background: #C4C4C4;
    width: 500px;
    height: 265px;
    border-radius: 10px;
    padding: 10px;
}
/* input[type=date] {
  height: 35px;
  margin: 0 auto;
  width: 96%;
  font-family: arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  background: #B5B5B5;
  outline: none;
  border: 0;
  border-radius: 3px;
  padding: 0 3px;
  color: #674040;
  cursor: pointer;
} */
.btn-file {
  position: relative;
  overflow: hidden;
  background: #B5B5B5;
  margin-top: 10px;
  padding: 10px;
  color: #674040;
  text-align: center;
  cursor: pointer;
}
.btn-file input[type=file] {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  font-size: 100px;
  text-align: right;
  filter: alpha(opacity=0);
  opacity: 0;
  outline: none;
  background: white;
  cursor: inherit;
  display: block;
}
.btn-upload{
    background: #B5B5B5;
    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 2px 11px -1px rgba(0,0,0,0.75);
}
.container-btn-upload{
    margin-top: 10px;
    display: flex;
    justify-items: center;
    justify-content: center;
}
textarea:focus, input:focus, button:focus{
    outline: none;
    text-align: center;
}
/* .container-date{
    cursor: pointer;
} */


::-webkit-search-cancel-button,
::-webkit-clear-button {
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg fill="%23000" fill-opacity=".54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"/%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3C/svg%3E');
  color: #674040;
  cursor: pointer;
  height: 1.5rem;
  margin-right: 0;
  width: 1.5rem;
}

::-webkit-calendar-picker-indicator {
  color: #674040;
  opacity: 1;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg fill="%23000" fill-opacity=".54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3C/svg%3E');
  width: 14px;
  height: 18px;
  cursor: pointer;
  border-radius: 50%;
  margin-left: .5rem;
}
::-webkit-calendar-picker-indicator:hover {
  -webkit-box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.04);
          box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.04);
}
</style>