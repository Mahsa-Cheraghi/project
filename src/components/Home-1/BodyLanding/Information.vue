<template>
    <br>
    <div class="container">
        <div class="row">
            <div class="col-lg-10">
                <div class="title">
                    <br>
                    <h2>ما بهترین خدمات مراقبت های بهداشتی را ارائه می دهیم</h2><br>
                    <p>تشخیص دقیق می تواند یکی از تاثیرگذارترین تجربیاتی باشد که می توانید داشته باشید.</p>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-lg-4">
                <div class="boxs">
                    <div class="row">
                        <div class="col-lg-3">
                            <span class="logos fas fa-hospital"></span>
                        </div>
                        <div class="col-lg-5">
                            <p class="h5 mt-3"> خدمات تشخیص</p>
                        </div><br>
                        <div class="txt col-lg-7">

                            <p>ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت های مبتنی بر شواهد را ارائه می دهیم."</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-lg-4">
                <div class="boxs">
                    <div class="row">
                        <div class="col-lg-3">
                            <span class="logos fas fa-hospital"></span>
                        </div>
                        <div class="col-lg-5">
                            <p class="h5 mt-3">دکتر در حال تماس</p>
                        </div><br>
                        <div class="txt col-lg-7 ">

                            <p>ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت های مبتنی بر شواهد را ارائه می دهیم."</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="boxs bg-color">
                    <div class="row">
                        <div class="col-lg-5">
                            <p class="h5 mt-3"> ساعات کار </p>
                        </div>
                        <div class="col-lg-3">
                        </div>
                        <br>
                        <div class="txt col-lg-7">

                            <p>خیلی دور، پشت کوه ها، دور از کشورهای Vokalia و Consonantia، متون کور زندگی می کنند.</p>
                        </div>
                    </div>

                    <div>
<span class="left">Mon-Fri</span><span class="right">6am - 10pm</span>
                </div>
                <div>
<span class="left">Mon-Fri</span><span class="right">6am - 10pm</span>
                </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="boxs">
                    <div class="row">
                        <div class="col-lg-3">
                            <span class="logos fas fa-hospital"></span>
                        </div>
                        <div class="col-lg-5">
                            <p class="h5 mt-3">آزمایشگاه و رادیو لوزی</p>
                        </div><br>
                        <div class="txt col-lg-7">

                            <p>ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت های مبتنی بر شواهد را ارائه می دهیم."</p>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="boxs">
                    <div class="row">
                        <div class="col-lg-3">
                            <span class="logos fas fa-hospital"></span>
                        </div>
                        <div class="col-lg-5">
                            <p class="h5 mt-3"> درمان اورزانسی</p>
                        </div><br>
                        <div class="txt col-lg-7">

                            <p>ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت های مبتنی بر شواهد را ارائه می دهیم."</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br><br>
    <br>
</template>
<script>

import '@fortawesome/fontawesome-free/css/all.css'
export default ({
    data() {
        return {
            boxes: [

                {
                    logo: "fab fa-facebook-f",
                    title: "خدمات تشخیصی",
                    text: "ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت های مبتنی بر شواهد را ارائه می دهیم."
                },
                {
                    title: "دکتر درحال تماس",
                    text: "ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت های مبتنی بر شواهد را ارائه می دهیم."
                },
                {
                    title: "درمان اورژانسی",
                    text: "دور، پشت کلمه کوه ها، دور از کشورهای Vokalia و Consonantia، متون کور زندگی می کنند."
                },
                {
                    title: "آزمایشگاه و رادیولوژی",
                    text: "ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت های مبتنی بر شواهد را ارائه می دهیم."
                },
                {
                    title: "درمان اورژانسی",
                    text: "ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت های مبتنی بر شواهد را ارائه می دهیم."
                },

            ]
        }
    },
    methods: {
        gg() {
            console.log(this.boxes)
        }
    },
})
</script>
<style scoped>
@import url("/css/all.css");

.title {
    text-align: center;
}

.boxs {
    box-sizing: border-box;
    text-align: center;
    border: 1px solid rgb(216, 201, 201);
    background-color: white;
    margin: 5px;
    box-shadow: 1px 1px 5px 5px #e0dddd;
}

.logos {
    /* left: -40%; */
    /* bottom: -50%; */
    font-size: 26px;
    background-color: rgb(67, 127, 218);
    color: white;
    box-shadow: 1px 1px 5px 5px #e0dddd;
    padding: 23px 18px;
    text-align: center;
    border-radius: 8px;
    margin-top: 25px;
}

.txt {
    left: -20%;

}

.bg-color {
    border-radius: 10px;
    color: white;
    box-shadow: none;
    background-image: linear-gradient(to bottom, rgb(17, 50, 235), rgb(177, 196, 238));
}
@media (max-width: 990px) {
    .txt{
       margin-right: -20%;
    }}
</style>