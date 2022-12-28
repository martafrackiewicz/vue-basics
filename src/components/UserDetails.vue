<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">User details</p>
          <pre>{{ user }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const getUser = (id) => {
  let dataUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
  return axios.get(dataUrl);
};

export default {
  data() {
    return {
      user: [],
    };
  },
  async created() {
    let userId = this.$route.params.userId;
    let res = await getUser(userId);
    this.user = res.data;
  },
};
</script>
<style></style>
