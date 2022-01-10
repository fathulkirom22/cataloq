<template lang="pug">
  .navbar.main-palette.md-flex.align-items-center.justify-content-between(ref="nav")
    nuxt-link.title(to='/')
      span.logo.mr-2
      span Cataloq
    .menu-container.flex
      nuxt-link.menu(v-for="category in categories.data" :to='`/${category}`') {{category}}
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    categories: {}
  }),
  async fetch() {
    this.categories = await this.$repositories.products.getAllCategories()
  },
  mounted() {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        this.$refs.nav.style.top = '0'
      } else {
        this.$refs.nav.style.top = '-120px'
      }
      prevScrollpos = currentScrollPos
    }.bind(this)
  }
}
</script>

<style lang='sass' scoped>
.navbar
  box-shadow: 0 1px 2px var(--main-color)
  transition: top 0.3s
  padding-top: 20px
  .nuxt-link-exact-active
    font-weight: bold
    background-color: var(--active-link-color)
    color: var(--active-text-link-color) !important
  .title
    margin: 10px
    color: var(--text-main-color) !important
    background: var(--main-color) !important
    text-decoration: none
    font-weight: 500
    font-size: 36px
    line-height: 36px
  .menu-container
    padding-top: 20px
    padding-bottom: 20px
    overflow-x: visible
    overflow-y: hidden
    white-space: nowrap
    .menu
      border-radius: 5px
      padding: 3px 10px
      cursor: pointer
      color: var(--text-main-color)
      text-decoration: none
      &:first-child
        margin-left: .75rem !important
      &:last-child
        margin-right: .75rem !important
@media (min-width: 768px)
  .navbar
    padding-top: 0
    .menu-container
      overflow-x: hidden
      overflow-y: hidden
</style>
