<template lang="pug">
  .product(v-if="product")
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
      .recommendations
        .title.mb-2 Recommendations
        .recommendation-item.mb-2(v-for="recommendation in recommendations")
          .flex.align-items-center
            .outer-img.mr-1
              .inner-img
                img(:src="recommendation.image")
            nuxt-link.title(:to="`/products/${recommendation.id}`") {{recommendation.title}}
</template>

<script>
export default {
  name: 'DetailPage',
  data: () => ({
    product: null,
    recommendations: []
  }),
  async fetch() {
    this.product = await this.$repositories.products.show(this.$route.params.id)
    this.recommendations = await this.$repositories.products.groupByCategory(this.product.category, 5)
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
    .stars-container
      display: flex
      align-items: center
      .stars
        --percent: calc(var(--rating) / 5 * 100%)
        display: inline-block
        font-size: var(--star-size)
        line-height: 1
        &::before
          content: '★★★★★'
          letter-spacing: 3px
          background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent))
          -webkit-background-clip: text
          -webkit-text-fill-color: transparent
      .stars-value
        margin-left: 10px
        font-weight: 500
        font-size: 18px
        line-height: 22px
        letter-spacing: 0.1px
        color: #5E6366
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
  .recommendations
    width: 268px
    .recommendation-item
      .outer-img
        display: flex
        align-items: center
        width: 48px
        height: 48px
        .inner-img
          display: flex
          justify-content: center
          width: 48px
          img
            width: auto
            height: auto
            max-width: 48px
            max-height: 48px
</style>
