<template>
  <v-app>   
    <Navbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    Navbar
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@500&display=swap");
.text-one {
  font-family: "Oswald", sans-serif;
}
.text-sub {
  font-family: "Roboto", sans-serif;
}
.text-normal {
  font-family: "Mukta", sans-serif;
}
.rojo-text {
  color: #ff8086;
}
main {
  background-color: #f6f8fe;
}
html::-webkit-scrollbar {
  width: 8px;
  background: #f0f0f0;
}
html::-webkit-scrollbar-thumb {
  background-color: rgb(206, 206, 206);
  border-radius: 10px;
}
html::-webkit-scrollbar-thumb:hover {
  background-color: rgba(105, 105, 105, 0.7);
}
.poiter:hover {
  cursor: pointer;
}
</style>