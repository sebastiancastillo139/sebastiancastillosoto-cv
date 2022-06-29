<template>
  <div class="about">
    <PortfolioCarousel/>
  </div>
</template>


<script>
import PortfolioCarousel from '@/components/PortfolioCarousel.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { PortfolioCarousel }
};
</script>
