import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD_7wX4MRmcPzaD8k-tshLzXYwtabV2WAs',
  authDomain: 'ghana-votes.firebaseapp.com',
  databaseURL: 'https://ghana-votes.firebaseio.com',
  projectId: 'ghana-votes',
  storageBucket: 'ghana-votes.appspot.com',
  messagingSenderId: '122165507341',
  appId: '1:122165507341:web:1a663ef3546a7595f8ec44',
  measurementId: 'G-T6T0EL0X5F'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
