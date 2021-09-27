import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShow: VueCookies.isKey("Account"),
  },

  getters: {
    // Here we will create getter
  },

  mutations: {
    // Here we will create commit
    changeIsShow(state, newIsShow) {
      state.isShow = newIsShow;
    },
  },

  actions: {
    // Here we will creta action
    handleChangeIsShow(context, newIsShow) {
      context.commit("changeIsShow", newIsShow);
    },
  },
});
