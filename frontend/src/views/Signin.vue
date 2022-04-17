<template>
  <div>
    <span class="imag"></span>
    <v-container fluid class="d-flex justify-center align-center">
      <v-col cols="12" lg="5" class="mx-auto">
        <v-card class="my-16 pa-4 cardColors">
          <div class="text-center">
            <v-avatar color="logo lighten-4" size="100">
              <v-icon color="logo" size="40"> fas fa-user </v-icon>
            </v-avatar>
            <h2 class="indigo--text">Login</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="fas fa-envelope"
              >
              </v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Password"
                placeholder="Password"
                prepend-inner-icon="fas fa-key"
                :append-icon="passwordShow ? 'fas fa-eye' : 'fas fa-eye-slash'"
                @click:append="passwordShow = !passwordShow"
              >
              </v-text-field>
              <v-switch label="Remember me" color="indigo"></v-switch>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" color="indigo" type="submit">
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
      <v-snackbar top color="green" v-model="snackbar">
        Login success
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    snackbar: false,
    passwordShow: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "The password is required",
      (v) =>
        (v && v.length >= 6) ||
        "Password must be less than 10 characters or more",
    ],
  }),
  methods:{
    submitHandler(){
      if(this.$refs.form.validate()){
        this.loading = true
        setTimeout(()=>{
          this.loading = false
          this.snackbar = true
        }, 3000)
      }      
      console.log(this.email)
      console.log(this.password)
    }
  }
};
</script>

<style scoped>
/* .imag {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("@/assets/images/covid.jpg") no-repeat center center;
  background-size: cover;  
}

.cardColors {
  background-color: rgba(255, 255, 255, 0.5) !important;
  border-color: white !important;
} */
</style>