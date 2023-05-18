<template>
    <div class="bgbox mt-15 py-15">
        <div class="row">

            <div class="col-lg-6"> <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
            <div class="col-lg-6">
                <h3 class="text-center title">با Medkit در ارتباط باشید</h3>
            </div>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {

}
</script>
<style scoped>
@import url("/css/all.css");

.bgbox {
    background-color: rgb(239, 248, 248);
    text-align: center;
}
a{
    border: 1px solid white;
    border-radius: 50%;
    padding: 15px;
    margin: 5px;
    background-color: white;
}
a:hover{
    background-color: rgb(58, 115, 236);
}
a i{
    font-size: 1.5rem;
}
a:hover i{
    color:white
}
@media (max-width: 990px) {
    .title{
        top:50%;
    }
    }
</style>