<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light shadow fixed-top">
            <a class="navbar-brand" href="#">Votes Results</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
        </nav>
    

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 d-none d-md-block sidebar">
                    <div class="left-sidebar">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <button class="nav-link active btn">General Information <i class="fas fa-angle-double-right"></i></button>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="link" href="#"><i class="far fa-arrow-alt-circle-right"></i> Votes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="link" href="#"> <i class="fas fa-align-left"></i> Parties</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="link" href="#"> <i class="far fa-address-card"></i> Constituencies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="link" href="#"> <i class="fas fa-ad"></i> Polling Units</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="link" href="#"> <i class="far fa-address-book"></i> Contestants</a>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" id="link" to="/update"> <i class="fas fa-angle-double-right"></i> Update</router-link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-10" id="details">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">

                                            </div>
                                            <div class="col-sm-9">
                                                <h3>3,256</h3>
                                                <p>Total Votes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">

                                            </div>
                                            <div class="col-sm-9">
                                                <h3>394</h3>
                                                <p>Total NDC</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">

                                            </div>
                                            <div class="col-sm-9">
                                                <h3>2,565</h3>
                                                <p>Total NPP</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">

                                            </div>
                                            <div class="col-sm-9">
                                                <h3>1,000</h3>
                                                <p>Rejected Votes</p>
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
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .sidebar {
        position: fixed;
        top:0;
        left: 0;
        bottom: 0;
        z-index: 100;
        padding: 7em 0 0 2em;
        border-right: 1px solid rgb(255, 255, 255)
    }
    .sidebar-left {
        position: sticky;
        top: 0;
        height: (100vh - 70px)
    }
    #details {
        height: 100vh;
        margin-left: 15.5em;
        padding-top: 2em;
        margin-top: 5em;
        background-color: #fafafa;
    }
    .card {
        border: none;
    }
    h3 {
        font-family: 'Rubik', sans-serif;
    }
    p {
        font-family: 'Noto Sans KR', sans-serif;
        color: rgb(114, 113, 113);
    }
    .navbar-brand {
        font-family: 'Rubik', sans-serif;
        color:#1241db;
        font-size: 2em;
    }
    button {
        background-color: #1241db;
        color: white;
        padding: 15px 13px;
    }
    button:hover {
        background-color: #1241db;
        color: white;
    }
    #link {
        text-decoration: none;
        color: rgb(114, 113, 113);
        padding: 19px 0;
        font-size: 1rem;
        font-family: 'Noto Sans KR', sans-serif;
        transition: background 0.2s ease, padding 0.3s linear;
    }
    #link:hover {
        color:  #1241db;
        padding-left: 1em;
    }
</style>