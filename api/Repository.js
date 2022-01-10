export default $axios => resource => ({
  index() {
    return $axios.$get(`/${resource}`)
  },
  show(id) {
    return $axios.$get(`/${resource}/${id}`)
  },
  groupByCategory(category, limit = null) {
    return $axios.$get(`/${resource}/category/${category}?limit=${limit}`)
  },
  getAllCategories() {
    return $axios.get(`/${resource}/categories`)
  }
})
