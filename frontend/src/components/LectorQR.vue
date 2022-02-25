<template>
  <div>
    <p class="decode-result">
      Resultado: <b>{{ content }}</b>
    </p>

    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
      <div v-if="validationSuccess" class="validation-success">
        Esto es una url
      </div>

      <div v-if="validationFailure" class="validation-failure">
        Esto no es una URL
      </div>

      <div v-if="validationPending" class="validation-pending">
       Validando Codigo QR
      </div>
    </qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  components: { QrcodeStream },

  data: () => ({
    isValid: undefined,
    camera: "auto",
    result: null,
    content: {
      NombreCompleto: "",
      Matricula: "",
      Division: "",
      ProgramaEstudio: "",
      Sexo: "",
      FechaNacimiento: "",
    },
  }),
  computed: {
    validationPending() {
      return this.isValid === undefined && this.camera === "off";
    },

    validationSuccess() {
      return this.isValid === true;
    },

    validationFailure() {
      return this.isValid === false;
    },
  },
  

  methods: {
    async onInit(promise) {
      promise.catch(console.error).then(this.resetValidationState);

    },

    resetValidationState() {
      this.isValid = undefined;
    },

    async onDecode(content) {
      this.result = content;
      this.turnCameraOff();

      // pretend it's taking really long
      await this.timeout(1000);
      this.isValid = content.startsWith("http");
      const valores = content.split(/\n/);

      this.content.NombreCompleto = valores[0].replace(/[\r]/g, "");
      this.content.Matricula = valores[1].split(": ")[1].replace(/[\r]/g, "");
      this.content.Division = valores[2].split(": ")[1].replace(/[\r]/g, "");
      this.content.ProgramaEstudio = valores[3]
        .split(": ")[1]
        .replace(/[\r]/g, "");
      this.content.Sexo = valores[4].split(": ")[1].replace(/[\r]/g, "");
      this.content.FechaNacimiento = new Date(valores[5].split(": ")[1]);

      console.dir(this.content);

      // some more delay, so users have time to read the message
      await this.timeout(2000);

      this.turnCameraOn();
    },

    turnCameraOn() {
      this.camera = "auto";
    },

    turnCameraOff() {
      this.camera = "off";
    },

    timeout(ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms);
      });
    },
  },
};
</script>

<style scoped>
.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
}
</style>