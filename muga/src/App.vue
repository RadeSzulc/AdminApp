<template>
  <div :style="{backgroundImage:'./assets/ukraina.png'}" id="app" >
  
    <header>
     <navbar></navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>



<style>
body {
  margin: 0;
  background: url('./assets/ukraina.png') no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 41px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #f8f9fa;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>