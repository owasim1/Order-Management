<template>
  <div id="app" class="container my-5">
    <h1 align="center">Order Management</h1>
    <div class="col-md-3">
        <ShoppingCart />
    </div>
    <div class="row">
      <Item v-for="item in availableItems"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :price="item.price"/>
    </div>
  </div>
</template>
<script>
import Item from './components/Item.vue'
import ShoppingCart from './ShoppingCart.vue'
export default {
  name: 'app',
  computed: {
    availableItems() { return this.$store.getters.availableItems; },
    inCheckout() { return this.$store.getters.inCheckout; },
  },
  components: {
    Item,
    ShoppingCart,
  },
};
</script>
<style>
  /* Nothing for now */
</style>
