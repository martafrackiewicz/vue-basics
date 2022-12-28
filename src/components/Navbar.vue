<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <router-link class="navbar-brand px-4" to="/">Vue Router</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link px-3" to="/counter">Counter</router-link>
        </li>
        <li>
          <router-link class="nav-link px-3" to="/users">Users</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script></script>

<style lang="scss"></style>
