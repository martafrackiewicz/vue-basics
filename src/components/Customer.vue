<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3">Customer</p>
        <ul class="list-group">
          <li class="list-group-item">Name: {{ name }}</li>
          <li class="list-group-item">Age: {{ age }}</li>
          <li class="list-group-item">designation: {{ designation }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Customer',
  props: {
    name: { type: String, required: true },
    age: String,
    designation: String,
  },
};
</script>

<style lang="scss"></style>
