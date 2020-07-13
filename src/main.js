import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Guard from "./middleware";
import Prototypes from "./utils/prototypes";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faAlignJustify, faPlus, faTimesCircle, faFileUpload, faFilter, faBars, faFileAlt, faLayerGroup, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUserSecret, faAlignJustify, faPlus,
  faTimesCircle, faFileUpload, faFilter,
  faBars, faFileAlt, faLayerGroup, faHome
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype = Prototypes()
Vue.config.productionTip = false

new Vue({
  router: router(Guard),
  render: h => h(App),
}).$mount('#app')
