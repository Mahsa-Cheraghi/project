<template>
  <HeadPage />
  <Navbar />
  <Slider />
  <Box />
</template>
<script>
import HeadPage from '../Header/HeadPage.vue';
import Navbar from "../Header/Navbar.vue"
import Slider from "./Slider.vue"
import Box from "./Box.vue"
export default {
  components: {
    HeadPage,
    Navbar,
    Slider,
    Box
  }
}
</script>
  