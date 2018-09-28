<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import apiCall from '../utils/api'

export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Панель администратора'
    }
  },
  mounted() {
    apiCall
      .post('api/details')
      .then(response => (console.log(response)));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
