import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFirestore from 'vue-firestore'


Vue.config.productionTip = false

// import auth from './firebase'
import * as firebase from 'firebase/app'

Vue.use(VueFirestore)

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


