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
import { mapGetters } from 'vuex'

// const fetchUsers = (callback) => {
//   return new Promise((resolve) => {
//     axios
//       .get('/api/users')
//       .then(response => {
//           callback(response.data)
//           resolve()
//       })
//   })
// }

export default {
  data: () => {
    return {
      test: 'hi all',
      loading: false,
      error: false,
    }
  },

  computed: {
    ...mapGetters({
      users: 'getUsers'
    })
  },

  // created() {
  //   this.fetchData();
  // },

  methods: {
      fetchData () {
        return this.$store.dispatch('fetchUsers')
      },

      setData (data) {
        this.users = data.data
      }
  },

  mounted () {
    if (!this.users) {
      this.fetchData()
    }
  },

  serverPrefetch () {
    return this.fetchData()
  }
}
</script>
