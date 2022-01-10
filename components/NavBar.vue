<template lang="pug">
  .navbar.main-palette.flex.align-items-center.justify-content-between(ref="nav")
    nuxt-link.title(to='/')
      span.logo.mr-2
      span Cataloq
    .menu
      .symbol &#9776;
</template>

<script>
export default {
  name: 'NavBar',
  mounted() {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        this.$refs.nav.style.top = '0'
      } else {
        this.$refs.nav.style.top = '-64px'
      }
      prevScrollpos = currentScrollPos
    }.bind(this)
  }
}
</script>

<style lang='sass' scoped>
.navbar
  padding: 10px 20px
  box-shadow: 0 1px 2px var(--main-color)
  transition: top 0.3s
  .title
    color: var(--text-main-color)
    text-decoration: none
    font-weight: 500
    font-size: 36px
    line-height: 36px
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
