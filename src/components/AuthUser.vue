<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div v-if="isLoggedIn">
              <p class="h3 fw-bold text-success">Welcome user</p>
              <p class="fst-italic">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus corrupti natus labore dolor, perferendis aspernatur
                totam sunt ipsum magni aperiam nemo officiis, doloremque quas
                obcaecati laudantium! Sequi rem rerum soluta!
              </p>
            </div>
            <div v-else>
              <p class="h3 fw-bold text-dark">Thank you!</p>
            </div>
            <div>
              <button
                v-if="!isLoggedIn"
                class="btn btn-success btn-sm"
                @click="login"
              >
                Login
              </button>
              <button v-else class="btn btn-secondary btn-sm" @click="logout">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'AuthUser',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>

<style lang="scss"></style>
