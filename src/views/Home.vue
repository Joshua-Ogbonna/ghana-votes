<template>
  <div class="home">
    <Header />
    <div id="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-2 col-lg-2 mt-2" id="column-one">
            <ul class="list-group list-group-flush" v-for="(constituency, index) in constituencies" :key="index">
              <li class="list-group-item" id="lists" @click="addToPollingUnit(constituency)">{{constituency.name}}</li>
              
            </ul>
            
          </div>
          <div class="col-sm-12 col-md-10 col-lg-10">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 mt-3 mb-3" v-for="unit in units" :key="unit.id">
                  <div class="card shadow mb-5 bg-white rounded">
                    <div class="card-header">
                      <h5 class="polling-unit">{{unit.unit}}</h5>
                    </div>
                    <div class="card-body">
                      
                      <div class="container">
                        <h5 class="" id="title">Presidential</h5>
                        <div class="row" v-for="presidential in unit.presidential" :key="presidential">
                            <p> NDC: {{presidential.NDC}} </p>
                            <p class="ml-1">NPP: {{presidential.NPP}} </p>
                            <p class="ml-1">Others: {{presidential.Others}} </p>
                            <p class="ml-1">Rejected: {{presidential.Rejected}}</p>
                            <p class="ml-1">Total: {{presidential.Total}} </p>
                        </div>
                        <hr>
                        <h5 class="" id="title">Parliamentary</h5>
                        <div class="row" v-for="parliamentary in unit.parliamentary" :key="parliamentary">
                            <p> NDC: {{parliamentary.NDC}} </p>
                            <p class="ml-1">NPP: {{parliamentary.NPP}} </p>
                            <p class="ml-1">Others: {{parliamentary.Others}} </p>
                            <p class="ml-1">Rejected: {{parliamentary.Rejected}}</p>
                            <p class="ml-1">Total: {{parliamentary.Total}} </p>
                        </div>
                      </div>

                      <button class="btn btn-primary" data-toggle="modal" data-target="#updateVote">Update Votes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="updateVote" tabindex="-1" role="dialog" aria-labelledby="updateVote" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="updateVote">Update Votes</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Presidential Form -->
            <form>
              <h5>Update Presidential Votes</h5>
              <div class="form-group">
                <!-- <label for="CPP Votes">CPP Votes</label> -->
                <input type="number" class="form-control" placeholder="NDC Votes">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="NPP Votes">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Other Votes">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Rejected Votes">
              </div>
            </form>
            
            <!-- Parliamentary Form -->

            <form>
              <h5>Update Parliamentary Votes</h5>
              <div class="form-group">
                <!-- <label for="CPP Votes">CPP Votes</label> -->
                <input type="number" class="form-control" placeholder="NDC Votes">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="NPP Votes">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Other Votes">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Rejected Votes">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary">Update Votes</button>
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
    addToPollingUnit(constituency) {
      this.units = constituency.pollingUnits
      
      // console.log(this.units)
    },
    readPollingUnits() {
      db.collection('areas').get()
        .then((area) => {
          area.forEach(doc => {
            this.constituencies.push(doc.data())
            // console.log(this.constituencies)
          })
          
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updateVotes() {
      let pollingUnit = db.collection('areas').doc('Awudome')
      console.log(pollingUnit)  
    }
  },
  created () {
    this.readPollingUnits();
    let areas = db.collection('areas').get()
    areas.then((area) => {
      area.forEach((doc) => {
        let myDoc = doc.data()
        console.log(myDoc)
      })
    })
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
  .card {
    border: none;
  }
  .polling-unit {
    font-size: 0.87em;
    font-family: 'Nunito', sans-serif;
  }
  p {
    color: rgb(114, 111, 111);
    margin-left: 1em;
  }
  #lists {
    font-family: 'Alata', sans-serif;
  }
  #title {
    font-size: 1em;
    margin-top: 0em;
  }
</style>
