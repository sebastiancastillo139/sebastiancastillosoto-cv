<template>
  <v-container class="text-justify">
    <v-row class="my-5">
      <v-col cols="12" md="5">
        <h3 class="text-h3 my-5">PERFIL PROFESIONAL</h3>
        <p class="text-p my-5">
          Desarrollador Front-End especializado en el Framework VUE.js, recién
          egresado de la carrera de Desarrollo Front-End VUE de Desafío Latam.
          También soy Psicólogo, especializado en el área educacional y en el
          área de reclutamiento y selección.
        </p>
        <h3 class="text-h3 my-5">EXPERIENCIA PROFESIONAL</h3>
        <p class="text-p my-5">
          Sin experiencia (aún...), pero expectante de conseguir la oportunidad
          de demostrar mi potencial como desarrollador.
        </p>
        <h3 class="text-h3 my-5">MIS CUALIDADES</h3>
        <li>
          Capacidad analítica aplicada a la resolución de problemas mediante el
          desarrollo modular de aplicaciones web.
        </li>
        <li>
          Habilidades blandas de comunicación efectiva, trabajo en equipo y
          distribución de tareas.
        </li>
        <li>
          Motivación hacia el aprendizaje de nuevas habilidades para el
          perfeccionamiento de la capacidad de desarrollar.
        </li>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="6" class="text-center">
        <div class="ml-5">
          <h3 class="text-h3 my-5">MI STACK</h3>
          <v-row class="my-2">
            <v-img
              max-height="50"
              max-width="50"
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            ></v-img>
            <h4 class="text-h4 px-5">VUE.js</h4>
          </v-row>
          <v-row class="my-2">
            <v-img
              max-height="50"
              max-width="50"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            ></v-img>
            <h4 class="text-h4 px-5">HTML5</h4>
          </v-row>
          <v-row class="my-2">
            <v-img
              max-height="50"
              max-width="50"
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            ></v-img>
            <h4 class="text-h4 px-5">JavaScript</h4>
          </v-row>
          <v-row class="my-2">
            <v-img
              max-height="50"
              max-width="50"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            ></v-img>
            <h4 class="text-h4 px-5">CSS</h4>
          </v-row>
          <v-row class="my-2">
            <v-img
              max-height="50"
              max-width="50"
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
            ></v-img>
            <h4 class="text-h4 px-5">SASS</h4>
          </v-row>
          <v-row class="my-2">
            <v-img
              max-height="50"
              max-width="50"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            ></v-img>
            <h4 class="text-h4 px-5">Bootstrap</h4>
          </v-row>
          <v-row class="my-2">
            <v-img
              max-height="50"
              max-width="50"
              src="https://opencollective-production.s3.us-west-1.amazonaws.com/2ea40e90-e734-11e9-aac4-b78491973d14.png"
            ></v-img>
            <h4 class="text-h4 px-5">Bootstrap VUE</h4>
          </v-row>
          <v-row class="my-2">
            <v-img
              max-height="50"
              max-width="50"
              src="@/assets/img/firebase-1.svg"
            ></v-img>
            <h4 class="text-h4 px-5">Firebase</h4>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SebastiancastillosotoCvCurriculumComp",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
li {
  margin-bottom: 1em;
}
</style>
