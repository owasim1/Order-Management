<template>
  <div id="app" class="container my-5">
    <h1>Order Management</h1>
    <div class="row">
      <Item v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :price="item.price"/>
    </div>
  </div>
</template>
<script>
import Item from './components/Item.vue'
export default {
  name: 'app',
  data() {
  return {
    forSale: [
      { invId: 1, name: 'Item 1', price: 1199 },
      { invId: 2, name: 'Item 2', price: 1249 },
      { invId: 3, name: 'Item 3', price: 649 },
      { invId: 4, name: 'Item 4', price: 125 },
      ],
    };
  },
  components: {
    Item,
  },
};
</script>
<style>
  /* Nothing for now */
</style>
