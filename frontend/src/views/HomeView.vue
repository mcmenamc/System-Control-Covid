<template>
  <!-- <hello-world /> -->
  <welcome />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Welcome from '../components/Welcome.vue'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      Welcome
    },
  }
</script>
