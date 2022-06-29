import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    portfolio: [
      {
        src: "@/assets/img/Satournow.png",
        link: "https://sebastiancastillo139.github.io/Satournow/",
        name: "Sa-Tour-Now!",
      },
      {
        src: "@/assets/img/viajeschile.png",
        link: "https://sebastiancastillo139.github.io/Viajes-Chile/",
        name: "Viajes Chile",
      },
      {
        src: "@/assets/img/meetandcoffee.png",
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
