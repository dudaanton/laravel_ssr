<template lang="pug">
  div
    div(
      v-for="user in users" :key='user.id'
    ) {{user.name}}
</template>


<script>
import axios from 'axios'

const fetchUsers = (callback) => {
  axios
    .get('/api/users')
    .then(response => {
        callback(response.data)
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
      fetchData (callback) {
          this.error = this.users = null;
          this.loading = true;
          axios
              .get('/api/users')
              .then(response => {
                  this.loading = false;
                  this.users = response.data;
                  callback(response.data)
              }).catch(error => {
                  this.loading = false;
                  this.error = error.response.data.message || error.message;
              });
      },

      setData (data) {
        this.users = data
      }
  },

  beforeRouteEnter (to, from, next) {
    console.log('test async');
    fetchUsers((data) => {
      next(vm => vm.setData(data));
    })
  }
}
</script>
