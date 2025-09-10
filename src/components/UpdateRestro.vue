<template>
    <HeaderComp/>
    <h1>UpdateRestro Page</h1>
    <form class="update">
      <input type="text" name="name" v-model="restaurant.name" placeholder="Enter New Restaurant"/>
      <input type="text" name="addres" v-model="restaurant.address" placeholder="Enter Address"/>
      <input type="text" name="contact" v-model="restaurant.contact"  placeholder="Enter Contact no"/>
      <button type="button" v-on:click="updateRestro">Update Restaurant</button>

    </form>
    
  </template>
  
  <script>
  import HeaderComp from "./Header.vue";
  import axios from "axios";
  export default {
    name: '  UpdateRestro',
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
        async updateRestro(){
           
            
            const result =await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}` , {
          name:this.restaurant.name,
          address:this.restaurant.address,
          contact:this.restaurant.contact
        })
         if(result.status==200 ){
          this.$router.push({name:'Home'})
         }
            
        }
    },
    async mounted(){
          let user=localStorage.getItem('user-info')
          if(!user){
              this.$router.push({name:'SignUp'})
          }
          let res = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`)
          this.restaurant=res.data;
          
      }
  };
  </script>
  