<template>
  <div>
    <v-card
      elevation="5"
      :loading="loading"
      class="mx-auto my-12 pa-2 cardColors"
      max-width="1540"
      outlined
    >
      <v-row class="justify-center no-gutters">
        <v-col class="d-none d-md-flex" cols="6" md="6">
          <v-img src="@/assets/images/virusjuas.jpg">
            <v-row class="align-center">
              <v-col class="mx-auto" cols="6">
                <v-card> </v-card>
              </v-col>
            </v-row>
          </v-img>
        </v-col>
        <v-col class="" cols="12" md="6">
          <v-card class="pa-2 my-1" elevation="0" max-width="">
            <v-form v-on:submit.prevent>
              <v-card-title class="justify-center text-h6 font-weight-regular">
                <h2 class="indigo--text">Regístrate</h2>
              </v-card-title>
              <div class="text-center">
                <input
                  type="file"
                  accept="image/*"
                  class="d-none"
                  ref="file"
                  @change="change"
                />
                <div class="circuloImagen">
                  <img :src="src" alt="" class="logo circulo" />
                  <div>
                    <button @click="browse()" class="rounded btnCircle mt-2">
                      <v-icon color="blue" size="35"> fas fa-camera </v-icon>
                    </button>
                    <button
                      v-if="file"
                      @click="remove()"
                      class="rounded btnCircle ml-5 mt-2"
                    >
                      <v-icon color="red" size="35"> fas fa-trash </v-icon>
                    </button>
                  </div>
                </div>
              </div>
              <h3 class="">{{ currentTitle }}</h3>
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    required
                    type="email"
                    label="e-mail"
                    placeholder="email"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="password"                 
                    :type="showPassword ? 'text' : 'password'"
                    :error-messages="passwordErrors"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    label="Contraseña"
                    placeholder="Contraseña"                    
                    :append-icon="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
                    @click:append="showPassword =! showPassword"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="confirmPassword"
                    :type="showPassword ? 'text' : 'password'"
                    :error-messages="confirmPasswordErrors"
                    required
                    @input="$v.confirmPassword.$touch()"
                    @blur="$v.confirmPassword.$touch()"
                    type="password"
                    label="Confirma tu contraseña"
                    placeholder="Confirmar contraseña"
                    :append-icon="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
                    @click:append="showPassword =! showPassword"
                    
                  >
                  </v-text-field>
                </v-window-item>
                <v-window-item :value="2">
                  <v-text-field 
                    v-model="nomb"
                    :error-messages="nombreErrors"
                    :counter="3"
                    required
                    @input="$v.nomb.$touch()"
                    @blur="$v.nomb.$touch()"
                    type="text" 
                    label="Nombre" 
                    placeholder="Nombre">
                  </v-text-field>
                  <v-text-field
                    v-model="apePat"
                    :error-messages="apellidoPatErrors"
                    :counter="3"
                    required
                    @input="$v.apePat.$touch()"
                    @blur="$v.apePat.$touch()"
                    type="text"
                    label="Apellido Paterno"
                    placeholder="Apellido Paterno"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="apeMat"
                    :error-messages="apellidoMatErrors"
                    :counter="3"
                    required
                    @input="$v.apeMat.$touch()"
                    @blur="$v.apeMat.$touch()"
                    type="text"
                    label="Apellido Materno"
                    placeholder="Apellido Materno"
                  >
                  </v-text-field>
                </v-window-item>
                <v-window-item :value="3">
                  <v-menu
                    ref="menu"
                    v-model="calendario.menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="calendario.date"
                        label="Fecha de nacimiento"
                        prepend-icon="fas fa-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="calendario.date"
                      :activate-picker.sync="calendario.activePicker"
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substr(0, 10)
                      "
                      min="1950-01-01"
                      @change="save"
                    >
                    </v-date-picker>
                  </v-menu>
                  <v-radio-group>
                    <template v-slot:label
                      >Selecciona tu <strong>Sexo</strong></template
                    >
                    <v-row class="">
                      <v-col cols="6" sm="6" md="6">
                        <v-radio
                          label="Masculino"
                          color="primary"
                          value="Masculino"
                          class=""
                        >
                        </v-radio>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-radio label="Femenino" color="pink" value="Femenino">
                        </v-radio>
                      </v-col>
                    </v-row>
                  </v-radio-group>
                </v-window-item>
                <v-window-item :value="4">
                  <v-text-field> </v-text-field>
                </v-window-item>
              </v-window>
              <v-divider class="d-none"></v-divider>
              <v-card-actions>
                <v-btn
                  :disabled="step === 1"
                  text
                  @click="step--, hideButton()"
                  id="btnAtras"
                >
                  Atras
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="step === 4"
                  color="primary"
                  depressed
                  @click="step++, showButton()"
                  id="btnSig"
                >
                  Adelante
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
//Importación de Vuelidate
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
//Exportacion de datos y funciones
export default {
  mixins: [validationMixin],
  props: {
    value: File,
    defaultSrc: String,
  },
  validations: {
    nomb: { required, minLength: minLength(3) },
    apePat: { required, minLength: minLength(6) },
    apeMat: { required, minLength: minLength(6) },
    email: { required, email },
    password: { required, minLength: minLength(5) },
    confirmPassword: { sameAsPassword: sameAs("password") },
  },

  //Creacion de objetos
  data: () => ({
    loading: false,
    //Pasos a seguir en v-window
    step: 1,
    //Calendario
    calendario: {
      activePicker: null,
      date: null,
      menu: false,
    },

    src: null,
    file: null,

    nomb: "",
    apePat: "",
    apeMat: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false
  }),

  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },

  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },

    browse() {
      this.$refs.file.click();
    },
    change(e) {
      this.file = e.target.files[0];
      this.$emit("input", this.file);
      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (e) => {
        this.src = e.target.result;
      };
    },

    remove() {
      this.file = null;
      this.src = this.defaultSrc;
      this.$emit("input", this.file);
    },

    hideButton() {
      if (this.step === 1) {
        document.getElementById("btnAtras").style.visibility = "hidden";
      }
    },
    showButton() {
      if (this.step === 2) {
        document.getElementById("btnAtras").style.visibility = "visible";
      }
    },
  },

  //Metodos computados
  computed: {
    //Se coloca los titulos a v-window
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Crear cuenta";
        case 2:
          return "Datos personales";
        case 3:
          return "Ingresa tus datos personales";
        case 4:
          return "Ingresa Hola Mundo";
        default:
          return "Account created";
      }
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email &&
        errors.push("Debe ser válido el correo electrónico");
      !this.$v.email.required && errors.push("E-mail es requerido");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      !this.$v.password.minLength &&
        errors.push("La contraseña debe contener 5 caracteres como mínimo");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
    confirmPasswordErrors(){
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAsPassword &&
        errors.push("La contraseña debe tener al menos 5 caracteres");
      return errors;
    },
    nombreErrors(){
      const errors = [];
      if(!this.$v.nomb.$dirty) return errors;
      !this.$v.nomb.minLength &&
        errors.push("El nombre debe tener más de 4 caracteres");
      !this.$v.nomb.required && errors.push("Nombre es requerido");
      return errors;
    },
    apellidoPatErrors(){
      const errors = [];
      if(!this.$v.apePat.$dirty) return errors;
      !this.$v.apePat.minLength &&
        errors.push("El apedillo debe tener más de 6 caracteres");
      !this.$v.apePat.required && errors.push("Nombre es requerido");
      return errors;
    },
    apellidoMatErrors(){
      const errors = [];
      if(!this.$v.apeMat.$dirty) return errors;
      !this.$v.apeMat.minLength &&
        errors.push("El apedillo debe tener más de 6 caracteres");
      !this.$v.apeMat.required && errors.push("Nombre es requerido");
      return errors;
    }
    
  },
};
</script>

<style>
.cardColors {
  /* background-color: rgba(255, 255, 255, 0.5) !important;
    border-color: white !important; */
}

.circuloImagen {
  position: relative;
}

.circulo {
  display: inline-block;
  width: 150px;
  clip-path: circle();
  overflow: hidden;
  border-radius: 50%;
}

.btnCircle:hover {
  background-color: rgb(244, 250, 253);
  opacity: 25;
  outline: none;
}
</style>