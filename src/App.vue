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
  <AuthUser @isLoggedIn="handleLogin" />
  <div v-if="isLoggedIn">
    <p class="h3 fw-bold text-success">Welcome user from App.vue</p>
    <p class="fst-italic">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
      corrupti natus labore dolor, perferendis aspernatur totam sunt ipsum magni
      aperiam nemo officiis, doloremque quas obcaecati laudantium! Sequi rem
      rerum soluta!
    </p>
  </div>
  <div v-else>
    <p class="h3 fw-bold text-dark">Thank you! from App.vue</p>
  </div>
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
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    handleLogin(isLoggedIn) {
      this.isLoggedIn = isLoggedIn;
    },
  },
};
</script>

<style lang="scss">
@import './style.scss';
</style>
