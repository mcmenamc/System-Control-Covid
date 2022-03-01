<template>
  <div class="page-loader" v-if="!isloaded">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div> 
</template>

<script>
  export default {
    data: () => {
      return {
        isloaded: false
      }
    },
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") { 
          this.isloaded = true;
        } 
      }
    }
  }
</script>

<style scoped>
 .page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f6f8fe;
  z-index: 999;
}

.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.cube:nth-child(1) {
  background-color: #4CAF50;
}
.cube:nth-child(2) {
  background-color: #2a81ea;
}
.cube:nth-child(3) {
  background-color: #FFC107;
}
.cube:nth-child(4) {
  background-color: #FF5252;
}
.cube:first-child {
  animation: left 1s infinite;
}
.cube:last-child {
  animation: right 1s infinite 0.5s;
}

@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>