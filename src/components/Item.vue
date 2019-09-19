<template>
  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-text">{{ price | dollars }}</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary" @click="addToCart(invId)">Add to Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { dollars } from '../filters';

  export default{
    name: 'item',
    props:['invId', 'name', 'price'],
    methods: {
      addToCart(invId) {
        this.$store.dispatch('addToCart', invId);
      }
    },
    filters: {
    dollars,
  },
  };
</script>
