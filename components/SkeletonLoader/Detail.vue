<template lang="pug">
  .product
    .flex.justify-content-between
      .product-img.skeleton-loader
      .product-detail
        .rating.mb-4.skeleton-loader
        .title.mb-4.skeleton-loader
        .category.mb-4.skeleton-loader
        .description.mb-2.skeleton-loader
        .description.mb-2.skeleton-loader
      .recommendations
</template>

<script>
export default {
  name: 'SkeletonLoaderDetail'
}
</script>

<style lang="sass" scoped>
.product
  padding: 10px
  .product-img
    width: 348px
    height: 348px
  .product-detail
    width: 468px
    .rating
      width: 185px
      height: 22px
    .title
      width: 468px
      height: 32px
    .category
      width: 105px
      height: 22px
    .description
      width: 468px
      height: 20px
  .recommendations
    width: 268px
</style>
