import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    portfolio: [
      {
        src: "https://ia601408.us.archive.org/2/items/sc139-githubportfolio/Satournow.png",
        link: "https://sebastiancastillo139.github.io/Satournow/",
        name: "Sa-Tour-Now!",
      },
      {
        src: "https://ia601408.us.archive.org/2/items/sc139-githubportfolio/meetandcoffee.png",
        link: "https://sebastiancastillo139.github.io/proyectotabo/",
        name: "Municipalidad",
      },
      {
        src: "https://ia601408.us.archive.org/2/items/sc139-githubportfolio/viajeschile.png",
        link: "https://sebastiancastillo139.github.io/Viajes-Chile/",
        name: "Viajes Chile",
      },
      {
        src: "https://ia601408.us.archive.org/2/items/sc139-githubportfolio/meetandcoffee.png",
        link: "https://sebastiancastillo139.github.io/meet-and-coffee-in-vue/",
        name: "Meet & Coffee",
      },
    ],
  },
  getters: {
    getPortfolio(state){
      return state.portfolio
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
