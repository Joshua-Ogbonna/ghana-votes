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
                <div class="col-sm-12 col-md-6 col-lg-4 mt-3 mb-3" v-for="pollingUnit in pollingUnitsForConstituency" :key="pollingUnit.id">
                  <div class="card">
                    <div class="card-body">
                      <h5>{{pollingUnit}}</h5>
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

export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      pollingUnitsForConstituency: [],
      constituencies: [
        {
          id: 1,
          name: 'Calabar South',
          pollingUnits: [
            'Polling One', 'Polling Two', 'Polling Three', 'Polling Four', 'Polling Five', 'Polling Six', 'Polling Seven'
          ]
        },
        {
          id: 2,
          name: 'Calabar Mucipality',
          pollingUnits: [
            'Polling One', 'Polling Two', 'Polling Three', 'Polling Four', 'Polling Five'
          ]
        },
        {
          id: 3,
          name: 'Akamkpa/Biase',
          pollingUnits: [
            'Polling One', 'Polling Two', 'Polling Three', 'Polling Four', 'Polling Five', 'Polling Six', 'Polling Seven', 'Polling Eight', 'Polling Nine', 'Polling Ten'
          ]
        },
        {
          id: 4,
          name: 'Abi/Yakurr',
          pollingUnits: [
            'Polling One', 'Polling Two', 'Polling Three', 'Polling Four', 'Polling Five', 'Polling Six', 'Polling Seven', 'Polling Eight'
          ]
        },
        {
          id: 5,
          name: 'Obubra/Itun',
          pollingUnits: [
            'Polling One', 'Polling Two', 'Polling Three', 'Polling Four', 'Polling Five', 'Polling Six', 'Polling Seven', 'Polling Eight', 'Polling Nine'
          ]
        },
        {
          id: 6,
          name: 'Ikom/Boki',
          pollingUnits: [
            'Polling One', 'Polling Two', 'Polling Three', 'Polling Four', 'Polling Five', 'Polling Six', 'Polling Seven', 'Polling Eight', 'Polling Nine', 'Polling Ten'
          ]
        },
        {
          id: 7,
          name: 'Obudu/Obanliku/Bekwara',
          pollingUnits: [
            'Polling One', 'Polling Two', 'Polling Three', 'Polling Four', 'Polling Five', 'Polling Six', 'Polling Seven', 'Polling Eight', 'Polling Nine', 'Polling Ten'
          ]
        },
        {
          id: 8,
          name: 'Ogoja Yala',
          pollingUnits: [
            'Polling One', 'Polling Two', 'Polling Three', 'Polling Four', 'Polling Five', 'Polling Six', 'Polling Seven', 'Polling Eight', 'Polling Nine', 'Polling Ten'
          ]
        }
      ]
    }
  },
  methods: {
    async addToPollingUnit(constituency) {
      this.pollingUnitsForConstituency = await constituency.pollingUnits
      
      console.log(this.pollingUnitsForConstituency)
    }
  }
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
