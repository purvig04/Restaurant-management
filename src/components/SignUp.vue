<template>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>SignUp</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter name"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button type="submit" v-on:click="signUp">Submit</button>
    </div> 
   
  </template>
  
  <script>
  
  
  export default {
    name: 'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        signUp(){
            console.log(this.name,this.email,this.password);
            
        }
    }
  
  }
  </script>