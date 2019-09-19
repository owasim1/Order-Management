import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    availableItems: [
      { invId: 1, name: 'Item 1', price: 1199 },
      { invId: 2, name: 'Item 2', price: 1249 },
      { invId: 3, name: 'Item 3', price: 649 },
      { invId: 4, name: 'Item 4', price: 125 },
      ],
      inCheckout: [

      ],
  },
  getters: {
    availableItems: state => state.availableItems,
    inCheckout: state => state.inCheckout,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCheckout.push(invId); },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
  },
});
