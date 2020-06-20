import Vue from 'vue'
import Axios from 'axios'
import { BASE_URL } from "@/store/urls";
import { getToken } from "@/middleware/get_token";
import { change_state } from "@/utils/functions";

export default function(){
    Vue.prototype.$change_state = change_state;

    Vue.prototype.$axios = Axios;
    Vue.prototype.$axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response.status == 401){
            localStorage.removeItem('token')
            location.reload();
        }
        return Promise.reject(error);
    });
    Vue.prototype.$axios.defaults.baseURL = BASE_URL;
    Vue.prototype.$axios.defaults.headers = {
        'Authorization': 'Bearer ' + getToken()
    }
    return Vue.prototype
}
