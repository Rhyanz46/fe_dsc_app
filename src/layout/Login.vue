<template>
    <div class="container wrapper-center">
        <div>
            <div>Login</div>
            <div class="form wrapper-center">
                <div>
                    <input type="text" v-model="username"/>
                </div>
                <div>
                    <input type="password" v-model="password"/>
                </div>
                <div>
                    <button @click="login">Login</button>
                </div>
            </div>
            <div class="error">
                {{error}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data: function(){
        return {
            error: "",
            username: "",
            password: ""
        }
    },
    methods: {
        login: function(){
            if( this.username == "" || this.password == ""){
                this.error = "masukkan username dan password"
                return
            }
            this.$axios.post('http://localhost:5000/user/login',{
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
            })
        }
    }
}
</script>

<style scoped>
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
}
.form > div > input:nth-child(1){
    margin-bottom: 30px;
}
textarea:focus, input:focus{
    outline: none;
}
</style>