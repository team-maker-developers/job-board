export const state = () => ({
  commonContent: null,
  pagableContent: null
})

export const getters = {
  pageType(state) {
    return state.pagableContent.type
  }
}

export const mutations = {
  setPageData(state, content) {
    state.commonContent = content.common_content
    state.pagableContent = content.pageable_content
  }
}
