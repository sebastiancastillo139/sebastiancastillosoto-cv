<template>
  <div>
    <v-carousel height="88vh">
      <v-carousel-item
        v-for="(item, i) in getPortfolio"
        :key="i"
        :src="item.src"
        :href="item.link"
        target="_blank"
        reverse-transition="fade-transition"
        transition="fade-transition"
        ><v-row class="fill-height" align="center" justify="center">
          <div class="text-h1 yellow--text black accent-10 pa-15">{{ item.name }}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getPortfolio"]),
  },
};
</script>
