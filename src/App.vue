<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/main">主页</router-link>
    <router-link to="/share">分享</router-link>
    <router-link to="/note">笔记</router-link>
    <router-link to="/plan">计划</router-link>
    <router-link to="/case">案列</router-link>
  </nav>
  <div id="appcontainer">
  <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: relative;
  z-index: 10;
  height: 50px;
  width:100%;
  border-radius: 8px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .1);
  
  a {
    position: relative;
    float: left;
    display: block;
    font-size: 15px;
    font-weight: 900;
    width: 100px;
    height: 50px;
    line-height: 50px;
    color: #2c3e50;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      border-radius: 8px;
    background-color: #42b983 ;
    }
  
  }
}
</style>
