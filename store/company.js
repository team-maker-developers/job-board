export const state = () => ({
  company: null
})

export const getters = {
  getCompanyName: (state) => state.company?.name
}

export const mutations = {
  setCompany(state, company) {
    state.company = company
  }
}
