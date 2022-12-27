<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-2 mb-2">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="card-header bg-dark text-white">
            <p class="h3">Register here</p>
          </div>
          <div class="card-body bg-light">
            <form @submit.prevent="register()">
              <div class="mb-2">
                <input
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="user.email"
                  type="text"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="mb-2">
                <input type="submit" class="btn btn-success" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    register() {
      console.log(this.user);
    },
  },
};
</script>

<style lang="scss"></style>
