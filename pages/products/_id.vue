<template lang="pug">
  div
    skeleton-loader-detail(v-if="$fetchState.pending")
    error-fetch(v-else-if="$fetchState.error")
    p(v-else-if="!product") No data
    .product(v-else)
      .xl-flex.justify-content-between
        .main-content.md-flex.justify-content-between
          .product-img
            .outer-img
              .inner-img
                img(:src="product.image")
          .product-detail
            .xl-flex.justify-content-between
              .stars-container
                .stars(:style="`--rating: ${product.rating.rate};`")
                .stars-value {{product.rating.rate}} ({{product.rating.count}} review)
              .price $ {{product.price}}
            .title.mb-2 {{product.title}}
            .category.mb-2 {{product.category}}
            .description.mb-4 {{product.description}}
            div
              .btn-my-favorite.text-danger(v-if="isInFavorite" @click="removeMyFavorite") Remove From Favorite
              .btn-my-favorite(v-else @click="addMyFavorite") Add To Favorite
        product-recommendation(:category="product.category" :by-product-id="this.$route.params.id")
</template>

<script>
export default {
  name: 'DetailPage',
  data: () => ({
    product: null
  }),
  async fetch() {
    this.product = await this.$repositories.products.show(this.$route.params.id)
  },
  computed: {
    isInFavorite() {
      return this.$store.getters['myfavorite/isInFavorite'](this.$route.params.id)
    }
  },
  methods: {
    addMyFavorite() {
      this.$store.commit('myfavorite/add', this.product)
    },
    removeMyFavorite() {
      this.$store.commit('myfavorite/remove', this.product)
    }
  }
}
</script>

<style lang='sass' scoped>
.product
  padding: 10px
  .main-content
    margin-bottom: 30px
    .product-img
      margin-bottom: 20px
      .outer-img
        display: flex
        align-items: center
        height: 348px
        background-color: #fff
        border-radius: 10px
        .inner-img
          display: flex
          justify-content: center
          width: 100%
          img
            width: auto
            height: auto
            max-width: 330px
            max-height: 348px
    .product-detail
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
      .btn-my-favorite
        cursor: pointer
        padding: 10px 20px
        background: #EBF2FF
        border-radius: 4px
        width: fit-content
        color: #2264D1
        font-weight: bold
@media (min-width: 768px)
  .product
    .main-content
      .product-img
        margin-right: 15px
        .outer-img
          width: 348px
          height: 348px
@media (min-width: 1200px)
  .product
    .main-content
      .product-img
        width: 348px
        .outer-img
          width: 348px
          height: 348px
      .product-detail
        width: 468px
</style>
