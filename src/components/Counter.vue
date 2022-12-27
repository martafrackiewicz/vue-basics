<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3">{{ this.count }}</p>
            <button class="btn btn-success mt-1" @click="increment">+</button>
            <button class="btn btn-warning ms-2 mt-1" @click="decrement">
              -
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
  name: 'Counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
  },
};
</script>

<style lang="scss"></style>
