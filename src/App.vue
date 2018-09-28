<template>
  <div id="app">
    <div class="main-container">
      <center>
        <router-view/>
      </center>
    </router-view>
    </div>
  </div>
</template>

<script>
import apiCall from './utils/api'

export default {
  name: 'App',
  created() {
    apiCall.interceptors.response.use(undefined, function (err) {
    return new Promise(function (resolve, reject) {
      //console.log(err.request)
      console.log(err.response)
      if (err.response.status === 401) {
        localStorage.removeItem('token')
        this.$router.push('/login')
      }
      throw err;
    });
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
