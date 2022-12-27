<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-5">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3">{{ this.msg }}</p>
            <button
              class="btn btn-success btn-sm me-2"
              @click="greet('Good morning')"
            >
              Good morning
            </button>
            <button
              class="btn btn-warning btn-sm me-2"
              @click="greet('Good afternoon')"
            >
              Good afternoon
            </button>
            <button
              class="btn btn-dark btn-sm"
              @mouseenter="greet('Good evening')"
            >
              Good evening
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Greeting',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    greet(msg) {
      this.msg = msg;
    },
  },
};
</script>

<style lang="scss"></style>
