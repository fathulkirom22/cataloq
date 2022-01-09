<template lang="pug">
  .grid
    .grid-item(v-for="product in products")
      ecommerce-item(:product="product")
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    products: []
  }),
  async fetch() {
    this.products = await this.$repositories.products.index()
  }
}
</script>

<style lang='sass' scoped>
.grid
  display: grid
  grid-gap: 20px
  grid-template-columns: repeat(4, 1fr)
  justify-items: center
  .grid-item
    grid-column: span 1
    grid-row: span 1
</style>
