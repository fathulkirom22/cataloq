<template lang="pug">
  .product
    .xl-flex.justify-content-between
      .main-content.md-flex
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
  .main-content
    margin-bottom: 30px
    .product-img
      margin-bottom: 30px
      width: 100%
      height: 348px
    .product-detail
      width: 100%
      .rating
        width: 185px
        height: 22px
      .title
        width: 100%
        height: 32px
      .category
        width: 105px
        height: 22px
      .description
        width: 100%
        height: 20px
  .recommendations
    width: 268px
@media (min-width: 768px)
  .product
    .main-content
      .product-img
        width: 348px
        margin-right: 15px
        .outer-img
          width: 348px
          height: 348px
      .product-detail
        width: 348px
</style>
