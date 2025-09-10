<template>
    <HeaderComp/>
    <h1>Add Restro Page</h1>
    <form class="add">
      <input type="text" name="name" v-model="restaurant.name" placeholder="Enter New Restaurant"/>
      <input type="text" name="addres" v-model="restaurant.address" placeholder="Enter Address"/>
      <input type="text" name="contact" v-model="restaurant.contact"  placeholder="Enter Contact no"/>
      <button type="button" v-on:click="addRestro">Add new Restaurant</button>

    </form>
    
  </template>
  
  <script>

import HeaderComp from "./Header.vue";
import axios from "axios";
  export default {
    name: ' AddRestro',
    components:{
      HeaderComp
    },
    data(){
      return{
        restaurant:{
          name:'',
          address:'',
          contact:''
        }
      }
    },
    methods:{
      async addRestro(){
        const result =await axios.post("http://localhost:3000/restaurants" , {
          name:this.restaurant.name,
          address:this.restaurant.address,
          contact:this.restaurant.contact
        })
         if(result.status==201){
          this.$router.push({name:'Home'})
         }

      }
    },
    mounted(){
          let user=localStorage.getItem('user-info')
          if(!user){
              this.$router.push({name:'SignUp'})
          }
          
      }
  };
  </script>
  