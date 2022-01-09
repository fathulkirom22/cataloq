<template lang="pug">
  div
    nav-bar.sticky-top.mb-4
    nuxt(keep-alive :keep-alive-props="{ max: 10 }").container
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
