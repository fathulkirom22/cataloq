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
  padding: 10px
  width: 258px
  background: #fff
  .outer-img
    display: flex
    align-items: center
    width: 258px
    height: 258px
    .inner-img
      display: flex
      justify-content: center
      width: 258px
      img
        width: auto
        height: auto
        max-width: 258px
        max-height: 258px
  .title
    height: 48px
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
</style>
