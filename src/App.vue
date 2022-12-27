<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            asperiores architecto, culpa dolore dolorem explicabo ab quas
            laudantium consequatur debitis, alias qui quo tenetur eveniet, hic
            deleniti. Sint, laudantium debitis?
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- <Register />
  <Customer name="Jan" age="29" designation="Software Engineer" />
  <Employee />
  <Counter />
  <Greeting /> -->
  <AuthUser />
</template>

<script>
// import Customer from './components/Customer.vue';
// import Employee from './components/Employee.vue';
// import Counter from './components/Counter.vue';
// import Greeting from './components/Greeting.vue';
// import Register from './components/Register.vue';
import AuthUser from './components/AuthUser.vue';

export default {
  // components: { Customer, Employee, Counter, Greeting, Register },
  components: { AuthUser },
};
</script>

<style lang="scss">
@import './style.scss';
</style>
