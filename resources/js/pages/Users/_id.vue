<template lang="pug">
div
  .user(v-if='user') {{user.name}}
</template>


<script>
import axios from 'axios'

const fetchUser = (id, callback) => {
  axios
    .get(`/api/users/${id}`)
    .then(response => {
        callback(response.data)
    })
}

export default {
  data: () => {
    return {
      user: null
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
        this.user = data
      }
  },

  beforeRouteEnter (to, from, next) {
    fetchUser(to.params.id, (data) => {
      next(vm => vm.setData(data.data));
    })
  },
}
</script>
