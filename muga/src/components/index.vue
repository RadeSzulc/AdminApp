<template>
  <div>
  <img src="./assets/logo3.png" alt="MUGA">
	<h1>{{ title }}</h1>
	<h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  data () {
	  return {
  	  title: 'MUGA',
      name: 'Make Ukraine Great Again'
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
h1 {
  margin-top: 20px;
}
</style>
