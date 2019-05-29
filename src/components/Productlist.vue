<template>
  <div>
    <h1>Product List</h1>
    <h3>Tutorial git</h3>
    <P v-if="isloading"> show text before list </P>
    <ul v-else>
      <li v-for="product in products" :key="product.id"> {{ product.title }} - {{ product.price }} </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isloading: false,
    }
  },
  computed: {
    products() {
      return this.$store.getters.availableProducts;
    }
  },
  created() {
    this.isloading = true;
    this.$store.dispatch('fetchProducts').then(() => {
      this.isloading = false;
    })
  }
}
</script>

