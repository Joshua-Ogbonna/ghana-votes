<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
            <a class="navbar-brand" href="/">Ghana Votes</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link">Sign Out</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #navbar {
        background-color: rgb(14, 110, 165);
        color: white;
    }
    #navbar a,
    #navbar ul li a {
        color: white;
    }
    #navbar ul li a {
        padding-right: 3em;
    }
    #navbar ul li a:hover {
        border-bottom: 1px solid white;
    }
</style>