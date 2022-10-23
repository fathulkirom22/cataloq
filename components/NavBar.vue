<template lang="pug">
  .navbar.main-palette(ref="nav")
    .container.md-flex.align-items-center.justify-content-between.p-0
      .flex.align-items-center.justify-content-between
        nuxt-link.title(to='/')
          span.logo.mr-2
          span CalatlogQ
        div
          nuxt-link.my-favorite.md-none(to='/my-favorite') Favorite
            .badge(v-if="badge") {{badge}}
      .menu-container.flex
        nuxt-link.menu(v-for="category in categories.data" :to='`/${category}`' :key="category.id") {{category}}
      nuxt-link.my-favorite.sm-none(to='/my-favorite') Favorite
        .badge(v-if="badge") {{badge}}
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
  computed: {
    badge() {
      return this.$store.getters['myfavorite/lengthFavorite']
    }
  },
  mounted() {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        this.$refs.nav.style.top = '0'
      } else {
        this.$refs.nav.style.top = '-140px'
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
    padding-bottom: 10px
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
  .my-favorite
    position: relative
    margin-right: .75rem
    background-color: var(--btn-my-favorite)
    border-radius: 4px
    padding: 5px 10px
    color: var(--text-main-color) !important
    text-decoration: none
    .badge
      position: absolute
      top: -5px
      right: -5px
      background-color: var(--badge-bg-color)
      border-radius: 100%
      font-size: 12px
      font-weight: bold
      width: 15px
      height: 15px
      display: flex
      justify-content: center
      align-items: center
      text-align: center
@media (min-width: 768px)
  .navbar
    padding-top: 0
    .menu-container
      padding-top: 0
      padding-bottom: 0
      overflow-x: hidden
      overflow-y: hidden
</style>
