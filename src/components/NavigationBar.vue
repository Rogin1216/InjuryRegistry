<template>
    <div class="container-fluid">
    <div class="row d-print-none" id="header">
        <div class="col">
            <nav class="navbar navbar-dark fixed-top bg-light flex-md-nowrap p-1">
                <div>
                    <!-- <img src="../assets/bghmc-banner.png" alt="" id="bghmclogo" width="350px" height="30px"> -->
                    <!-- <img v-bind:src="logo.bgh" width="350px" height="30px" alt=""> -->
                    <img alt="Vue logo" :src="require('@/assets/bghmc-banner.png')" style="height:40px">
                </div>
                <div>
                    <ul class="navbar-nav px-3">
                        <li v-on:click="logout" id="pointer" class="text-danger">
                            Logout <i class="bi bi-power"></i>
                            <!-- <router-link to="/login"> <li v-on:click="logout"> Logout <i class="bi bi-power"></i></li></router-link> -->
                        </li>
                    </ul>
                </div>
            </nav>
            
            
                <!-- <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li style="float:right"><a class="active" href="#about">About</a></li>
                </ul> -->
              
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="container-fluid">
                
                <!-- <DashBoard></DashBoard> -->
                <router-view></router-view>
            </div>
        </div>
    </div>
    
    </div>
    </template>
    <script>
        // import LoginPage from './LoginPage.vue'
        // import DashBoard from '../components/DashBoard.vue'
        export default {
            data(){
                return{
                    logo:{
                        bgh: require("@/assets/bghmc-banner.png")
                    }
                }
            },
            name: 'Dashboard',
            components: {
                // // LoginPage,
                // DashBoard
            },
        methods:{
            logout(){
                console.log(localStorage)
                localStorage.removeItem('Token');
                this.$router.push({name:'Login'})
            }
        },
        mounted(){
            let user = localStorage.getItem('Token');
            if(!user){
            this.$router.push({name:'Login'})
            }
        }
        }
    </script>
    
    <style scoped>
    html{
        scroll-behavior: smooth;
    }
    #search{
        top:40px;
    }


nav.sidebar{
    /* border: 1px solid yellow; */
    height: 100%;
    /* z-index: 1; */
    /* margin-top:30px; */
    position: fixed;

}
.sidebar li , .sidebar a:link{
  padding: 13px;
  font-size: 20px;
  text-decoration: none;
  width: 100%;
  display: inline-block;
  color: white;
}
.sidebar a.active {
  border-right: 3px solid yellow;
  /* padding-left: 10px; */
  color: yellow;
}
.sidebar a{
    color: white;
}
.sidebar li.hover {
  color: white;
}
.sidebar a:hover{
  background-color: yellowgreen;
  width: 100%;
  color: white;
}
.nav-link{
    background-color: red;
}
label{
    font-size: 30px;
    margin-top:50px;
}
/* .logout{
    border: 1px solid red;
    padding: 8px;
    border-radius: 5px 5px 5px 5px;
} */
footer{
    background-color: #f1f4f8;
    padding: 10px;
}
a.active{
    background: var(--white);
    color: var(--primary);
}
section{
    /* border: 1px solid red; */
    height: 50%;
    margin-bottom: 20%;
}
/* .containerbody{
    border: 1px solid red;
    height: 100%;
} */
div.dashboard{
    /* border: 1px solid red; */
    float: right;
    width: 90%;
    margin-right:10px;
    height: 100%;
}
div.content{
    border: 1px solid blue;

}
#pointer{
    cursor:pointer;
    
}
    
    </style>