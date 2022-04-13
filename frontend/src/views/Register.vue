<template>
  <div>
      <span class="imag">          
      </span>
     <v-container>
         <FormulaRegister/>
     </v-container>
  </div>
</template>

<script>
import FormulaRegister from '../components/FormulaRegister.vue'
export default {
    components:{
        FormulaRegister
    }
}
</script>

<style scoped>
.imag{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("@/assets/images/virus.jpg");
    background-size: cover;
}
</style>