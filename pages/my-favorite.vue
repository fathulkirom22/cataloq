<template lang="pug">
  div
    no-data(v-if="!products.length")
    list-product(v-else :products="products")
</template>

<script>
export default {
  name: 'MyFavoritePage',
  computed: {
    products() {
      return this.$store.state.myfavorite.products
    }
  }
}
</script>

<style lang='sass' scoped>
</style>
