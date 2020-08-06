<template>
  <div class="home">
    <Header />
    <div id="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-2 col-lg-2" id="column-one">
            <ul class="list-group list-group-flush" v-for="(constituency, index) in constituencies" :key="index">
              <li class="list-group-item">{{constituency.name}}</li>
              
            </ul>
          </div>
          <div class="col-sm-12 col-md-10 col-lg-10">
            
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
            
          ]
        },
        {
          id: 2,
          name: 'Calabar Mucipality',
          pollingUnits: [
            
          ]
        },
        {
          id: 3,
          name: 'Akamkpa/Biase',
          pollingUnits: [
            
          ]
        },
        {
          id: 4,
          name: 'Abi/Yakurr',
          pollingUnits: [
            
          ]
        },
        {
          id: 5,
          name: 'Obubra/Itun',
          pollingUnits: [
            
          ]
        },
        {
          id: 6,
          name: 'Ikom/Boki',
          pollingUnits: [
            
          ]
        },
        {
          id: 7,
          name: 'Obudu/Obanliku/Bekwara',
          pollingUnits: [
            
          ]
        },
        {
          id: 8,
          name: 'Ogoja Yala',
          pollingUnits: [
            
          ]
        }
      ]
    }
  },
  methods: {
    addToPollingUnit() {
      
    }
  }
}
</script>

<style scoped>
  #column-one {
    border-right: 1px solid rgb(14, 110, 165);
    border-bottom: 1px solid rgb(14, 110, 165);
    height: 92vh;
  }
  ul li:hover {
    cursor: pointer;
  }
</style>
