<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(card, index) in getPortfolio"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-card :href="card.link" target="_blank">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="350px"
            >
              <v-card-title v-text="card.name"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(["getPortfolio"]),
  },
};
</script>
