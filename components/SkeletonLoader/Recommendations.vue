<template lang="pug">
  .recommendations
    .title.skeleton-loader.mb-4
    .recommendation-item.mb-2
      .flex.align-items-center
        .outer-img.skeleton-loader.mr-2
        .title.skeleton-loader
    .recommendation-item.mb-2
      .flex.align-items-center
        .outer-img.skeleton-loader.mr-2
        .title.skeleton-loader
    .recommendation-item.mb-2
      .flex.align-items-center
        .outer-img.skeleton-loader.mr-2
        .title.skeleton-loader
</template>

<script>
export default {
  name: 'SkeletonLoaderRecommendations'
}
</script>

<style lang="sass" scoped>
.recommendations
  width: 268px
  .title
    width: 100px
    height: 20px
  .recommendation-item
    .outer-img
      width: 48px
      height: 48px
    .title
      width: 200px
      height: 20px
</style>
