<template>
    <div class="container">
        <Header />
        <CoreLanding />
        <Footer />
    </div>
</template>
<script>
import Header from "./Header/Header.vue"
import CoreLanding from './BodyLanding/CoreLanding.vue'
import Footer from './footer/Footer.vue'
export default {
  components: {
    Header,
    CoreLanding,
    Footer
  }
}
</script>