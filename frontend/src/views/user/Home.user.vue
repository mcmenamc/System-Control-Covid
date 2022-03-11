<template>
  <div>
    Home de user


    {{ $store.state.user }}
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HomeUser",
  data: () => ({}),
  created() {
  },
  methods: {
  
  },
};
</script>

