<template>
    <div>
        <div class="container">
            
            <div class="row" v-for="data in constituencyData" :key="data.key">

                <div class="col-sm-12 col-md-4 col-lg-4" v-for="pollingUnit in data.pollingUnits" :key="pollingUnit.key">
                    <div class="card">
                        <div class="card-body">
                            <h3 id="polling-unit">{{pollingUnit.unit}}</h3>

                            
                            <div class="row" v-for="president in pollingUnit.presidential" :key="president.key">
                                <div class="col-sm-2">
                                    
                                </div>
                                <div class="col-sm-10">
                                    <h5>Presidential</h5>
                                    <p>NDC: {{president.NDC}}
                                    NPP: {{president.NPP}}
                                    Others: {{president.Others}}
                                    Rejected: {{president.Rejected}}</p>
                                </div>
                            </div>

                            
                            <div class="row" v-for="parliamentary in pollingUnit.parliamentary" :key="parliamentary.key">
                                <div class="col-sm-2">
                                    
                                </div>
                                <div class="col-sm-10">
                                    <h5>Parliamentary</h5>
                                    <p>NDC: {{parliamentary.NDC}}
                                    NPP: {{parliamentary.NPP}}
                                    Others: {{parliamentary.Others}}
                                    Rejected: {{parliamentary.Rejected}}</p>
                                </div>
                            </div>
                            <button class="btn" data-toggle="modal" data-target="#exampleModal">Update Votes</button>
                        </div>
                    </div>

                    <p></p>
                </div>
            </div>





            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update Votes</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            
                            <!-- Presidential Update Form -->
                            <form>

                                <h5>Presidential Votes</h5>
                            
                                <div class="form-group">
                                    <input type="number" placeholder="NDC Votes" class="form-control" v-model="presidential.NDC">
                                </div>
                                <div class="form-group">
                                    <input type="number" placeholder="NPP Votes" class="form-control" v-model="presidential.NPP">
                                </div>
                                <div class="form-group">
                                    <input type="number" placeholder="Other Votes" class="form-control" v-model="presidential.Others">
                                </div>
                                <div class="form-group">
                                    <input type="number" placeholder="Rejected Votes" class="form-control" v-model="presidential.Rejected">
                                </div>

                            </form>


                            <!-- Parliamentary Update Form -->
                            <form>
                                <h5>Parliamentary Votes</h5>

                                <div class="form-group">
                                    <input type="number" placeholder="NDC Votes" class="form-control" v-model="parliamentary.NDC">
                                </div>
                                <div class="form-group">
                                    <input type="number" placeholder="NPP Votes" class="form-control" v-model="parliamentary.NPP">
                                </div>
                                <div class="form-group">
                                    <input type="number" placeholder="Other Votes" class="form-control" v-model="parliamentary.Others">
                                </div>
                                <div class="form-group">
                                    <input type="number" placeholder="Rejected Votes" class="form-control" v-model="parliamentary.Rejected">
                                </div>

                            </form>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {db} from '../firebase.js'

    export default {
        // Vue Data
        data() {
            return {
                constituencyData: [],
                presidential: {
                    NDC: 0,
                    NPP: 0,
                    Others: 0,
                    Rejected: 0
                },
                parliamentary: {
                    NDC: 0,
                    NPP: 0,
                    Others: 0,
                    Rejected: 0
                },
                totalPresidential: 0,
                totalParliamentary: 0
            }
        },

        // Vue Methods
        methods: {
            addToPollingUnits() {
                
            }
        },

        // Vue Creation
        async created() {
            let bubui = await db.collection('areas').where('name', '==', 'Bubui').get()
            
            if (!bubui.empty) {
                const snapshot = bubui.docs[0]
                const data = snapshot.data()
                this.constituencyData.push(data)
                console.log(this.constituencyData.pollingUnits)
            }
        }
    }
</script>

<style scoped>
    .card {
        border: none;
    }
    h5 {
        font-family: 'Noto Serif', serif;
        font-size: 1em;
    }
    p {
        font-family: 'Josefin Sans', sans-serif;
        color: rgb(114, 113, 113);
        font-size: 0.8em;
    }
    #polling-unit {
        font-size: 1em;
        margin-bottom: 1.2em;
        text-transform: capitalize;
        background-color: #1241db;
        padding: 0.5em;
        color: white;
        border-radius: 10px;
    }
    button {
        background-color: #1241db;
        color: white;
        margin-left: 11em;
    }
    button:hover {
        color: white;
    }
</style>