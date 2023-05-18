<template>
    <div class="container">
        <div class="row total">
            <div class="col-lg-3 col-md-6"  v-for="(item, id) in names" :key="id"> <img class="logos" :src="item.src"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            names: [{
                src: "/logo/logo-4@2x.png"
            }, { src: "/logo/logo-3 (1).png" }, { src: "/logo/logo-2@2x.png" }, { src: "/logo/logo-1@2x.png" }
            ]   } }
}
</script>
<style scoped>
.logos{
    width:230px;
    opacity: .7;
}
.logos:hover{
    opacity:1;
}
@media (max-width: 770px) {
    .total{
margin-right: 20%;
       }}
</style>