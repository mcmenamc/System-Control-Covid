<template>
  <v-row>
    <v-col cols="6" md="6">
      <vue-flip active-click="" width="375px" height="0x" class="mx-auto">
        <template v-slot:front class="front">
          <v-card class="crede" outlined>
            <v-img
              height="120"
              width="110"
              class="foto rounded-lg"
              v-bind:src="usuario.foto"
            >
            </v-img>
            <p class="nombre">
              {{ usuario.name }}
            </p>
            <div class="matricula">
              <h3>
                {{ usuario.matri }}
              </h3>
            </div>
            <div class="carrera">
              <h4 class="divi">
                {{ usuario.divi }}
              </h4>
              <p class="are">
                {{ usuario.area }}
              </p>
            </div>
          </v-card>
        </template>
        <template v-slot:back class="back">
          <v-card class="credeAtras"></v-card>
        </template>
      </vue-flip>
    </v-col>
    <v-col class="d-none d-md-flex warning" cols="12" md="6">
      
    </v-col>
  </v-row>
</template>

<script>
import VueFlip from "vue-flip";
export default {
  data: () => ({
    usuario: {
      name: "Julio Andrei \nClaudio Domínguez",
      matri: "UTP0006096",
      divi: "División de Tecnologías \nde la Información",
      area: "Técnico Superior Universitario en \nTecnologías de la información \nArea Desarrollo de Software \nMultiplataforma",
      foto: "https://sicea.utpuebla.edu.mx/control/fotos/aspirantes/6096.jpg", //Obviamente que la foto cambiará de forma dinamica
    },
  }),
  components: {
    "vue-flip": VueFlip,
  },
};
</script>

<style>
.crede {
  height: 6in;
  width: 4in;
  padding: 1.3rem 0 1.3rem 0;
  box-shadow: 0 0 5px #b4b4b4;
  background-image: url("@/assets/images/CredencialFinal2.png");
  background-repeat: no-repeat;
  background-size: 388.9px 580px;
}

.credeAtras {
  height: 6in;
  width: 4in;
  padding: 1.3rem 0 1.3rem 0;
  box-shadow: 0 0 5px #b4b4b4;
  background-image: url("@/assets/images/CredencialFinalAtras.png");
  background-repeat: no-repeat;
  background-size: 388.9px 580px;
}
.foto {
  position: absolute;
  top: 51%;
  left: 8%;
}
.nombre {
  text-transform: uppercase;
  position: absolute;
  top: 59%;
  left: 50%;
  color: #8e1f28;
}

.matricula {
  width: 385px;
  height: 20px;
  position: absolute;
  top: 74%;
}
h3 {
  text-align: center;
  color: #8e1f28;
}

.carrera {
  width: 191px;
  height: 73px;
  position: relative;
  top: 82%;
  left: 1%;
}

.divi {
  font-size: 70%;
  font-family: Arial, Helvetica, sans-serif;
  color: #8e1f28;
}

.are {
  font-size: 50%;
  font-family: Arial, Helvetica, sans-serif;
  color: #8e1f28;
}
</style>