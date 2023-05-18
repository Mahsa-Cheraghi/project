<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-10">
                        <h2>داروی مناسب خود را پیدا کنید</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10">
                        <p>شخیص دقیق می تواند یکی از تاثیرگذارترین تجربیاتی باشد که می توانید داشته باشید. ما می توانیم به
                            شما کمک کنیم تا به آنجا بروید.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="tab">
                                <input type="checkbox" id="rd2" name="rd" />
                                <label class="tab-label" for="rd2">
                                    <h5>ما پزشکان متخصصی داریم </h5>
                                </label>
                                <div class="tab-content">
                                    خیلی دور پشت کوه های کشورهای Vokalia و Consonantia زندگی میکنند
                                </div>

                            </div>
                            <div class="tab">
                                <input type="checkbox" id="rd3" name="rd" />

                                <label class="tab-label" for="rd3">
                                    <h5>کیفیت و ایمنی در کلینیک Medkit</h5>

                                </label>
                                <div class="tab-content">
                                    آنها جدا از هم در Bookmarksgrove درست در ساحل Semantics زندگی می کنند، یک اقیانوس زبان
                                    بزرگ. رودخانه کوچکی به نام دودن از کنار آنها می گذرد و مواد غذایی لازم را برای آن تامین
                                    می کند.

                                    این کشور بهشتی است که در آن قسمت های برشته جملات به دهان شما پرواز می کند.
                                </div>
                            </div>
                            <div class="tab">
                                <input type="checkbox" id="rd1" name="rd" />

                                <label class="tab-label" for="rd1">
                                    <h5>بیماری ها و شرایط</h5>

                                </label>
                                <div class="tab-content">
                                    حتی «اشاره‌گیری» قدرتمند هیچ کنترلی روی متون کور ندارد، این یک زندگی تقریباً غیرمستقل
                                    است، اما یک روز یک خط کوچک از متن کور به نام لورم ایپسوم تصمیم گرفت به دنیای دوردست
                                    گرامر برود.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-lg-6"><img class="imagedoctor" src="/img/illustration-3HT8LSZ@2x-768x753.png"></div>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    data() {
        return {
        }
    }

}

</script>

<style scoped>
@import url("/css/all.css");

body {

    margin: 0px;
}

.imagedoctor {
    width: 600px;
}

h1 {
    font-size: 3em !important;
}

input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.tab {
    /* color: rgb(31, 42, 77); */
    overflow: hidden;
}

.tab-label {
    display: flex;
    padding: 1em;

    cursor: pointer;
    justify-content: flex-start;
}

i {
    font-size: 25px;
    padding-left: 5px;
}

.tab-label::before {
    content: " > ";
    background-color: white;
    width: 40px;
    height: 30px;
    text-align: center;
    transition: all 0.15s;
    font-weight: bold;
}

.tab-content {
    height: 0;
}

input:checked~.tab-content {

    padding: 1em 1em 1em 1em;
    height: auto;
}

input:checked~.tab-label::before {
    transform: rotate(-90deg);
}
@media (max-width: 760px) {
    .imagedoctor{
        display: none;
    }
}
</style>