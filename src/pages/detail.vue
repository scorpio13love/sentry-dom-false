<template>
  <div id="detail">
    Page Detail
    <button @click="back">Back to page home</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    handleClick() {
      console.log('page detail click')
    },
    addEvent() {
      document.addEventListener('click', this.handleClick)
    },
    removeEvent() {
      document.removeEventListener('click', this.handleClick)
    },
    back() {
      this.$router.go(-1)
    }
  },
  mounted() {
    this.addEvent()
  },
  beforeDestroy(){
    this.removeEvent()
  }
}
</script>

<style>
</style>
