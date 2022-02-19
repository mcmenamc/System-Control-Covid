<template>
  <v-row
    :class="`img-fondo d-flex flex-wrap d-flex justify-center ${
      $vuetify.breakpoint.mobile ? 'mt-14' : 'mt-16'
    }`"
  >
    <v-col cols="12" md="11" lg="9" xl="8">
      <v-row class="d-flex justify-center">
        <v-col cols="10" md="6">
          <v-row class="d-flex align-stretch">
            <v-col cols="12" class="error">imagen 1</v-col>
            <v-col cols="12" class="info">Lo que está pasando ahora</v-col>
            <v-col cols="12" class="pink">Únete ahora</v-col>
            <v-col cols="12" class="warning">Registrar con google</v-col>
            <v-col cols="12" class="purple">login con google</v-col>
          </v-row>
        </v-col>
        <v-col cols="10" md="6" class="d-flex justify-center">
          <v-img src="@/assets/images/header-a.png"></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>
