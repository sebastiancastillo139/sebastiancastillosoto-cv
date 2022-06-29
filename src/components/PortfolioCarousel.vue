<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      :href="item.link"
      target="_blank"
      reverse-transition="fade-transition"
      transition="fade-transition"
      ><v-row class="fill-height" align="center" justify="center">
        <div class="text-h1">{{item.name}}</div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "../assets/FireShot Capture 002 - Sa-Tour-Now! - sebastiancastillo139.github.io.png",
          link: "https://sebastiancastillo139.github.io/Satournow/",
          name: "Sa-Tour-Now!",
        },
        {
          src: "../assets/FireShot Capture 004 - VIAJES CHILE - sebastiancastillo139.github.io.png",
          link: "https://sebastiancastillo139.github.io/Viajes-Chile/",
          name: "Viajes Chile",
        },
        {
          src: "../assets/FireShot Capture 003 - meetandcoffee-vue - sebastiancastillo139.github.io.png",
          link: "https://sebastiancastillo139.github.io/meet-and-coffee-in-vue/",
          name: "Meet & Coffee",
        },
      ],
    };
  },
};
</script>
