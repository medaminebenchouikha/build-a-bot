<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }" active-class="home-active">
            <img src="./assets/build-a-bot-logo.png" alt="logo" class="logo">
            Build-a-Bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Build' }">
            Build
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Search' }">
            Search
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <!-- <HomePage msg="Welcome to Your Vue.js App"/> -->
    <!-- <RobotBuilder /> -->
    <router-view />
  </main>
</template>

<script setup>
import { provide, ref } from 'vue';
// import RobotBuilder from './build/RobotBuilder.vue';

const user = ref({ userName: 'Med' });
provide('user', user.value);
</script>

<!-- <script>
import RobotBuilder from './build/RobotBuilder.vue';
// import HomePage from './home/HomePage.vue';
// import ProductSearch from './search/ProductSearch.vue';

export default {
  name: 'App',
  components: {
    // HomePage,
    RobotBuilder,
  },
  data() {
    return {
      user: { userName: 'Med' },
    };
  },
  provide() {
    return { user: this.user };
  },
};
</script> -->

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1200px;
  min-height: 200px;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

header {
  background-color: #999;
  width: 1260px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

.active-link {
  color: white;
}

.home-active {
  color: white;
  text-shadow: 2px 2px black;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
