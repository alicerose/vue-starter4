<template>
  <div id="app">
    <div id="status" :class="{ active: isApiLoading }">
      API : {{ API_COUNT }}
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'api' }">Api</router-link> |
      <router-link :to="{ name: 'mixins' }">Mixins</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mixin } from "@/mixins";

export default {
  mixins: [mixin],
  computed: {
    isApiLoading() {
      return this.API_COUNT > 0;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#status {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.25em;
  /*background-color: transparent;*/
  background-color: #fff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: z(apiLoader);
  &.active {
    background-color: #eee;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  @include mq(min) {
    background: #fcfcfc;
  }
}
</style>
