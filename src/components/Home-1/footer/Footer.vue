<template>
    <div class="bg">
    <HeadFooter/>
    <Partners/>
    <BoxFooter/>
<connections/>
<footerend/>
    </div>
</template>
<script>
import HeadFooter from './HeadFooter.vue'
import Partners from './Partners.vue'
import BoxFooter from './BoxFooter.vue'
import connections from "./connections.vue"
import footerend from './footerend.vue'
export default {
components:{
    HeadFooter,Partners,BoxFooter,connections,footerend
}
}
</script>
<style scoped>
.bg {

    background-image: linear-gradient(to bottom, rgb(239, 248, 248),white);

}
</style>