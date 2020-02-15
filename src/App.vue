<template>
  <div>
    <router-view />
    <hr />
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
body {
  line-height: 1.5;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
