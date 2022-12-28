<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <p class="h3">Users List</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead class="bg-light">
            <tr>
              <th>no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Website</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.website }}</td>
              <td>{{ user.address.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

let dataUrl = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => {
  return axios.get(dataUrl);
};

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'UserList',
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      let res = await getUsers();
      this.users = res.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style lang="scss"></style>
