<template lang="pug">
  div
    p(v-if="products.length === 0") No have favorite
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
