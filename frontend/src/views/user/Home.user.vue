<template>
  <div>
    Home de user


    {{ $store.state.user }}
    <router-view />
  </div>
</template>

<script>
import Nprogress from "nprogress";
export default {
  name: "HomeUser",
  data: () => ({}),
  created() {
    Nprogress.done();
  },
  methods: {
  
  },
};
</script>

