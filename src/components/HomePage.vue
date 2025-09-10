<template>
  <HeaderComp />
  <h1>{{ name }}'s Home Component</h1>
  <table class="restaurant-table">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact Info.</th>
    </tr>
    <tr v-for="item in restaurants" :key="item">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
    </tr>
  </table>
</template>

<script>
import HeaderComp from "./Header.vue";
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    HeaderComp,
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurants = result.data;
  },
};
</script>

<style>
.restaurant-table  {
    border: 1px solid black;
    width: 80%;
    height: 150px;
}

.restaurant-table th,
.restaurant-table td {
  border: 1px solid #ccc;
  padding: 12px;

}
.restaurant-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.restaurant-table tr:hover {
  background-color: #f9f9f9;
}

</style>
