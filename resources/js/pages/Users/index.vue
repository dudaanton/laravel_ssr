<template lang="pug">
div
    div(
        v-for="user in users" :key='user.id'
    )
      router-link(
        :to='{ name: "user", params: { id: user.id } }'
      ) {{user.name}}
</template>


<script>
import axios from 'axios'

const fetchUsers = (callback) => {
  return new Promise((resolve) => {
    axios
      .get('/api/users')
      .then(response => {
          callback(response.data)
          resolve()
      })
  })
}

export default {
  data: () => {
    return {
      test: 'hi all',
      loading: false,
      error: false,
      users: []
    }
  },

  // created() {
  //   this.fetchData();
  // },

  methods: {
      fetchData () {
          this.error = this.users = null;
          this.loading = true;
          fetchUsers((data) => this.setData(data.data))
      },

      setData (data) {
        this.users = data.data
      }
  },

  mounted () {
    // console.log('fetchUsers', fetchUsers(this.setData));
  },

  serverPrefetch () {
    // this.users = [{ name: 'test' }]
    // return fetchUsers(this.setData)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 10000)
    })
  }
}
</script>
