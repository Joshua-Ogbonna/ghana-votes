<template>
  <div class="home">
    <Header />
    <div id="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-2 col-lg-2 mt-2" id="column-one">
            <ul class="list-group list-group-flush" v-for="(constituency, index) in constituencies" :key="index">
              <li class="list-group-item" @click="addToPollingUnit(constituency)">{{constituency.name}}</li>
              
            </ul>
          </div>
          <div class="col-sm-12 col-md-10 col-lg-10">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 mt-3 mb-3" v-for="unit in units" :key="unit.id">
                  <div class="card">
                    <div class="card-body">
                      <h5>{{unit.unit}}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Header'
import { db } from './firebase'

export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      units: [],
      constituencies: []
    }
  },
  methods: {
    async addToPollingUnit(constituency) {
      this.units = await constituency.pollingUnits
      
      console.log(this.units)
    },
    async readPollingUnits() {
      await db.collection('areas').get()
        .then((area) => {
          area.forEach(doc => {
            this.constituencies.push(doc.data())
            console.log(this.constituencies)
          })
          
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.readPollingUnits();
  },
}
</script>

<style scoped>
  #column-one {
    border-right: 1px solid rgb(14, 110, 165);
    border-bottom: 1px solid rgb(14, 110, 165);
    height: 60vh;
  }
  ul li:hover {
    cursor: pointer;
  }
</style>
