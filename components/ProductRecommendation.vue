<template lang="pug">
  div
    skeleton-loader-recommendations(v-if="$fetchState.pending")
    error-fetch(v-else-if="$fetchState.error")
    .recommendations(v-else)
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
  name: 'ProductRecommendation',
  props: {
    category: {
      type: String,
      require: true,
      default: 'jewelery'
    },
    byProductId: {
      type: [String, Number],
      require: true,
      default: 0
    }
  },
  data: () => ({
    recommendations: []
  }),
  async fetch() {
    const res = await this.$repositories.products.groupByCategory(this.category, 5)
    this.recommendations = res.filter(item => parseInt(item.id) !== parseInt(this.byProductId))
  }
}
</script>

<style lang='sass' scoped>
.recommendations
  .title
    font-weight: bold
    font-size: 16px
  .recommendation-item
    .outer-img
      display: flex
      align-items: center
      width: 48px
      height: 48px
      background-color: #fff
      border-radius: 5px
      .inner-img
        display: flex
        justify-content: center
        width: 48px
        img
          width: auto
          height: auto
          max-width: 48px
          max-height: 48px
@media (min-width: 768px)
  .recommendations
    width: 268px
</style>
