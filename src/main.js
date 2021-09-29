import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import Paginate from "vuejs-paginate";
import store from "./store-vuex";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/vi.json";
import axios from "axios";
import VueAxios from "vue-axios";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import dotenv from "dotenv";
import myVideo from "vue-video";
import VueCookies from "vue-cookies";
import VueFacebook from "vue-facebook";

Vue.component("paginate", Paginate);
const options = {
  position: "bottom-right",
};
// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});
Vue.use(VueAxios, axios);
Vue.use(Toast, options);
dotenv.config();
Vue.use(VueCookies);
// Vue.$cookies.config("30d", "");
Vue.use(VueFacebook);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  myVideo,
  render: (h) => h(App),
}).$mount("#app");
