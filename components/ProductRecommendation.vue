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
    }
  },
  data: () => ({
    recommendations: []
  }),
  async fetch() {
    this.recommendations = await this.$repositories.products.groupByCategory(this.category, 5)
  }
}
</script>

<style lang='sass' scoped>
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
