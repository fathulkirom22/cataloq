<template lang='pug'>
  .product
    .outer-img
      .inner-img
        img(:src="product.image")
    nuxt-link.title(:to="`/products/${product.id}`") {{product.title}}
    .price $ {{product.price}}
    .description {{product.description}}
    .stars-container
      .stars(:style="`--rating: ${product.rating.rate};`")
      .stars-value {{product.rating.rate}}
</template>

<script>
export default {
  name: 'EcommerceItem',
  props: {
    product: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>

<style lang='sass' scoped>
.product
  padding: 15px
  background: #fff
  .outer-img
    display: flex
    align-items: center
    width: 100%
    height: 258px
    .inner-img
      display: flex
      justify-content: center
      width: 100%
      img
        width: auto
        height: auto
        max-width: 258px
        max-height: 258px
  .title
    font-weight: normal
    font-size: 16px
    line-height: 150%
    letter-spacing: 0.0275em
    color: #19191D
    overflow: hidden
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
  .price
    font-weight: bold
    font-size: 24px
    line-height: 150%
  .description
    font-weight: normal
    font-size: 14px
    line-height: 143%
    letter-spacing: 0.018em
    color: #787885
    overflow: hidden
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
@media (min-width: 768px)
  .product
    .title
      height: 48px
</style>
