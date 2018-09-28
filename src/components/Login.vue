<template>
  <div class="hello">
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
        <label>User name</label>
        <input required v-model="username" type="text" placeholder=""/>
        <label>Password</label>
        <input required v-model="password" type="password" placeholder=""/>
        <hr/>
        <button type="submit">Login</button>
    </form>
  </div>
</template>

<style>
  .login {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
  }
</style>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data () {
    return {
        username: '',
        password: '',
    }
  },
  methods: {
    login: function () {
      var { username, password } = this;
      axios(
        {
          method: 'post',
          url: 'http://laravel.test/api/login',
          data: {
            email: username,
            password: password
          },
          config: { headers: {'Content-Type': 'multipart/form-data' }}
        }
      )
      .then(responce => {
          const token = responce.data.success.token;
          localStorage.setItem('token', token)
          this.$router.push('/')
      })
      .catch(e => {
          this.$router.push('/login')
          this.errors.push(e)
      })
    }
  }
}
</script>
