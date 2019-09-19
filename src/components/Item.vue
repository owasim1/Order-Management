<template>
  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-text">{{ price | dollars }}</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary">Add to Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'item',
    props:['invId', 'name', 'price'],
    filters: {
    dollars: num => `$${num / 100}`,
  },
  };
</script>
