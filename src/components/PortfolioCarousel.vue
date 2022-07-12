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
          <div class="col-8 text-center text_container">
            <h2 class="yellow--text">{{ item.name }}</h2>
          </div>
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

<style scoped>

.text_container{
  background-color: rgb(0, 0, 0, 0.5);
}

.yellow--text{
  opacity: 1;
}

</style>
