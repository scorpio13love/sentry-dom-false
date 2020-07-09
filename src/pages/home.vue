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
    handleClick() {
      console.log('click')
    },
    addEvent() {
      document.addEventListener('click', this.handleClick)
    },
    removeEvent() {
      document.removeEventListener('click', this.handleClick)
    },
    goToDetail(){
      this.$router.push({
        path: '/detail'
      })
    }
  },
  mounted() {
    // this.addEvent()
  },
  beforeDestroy(){
    // this.removeEvent()
  }
}
</script>

<style>
</style>
