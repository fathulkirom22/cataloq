<template lang="pug">
  div
    skeleton-loader-list-product(v-if="$fetchState.pending")
    error-fetch(v-else-if="$fetchState.error")
    list-product(v-else :products="products")
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
</style>
