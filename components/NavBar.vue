<template lang="pug">
  .navbar.main-palette.flex.align-items-center.justify-content-between
    nuxt-link.title(to='/')
      span.logo.mr-2
      span Cataloq
    .flex
      .search.flex.align-items-center.mr-3
        .search-icon.mr-2 &#x26B2;
        input(placeholder="Search")
      .menu
        .symbol &#9776;
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang='sass' scoped>
.navbar
  padding: 10px 20px
  box-shadow: 0 1px 2px var(--main-color)
  .title
    color: var(--text-main-color)
    text-decoration: none
    font-weight: 500
    font-size: 36px
    line-height: 36px
  .search
    width: 368px
    height: 28px
    background: #FFFFFF
    border-radius: 99px
    display: flex
    justify-content: center
    .search-icon
      color: #787885
      transform: rotate(45deg)
    input
      width: 90%
      border: none
      &:focus
        outline: none
  .menu
    cursor: pointer
    display: flex
    justify-content: center
    align-items: center
    background: #ffffff
    color: #787885
    border-radius: 100%
    height: 28px
    width: 28px
</style>
