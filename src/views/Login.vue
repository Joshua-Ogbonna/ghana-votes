<template>
  <div>
    <div id="login">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm" id="login-first">
            
          </div>
          <div class="col-sm" id="login-second">
            <form id="form" @submit.prevent="login">
              <div class="form-group">
                <label for="Email">Email Address</label>
                <input type="email" name="" id="email" class="form-control" placeholder="johndoe@gmail.com" v-model="email" required>
              </div>
              <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" name="" id="password" class="form-control" placeholder="Password" v-model="password" required>
              </div>

              <button class="btn" @click="login">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import * as firebase from 'firebase/app'
import {auth} from './firebase'
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login() {
        /* eslint-disable */
        try {
          const user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)

          this.$router.push('/')
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>

<style scoped>
  @media only screen and (min-width: 414px) {
    #login-first {
    
    display: none;
    }
    #form {
      padding: 13em 2em;
    }
    button {
      margin-left: 7em;
      margin-top: 1em;
      background-color: rgb(14, 110, 165);
      color: white;
      padding: 0.7em 2em;
    }
  }
  @media only screen and (min-width: 1024px) {
    #login-first {
    height: 100vh;
    background-color: rgb(14, 110, 165);
    width: 100vw;
    display: block;
    }
    #form {
      padding: 13em 10em;
    }
    button {
      margin-left: 10em;
      margin-top: 1em;
      background-color: rgb(14, 110, 165);
      color: white;
      padding: 0.7em 2em;
    }
  }
  @media only screen and (min-width: 1440px) {
    #login-first {
    height: 100vh;
    background-color: rgb(14, 110, 165);
    
    display: block;
    }
    #login-second {
      width: 100vw;
    }
    #form {
      padding: 10em 10em;
    }
    button {
      margin-left: 10em;
      margin-top: 1em;
      background-color: rgb(14, 110, 165);
      color: white;
      padding: 0.7em 2em;
    }
  }
</style>
