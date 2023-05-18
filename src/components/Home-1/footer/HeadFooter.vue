<template>
    <br>
    <br>
    <div class="container-fluid">
        <div class="row">
            <div class="Form col-lg-6">
                <Form />
            </div>
            <div class="col-lg-6">
                <div class="mt-15">
                    <h3 class="text-center">قرار ملاقات گذاشتن</h3>
                    <p class="mt-3">تشخیص دقیق می‌تواند یکی از تاثیرگذارترین تجربیاتی باشد که می‌توانید داشته باشید - به
                        خصوص اگر مدتی در
                        جستجوی آن پاسخ بوده باشید. ما می توانیم به شما کمک کنیم تا به آنجا بروید.</p>
                </div>
                <div class="row mt-5">
                    <div class="col-lg-6">
                        <div>
                            <h5 class="text-center my-2">Seminyak, Bali</h5>
                            <location />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div>
                            <h5 class="text-center my-2">Denpasar, Bali</h5>
                            <location />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css';
import location from './location.vue';
import Form from './Form.vue';
export default {
    components: {
        location,
        Form
    }
}
</script>
<style scoped>
@import url("/css/all.css");

</style>