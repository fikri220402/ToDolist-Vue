import Vue from "vue";
import App from "./App.vue";
import Bootstrapvue from "bootstrap-vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap-icons/font/bootstrap-icons';

Vue.use(Bootstrapvue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");