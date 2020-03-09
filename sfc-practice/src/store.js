import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  counter: 0
};

const mutations = {
  INCREASE_COUNT(state) {
    state.counter += 1;
  },
  DECREASE_COUNT(state) {
    state.counter -= 1;
  }
};

const actions = {
  increase(context) {
    context.commit("INCREASE_COUNT");
  },
  decrease(context) {
    context.commit("DECREASE_COUNT");
  }
};

const getters = {
  getCount(state) {
    return state.counter;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});