import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Guard from "./middleware";
import Prototypes from "./utils/prototypes";

Vue.prototype = Prototypes()
Vue.config.productionTip = false

new Vue({
  router: router(Guard),
  render: h => h(App),
}).$mount('#app')
