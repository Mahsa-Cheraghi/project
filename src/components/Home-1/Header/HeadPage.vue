<template>
    <div class=container id="top">
        <div class="row">
            <div class="col-lg-12">
                <div class="d-flex">
                    <div class="p-1 col-lg-2"><button type="button" class="btn btn-primary" data-toggle="button"
                            aria-pressed="false" autocomplete="off">
                            Book Appointment
                        </button></div>


                    <div class="pakage p-1">
                        <i class="p-2 fas fa-building"></i>
                        88 Sunset Road
                        <div class=" text">Kuta, Bali 80225</div>
                    </div>



                    <div class="p-1">
                        <i class="p-2 fas fa-frown"></i>
                        Call Us
                        <div class="text">+62 234 6754 345</div>
                    </div>
                    <div class="mr-auto  p-1"><img class="logopage" src="/logo/logo@2x.png"></div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    setup() {

    },
}
</script>
<style scoped>
@import url("./../../../../css/all.css");

body {
    direction: ltr !important;
}

i {
    font-size: 1.4rem;
    color: rgb(55, 142, 223);
    border: 1px solid rgb(55, 142, 223);
    border-radius: 5px;
}

.logopage {
    width: 200px;
}

.btn {
    padding-top: 10px;
    padding-bottom: 10px;
}

.text {
    color: rgb(55, 142, 223);
    font-weight: bold;
}

.package {
    margin-right: 10px;
    margin-left: 10px;
}
</style>
  