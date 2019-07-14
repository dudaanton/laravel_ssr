<template>
    <div>
        <p>
            <router-link :to="{ name: 'users' }">Users</router-link>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {}
</script>