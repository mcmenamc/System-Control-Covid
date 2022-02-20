<template>
  <div>
    <h1>
      4<span><i class="fas fa-bomb"></i></span>4
    </h1>
    <h2>Error: 404 página No Encontrada</h2>
    <p>Lo sentimos, no se puede acceder a la página que está buscando</p>
    <v-btn to="/" color="primary">
      <v-icon class="mr-3">fas fa-hand-point-right</v-icon>Regresar al inicio
    </v-btn>
    
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");

div {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 82vh;
  justify-content: center;
  text-align: center;
}
h1 {
  color: #3b3b3b;
  font-size: 12.5rem;
  letter-spacing: 0.1em;
  margin: 0.025em 0;
  text-shadow: 0.05em 0.05em 0 rgba(0, 0, 0, 0.25);
  white-space: nowrap;
}
@media (max-width: 30rem) {
  h1 {
    font-size: 8.5rem;
  }
}
h1 > span {
  animation: spooky 2s alternate infinite linear;
  color: #528cce;
  display: inline-block;
}
h2 {
  color: #34363a;
  margin-bottom: 0.4em;
}
p {
  color: rgb(97, 97, 97);
  margin-top: 0;
}
@keyframes spooky {
  from {
    transform: translatey(0.15em) scaley(0.95);
  }
  to {
    transform: translatey(-0.15em);
  }
}
</style>