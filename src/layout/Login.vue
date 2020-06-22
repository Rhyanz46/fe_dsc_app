<template>
    <div class="container wrapper-center">
        <div>
            <div class="top-line"></div>
            <div class="form wrapper-center">
                <div class="label">Login</div>
                <hr class="line"/>
                <div>
                    <input type="text" v-model="username" placeholder="username"/>
                </div>
                <div>
                    <input type="password" v-model="password" @keyup.enter="login" placeholder="password"/>
                </div>
                <div>
                    <button @click="login">Login</button>
                </div>
            </div>
            <div class="error" v-if="error_show">
                {{error}}
            </div>
        </div>
    </div>
</template>

<script>
import { LOGIN } from "@/store/urls";

export default {
    name: "Login",
    data: function(){
        return {
            error_show: false,
            error: "",
            username: "",
            password: ""
        }
    },
    methods: {
        login: function(){
            let error_time = 5000;
            if( this.username == "" || this.password == ""){
                this.error = "masukkan username dan password"
                this.error_show = true
                setTimeout(()=>{
                    this.error_show = false
                }, error_time, this)
                return
            }
            this.$axios.post(LOGIN,{
                username: this.username, 
                password: this.password
            }).then((res)=>{
                window.localStorage.setItem('token', res.data.token)
                this.$axios.defaults.headers = {
                    'Authorization': 'Bearer ' + res.data.token
                }
                this.$router.replace({path: '/'})
            }).catch((err)=>{
                this.error = err.response.data.message
                this.error_show = true
                setTimeout(()=>{
                    this.error_show = false
                }, error_time, this)
            })
        }
    }
}
</script>

<style scoped>
textarea:focus, input:focus{
    outline: none;
}
::-webkit-input-placeholder {
   text-align: center;
   color: #d4d4d4;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;  
   color: #d4d4d4;
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;  
   color: #d4d4d4;
}

:-ms-input-placeholder {  
   text-align: center; 
   color: #d4d4d4;
}

/*  */

.container{
    height: 100vh;
}
.wrapper-center{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
}
.form{
    width: 258px;
    height: 315px;
    left: 273px;
    top: 30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
}
.form > div > input {
    width: 176px;
    height: 36px;
    left: 314px;
    top: 115px;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: large;
    background: #704848;
    
    padding-left: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    border: none;
    text-align: center;
}
.form > div > input:nth-child(1){
    margin-bottom: 30px;
}
.form > div > button:nth-child(1){
    width: 110px;
    height: 27px;
    left: 347px;
    top: 240px;

    background: #7C7C7C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    border: none;
    color: white;
    cursor: pointer;
    
    transition: 1s;
}
.form > div > button:nth-child(1):hover{
    background: #7C7CdF;
}
.label{
    font-family: Mirza;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 5px;
}
.line{
    background: #E3E3E3;
    padding: 1px;
    width: 80%;
    border: none;
    margin-bottom: 30px;
}
.error{
    position: absolute;
    top: 13vh;
    text-align: center;
    color: wheat;
    background: firebrick;
    width: 258px;
}
.top-line{
    width: 176px;
    height: 8px;
    left: 314px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    margin-bottom: 6px;
    margin-left: 41px;
}
</style>