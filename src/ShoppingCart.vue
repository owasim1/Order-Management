<template>
  <div>
    <button class="btn btn-dark" data-toggle="modal" data-target="#shoppingCart">Cart ({{ numInCart }})</button>
    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Cart</h5>
            <button class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr v-for="item in cart">
                  <td>{{ item.name }}</td>
                  <td>{{ item.price | dollars }}</td>
                  <td>
                    <button class="btn btn-sm btn-danger"
                    @click="removeFromCart(index)">&times;</button>
                  </td>
                  <th></th>
                </tr>
                <tr>
                  <th></th>
                  <th>{{ total | dollars }}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Keep Shopping</button>
            <button class="btn btn-dark">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { dollars } from './filters';

export default {
  name: 'shoppingCart',
  computed: {
    inCheckout() { return this.$store.getters.inCheckout; },
    numInCart() { return this.inCheckout.length; },
    cart() {
        return this.$store.getters.inCheckout.map((cartItem) => {
          return this.$store.getters.availableItems.find((forSaleItem) => {
            return cartItem === forSaleItem.invId;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
  filters: {
     dollars,
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
    },
  },
};
</script>
