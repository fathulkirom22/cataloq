export const state = () => ({
  products: []
})

export const mutations = {
  add(state, product) {
    state.products.push(product)
  },
  remove(state, { id }) {
    state.products = state.products.filter(product => parseInt(product.id) !== parseInt(id))
    // state.products.splice(state.products.indexOf(id), 1)
  }
}

export const getters = {
  isInFavorite: state => id => state.products.some(product => parseInt(product.id) === parseInt(id)),
  lengthFavorite: state => state.products.length
}
