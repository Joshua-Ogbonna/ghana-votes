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
                  <div class="card shadow p-3 mb-5 bg-white rounded">
                    <div class="card-body" @click="updateVotes(unit)">
                      <h5 class="polling-unit">{{unit.unit}}</h5>
                      <div class="container">
                        <div class="row">
                          <p> NPP: {{unit.NPP}} </p>
                          <p class="pl-1"> NDC: {{unit.NDC}} </p>
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
            <h5 class="modal-title" id="updateVote">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <!-- <label for="CPP Votes">CPP Votes</label> -->
                <input type="number" class="form-control" placeholder="CPP Votes">
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
    async addToPollingUnit(constituency) {
      this.units = await constituency.pollingUnits
      
      // console.log(this.units)
    },
    async readPollingUnits() {
      await db.collection('areas').get()
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
    async updateVotes(unit) {
      let pollingUnit = await db.collection('areas').doc(unit)
      

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
  .card {
    border: none;
  }
  .polling-unit {
    font-size: 1em;
    font-family: 'Nunito', sans-serif;
  }
  p {
    font-family: 'Lato', sans-serif;
    color: rgb(114, 111, 111);
  }
  #lists {
    font-family: 'Alata', sans-serif;
  }
</style>
