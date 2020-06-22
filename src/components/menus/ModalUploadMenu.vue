<template>
    <div>
        <div class="container wrapper-center">
            <div class="modal-content wrapper-center">
                <div>
                    <div><input type="date" v-model="date"></div>
                    <div class="btn-file"><font-awesome-icon icon="file-alt" size="2x"/> <input type="file"></div>
                    <div class="container-btn-upload">
                        <button @click="upload" class="btn-upload">Upload</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalUploadMenu',
    data: function(){
        return {
            date:  new Date().toISOString().slice(0,10)
        }
    },
    methods: {
        upload: function(){
            console.log("wow")
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
input[type=date] {
  height: 35px;
  margin: 0 auto;
  width: 100%;
  font-family: arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  background: #B5B5B5;
  outline: none;
  border: 0;
  border-radius: 3px;
  padding: 0 3px;
  color: black;
}
input[type=date]::-webkit-datetime-edit-month-field {
    color: red;
}
.btn-file {
  position: relative;
  overflow: hidden;
  background: #B5B5B5;
  margin-top: 10px;
  padding: 10px;
  color: #674040;
  text-align: center;
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
</style>