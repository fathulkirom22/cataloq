<template lang="pug">
  div
    skeleton-loader-detail(v-if="$fetchState.pending")
    error-fetch(v-else-if="$fetchState.error")
    .product(v-else)
      .flex.justify-content-between
        .product-img
          .outer-img
            .inner-img
              img(:src="product.image")
        .product-detail
          .flex.justify-content-between
            .stars-container
              .stars(:style="`--rating: ${product.rating.rate};`")
              .stars-value {{product.rating.rate}} ({{product.rating.count}} review)
            .price $ {{product.price}}
          .title.mb-2 {{product.title}}
          .category.mb-2 {{product.category}}
          .description.mb-2 {{product.description}}
        product-recommendation(:category="product.category")
</template>

<script>
export default {
  name: 'DetailPage',
  data: () => ({
    product: null
  }),
  async fetch() {
    this.product = await this.$repositories.products.show(this.$route.params.id)
  }
}
</script>

<style lang='sass' scoped>
.product
  padding: 10px
  .product-img
    width: 348px
    .outer-img
      display: flex
      align-items: center
      width: 348px
      height: 348px
      .inner-img
        display: flex
        justify-content: center
        width: 348px
        img
          width: auto
          height: auto
          max-width: 348px
          max-height: 348px
  .product-detail
    width: 468px
    .price
      font-weight: bold
      font-size: 34px
      line-height: 128%
      color: #3A3A44
    .category
      background: #EDEDF0
      border-radius: 99px
      width: fit-content
      padding: 5px 10px
      font-weight: normal
      font-size: 14px
      line-height: 143%
      letter-spacing: 0.018em
      color: #4A4B57
    .title
      font-weight: normal
      font-size: 20px
      line-height: 32px
      letter-spacing: 0.15px
      color: #19191D
    .description
      font-weight: normal
      font-size: 14px
      line-height: 143%
      letter-spacing: 0.018em
      color: #787885
</style>
