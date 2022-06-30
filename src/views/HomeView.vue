<template>
  <v-container fluid>
    <v-row class="align-center">
      <v-col cols="12" md="4">
        <v-img src="@/assets/img/profilepic.jpg"></v-img>
      </v-col>
      <v-col cols="12" md="8" class="text-center">
        <v-row justify="center" class="my-5">
          <h2 class="text-h2 py-3">SEBASTIÁN CASTILLO SOTO</h2>
          <h4 class="text-h4 py-3">PSICÓLOGO Y DESARROLLADOR WEB</h4>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="3" align="center">
            <a
              href="https://github.com/sebastiancastillo139"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-img
                contain
                max-height="150"
                max-width="150"
                src="@/assets/img/github-icon-1.svg"
              ></v-img
            ></a>
            <p class="text-h5 text-center py-5">MI GITHUB</p>
          </v-col>
          <v-col cols="12" md="3" align="center">
            <a
              href="https://www.linkedin.com/in/scastillos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-img
                contain
                max-height="150"
                max-width="150"
                src="@/assets/img/linkedin-icon-2.svg"
              ></v-img
            ></a>
            <p class="text-h5 text-center py-5">MI LINKEDIN</p>
          </v-col>
          <v-col cols="12" md="3" align="center">
            <a href="https://wa.me/56991710387" target="_blank" rel="noopener noreferrer">
              <v-img
                contain
                max-height="150"
                max-width="150"
                src="@/assets/img/whatsapp-3.svg"
              ></v-img
            ></a>
            <p class="text-h5 text-center py-5">CONTÁCTAME</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
