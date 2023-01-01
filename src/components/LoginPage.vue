<template>
    <!-- <head>
      <link rel="stylesheet" href="css/style.css">
      <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
      <title>Sign in</title>
    </head> -->
      <!-- <router-view></router-view> -->
      <div class="main">
        <!-- <img class="bghlogo" src="../assets/bghmc-logo.png" alt=""> -->
        
        <div>
            <p class="sign">Trauma Registry</p>
        </div>
        <div>
            <form @submit.prevent="handleSubmit" class="form1">
                <div>
                  <input class="un" v-model="form.username" type="text" placeholder="HOMIS">
                  <input class="pass" v-model="form.password" type="password" placeholder="Password" v-on:keyup.enter="login">
                </div>
                <div>
                  <a v-on:click="login" class="submit">Sign in</a>
                  
                  <!-- <router-link to="/"><a v-on:click="login" class="submit">Sign in</a></router-link> -->
                </div>
              </form>
        </div>       
      </div>
    </template>
    <script>
    // import { reactive } from '@vue/reactivity'
    import axios from 'axios'

    
    export default{
    
    // ---------------------------------
      data() {
        return{
          form:{
            username:'',
            password:'',
          },
          status:'',
          loading: false
        }
      },
      methods: {
    
        async login(){
          // console.log(this.form.username)
          const account = {
            username:this.form.username,
            password:this.form.password
          };
          this.loading = true;
    
          let res = await axios
                .post('http://192.168.7.66:8040/api/login', account)
                // .then(res=>{
                //   this.loading=false;
                // })
                .catch(function (error) {
                          console.log(error.toJSON());
                          alert(error)
                        });
    
                if(res.status==200){
                //     console.log('asdf')
                //   alert('adsfasdfs')
    
                  localStorage.setItem('Token', res.data)
                  this.$router.push({name:'Dashboard'})
                }
        }
    
    
    
    
        //   login(){
        //   // console.log(this.form.username)
        //   const account = {
        //     username:this.form.username,
        //     password:this.form.password
        //   };
        //   axios
        //         .post('http://192.168.7.188:8040/api/login', account)
        //         .then(response =>{
        //           console.log(response.status)
        //           document.cookie =`Token =${response.data}`,
        //           localStorage.setItem('Token', response.data)
        //           setAuthHeader(response.data)
        //         })
        //         .catch(function (error) {
        //                   console.log(error.toJSON());
        //                 });
        // }
        // -----------------------------------
    
    
        // handleSubmit(){
        //   this.$emit('submitted', this.form.username)
        //   console.log('asdfsda')
        // },
        // submitButton(){
        //   console.log('Submit')
        // },
    
      },
      mounted(){
        let user = localStorage.getItem('Token');
        if(user){
          this.$router.push({name:'Dashboard'})
        }
      }
    }
    </script>
    <style>
            body {
            background-color: #ffffff;
            font-family: 'Ubuntu', sans-serif;
        }
        
        .main {
            background-color: #FFFFFF;
            width: 400px;
            height: 400px;
            margin: 150px auto auto ;
            
            
            
        }
        .bghlogo{
            width: 150px;
            height: 150px;
            
            
            position: fixed;
        }
        
        .sign {
            
            color: #006400;
            font-family: 'Ubuntu', sans-serif;
            font-weight: bold;
            font-size: 23px;
            
        }
        
        .un {
        width: 76%;
        color: rgb(38, 50, 56);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
        background: rgba(136, 126, 126, 0.04);
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        outline: none;
        box-sizing: border-box;
        border: 2px solid rgba(0, 0, 0, 0.02);
        /* margin-bottom: 30px; */
        /* margin-left: 46px; */
        text-align: center;
        margin-bottom: 27px;
        font-family: 'Ubuntu', sans-serif;
        }
        
        form.form1 {
            padding-top: 20px;
            margin: auto;
        }
        
        .pass {
        width: 76%;
        color: rgb(38, 50, 56);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
        background: rgba(136, 126, 126, 0.04);
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        outline: none;
        box-sizing: border-box;
        border: 2px solid rgba(0, 0, 0, 0.02);
        margin-bottom: 50px;
        /* margin-left: 46px; */
        text-align: center;
        margin-bottom: 27px;
        font-family: 'Ubuntu', sans-serif;
        }
        
       
        .un:focus, .pass:focus {
            border: 2px solid rgba(0, 0, 0, 0.18) !important;
            
        }
        
        .submit {
          cursor: pointer;
            border-radius: 5em;
            color: #fff;
            background: #47b027;
            border: 0;
            padding-left: 40px;
            padding-right: 40px;
            padding-bottom: 10px;
            padding-top: 10px;
            font-family: 'Ubuntu', sans-serif;
            margin-left: auto;
            font-size: 13px;
            box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    
        }
      .submit:hover {background-color: #3a9120}
        
        .forgot {
            text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
            color: #E1BEE7;
            padding-top: 15px;
        }
        
        a {
            text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
            color: #E1BEE7;
            text-decoration: none
        }
        
        @media (max-width: 600px) {
            .main {
                border-radius: 0px;
            }
        }
    </style>