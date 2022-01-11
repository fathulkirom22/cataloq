<template lang="pug">
  .grid
    .grid-item
      .product
        .product-img.skeleton-loader.mb-2
        .title.skeleton-loader.mb-2
        .price.skeleton-loader.mb-2
        .description.skeleton-loader.mb-2
        .description.skeleton-loader.mb-2
        .rating.skeleton-loader
    .grid-item
      .product
        .product-img.skeleton-loader.mb-2
        .title.skeleton-loader.mb-2
        .price.skeleton-loader.mb-2
        .description.skeleton-loader.mb-2
        .description.skeleton-loader.mb-2
        .rating.skeleton-loader
    .grid-item
      .product
        .product-img.skeleton-loader.mb-2
        .title.skeleton-loader.mb-2
        .price.skeleton-loader.mb-2
        .description.skeleton-loader.mb-2
        .description.skeleton-loader.mb-2
        .rating.skeleton-loader
    .grid-item
      .product
        .product-img.skeleton-loader.mb-2
        .title.skeleton-loader.mb-2
        .price.skeleton-loader.mb-2
        .description.skeleton-loader.mb-2
        .description.skeleton-loader.mb-2
        .rating.skeleton-loader
</template>

<script>
export default {
  name: 'SkeletonLoaderListProduct'
}
</script>

<style lang="sass" scoped>
.grid
  display: grid
  grid-gap: 20px
  grid-template-columns: repeat(1, 1fr)
  justify-items: center
  .grid-item
    grid-column: span 1
    grid-row: span 1
    width: 100%
    .product
      padding: 15px
      height: 424px
      .product-img
        width: 100%
        height: 278px
      .title
        width: 100%
        height: 20px
      .price
        width: 100px
        height: 24px
      .description
        width: 100%
        height: 18px
      .rating
        width: 150px
        height: 18px
@media (min-width: 768px)
  .grid
    grid-template-columns: repeat(2, 1fr)
@media (min-width: 1200px)
  .grid
    grid-template-columns: repeat(4, 1fr)
</style>
