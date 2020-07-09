<template>
  <div id="home">
    Page Home
    <button @click="goToDetail">Go to page detail</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    goToDetail(){
      this.$router.push({
        path: '/detail'
      })
    }
  },
}
</script>

<style>
</style>
