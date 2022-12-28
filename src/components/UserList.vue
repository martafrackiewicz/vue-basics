<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <p class="h3">Users List</p>
      </div>
    </div>
    <div v-if="!loading && users.length > 0" class="row">
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
              <td>
                <router-link
                  class="text-decoration-none fw-bold text-success"
                  :to="'/users/' + user.id"
                  >{{ user.name }}</router-link
                >
              </td>
              <td>{{ user.email }}</td>
              <td>{{ user.company.name }}</td>
              <td>{{ user.website }}</td>
              <td>{{ user.address.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="loading">
      <img alt="" class="d-block m-auto" src="../assets/loading.gif" />
    </div>
    <div v-if="errorMsg">
      <p class="text-danger">{{ errorMsg }}</p>
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
      loading: false,
      errorMsg: null,
    };
  },
  async created() {
    try {
      this.loading = true;
      let res = await getUsers();
      this.users = res.data;
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.errorMsg = err;
    }
  },
};
</script>

<style lang="scss"></style>
