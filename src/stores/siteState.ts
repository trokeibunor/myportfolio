import { defineStore } from 'pinia'

export const useSiteState = defineStore({
  id: 'siteState',
  state: () => ({
    isDarkMode: true
  }),
  actions: {
    toggleDarkMode(){
      this.isDarkMode = !this.isDarkMode
    }
  }
})
