<template>
  <Navbar />
  <!-- <Register />
  <Customer name="Jan" age="29" designation="Software Engineer" />
  <Employee />
  <Counter />
  <Greeting /> -->
  <!-- <AuthUser @isLoggedIn="handleLogin" />
  <UserList /> -->
  <!-- <div v-if="isLoggedIn">
    <p class="h3 fw-bold text-success">Welcome user from App.vue</p>
    <p class="fst-italic">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
      corrupti natus labore dolor, perferendis aspernatur totam sunt ipsum magni
      aperiam nemo officiis, doloremque quas obcaecati laudantium! Sequi rem
      rerum soluta!
    </p>
  </div> -->
  <!-- <div v-else>
    <p class="h3 fw-bold text-dark">Thank you! from App.vue</p>
  </div> -->
</template>

<script>
// import Customer from './components/Customer.vue';
// import Employee from './components/Employee.vue';
// import Counter from './components/Counter.vue';
// import Greeting from './components/Greeting.vue';
// import Register from './components/Register.vue';
// import AuthUser from './components/AuthUser.vue';
// import UserList from './components/UserList.vue';
import Navbar from './components/Navbar.vue';

export default {
  // components: { Customer, Employee, Counter, Greeting, Register },
  // components: { AuthUser, UserList },
  components: { Navbar },
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
