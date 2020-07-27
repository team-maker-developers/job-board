export const state = () => ({
  companyName: ''
})

export const getters = {
  getCompanyName: (state) => state.companyName
}

export const mutations = {
  setCompanyNameState(state, companyName) {
    state.companyName = companyName
  }
}
