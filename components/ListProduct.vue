<template lang="pug">
  .grid(v-else)
    .grid-item(v-for="product in products" :key="product.id")
      ecommerce-item(:product="product")
</template>

<script>
export default {
  name: 'ListProduct',
  props: {
    products: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>

<style lang='sass' scoped>
.grid
  display: grid
  grid-gap: 20px
  grid-template-columns: repeat(1, 1fr)
  justify-items: center
  .grid-item
    grid-column: span 1
    grid-row: span 1
@media (min-width: 768px)
  .grid
    grid-template-columns: repeat(2, 1fr)
@media (min-width: 1200px)
  .grid
    grid-template-columns: repeat(4, 1fr)
</style>
