import Vue from 'vue'
import Vuex from 'vuex'
import resume from './resume'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    resume: resume
  }
})
