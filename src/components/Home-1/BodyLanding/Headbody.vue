<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div>
                    <div class="row">
                        <div class="col-lg-8">
                            <h2>کلینیک پزشکی که می توانید به آن اعتماد کنید</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-10">
                            <p> تشخیص دقیق می تواند یکی از تاثیرگذارترین تجربیاتی باشد که می توانید داشته باشید – به خصوص
                                اگر مدتی در جستجوی آن پاسخ بوده باشید. ما می توانیم به شما کمک کنیم تا به آنجا بروید.</p>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-sm-1 icon"><i class=" fas fa-hospital"></i></div>
                        <div class="col-lg-8 col-md-5 col-sm-7">
                            <h4 class="pb-4">خدمات درمانی 24 ساعته </h4>
                        </div>
                        
                        <div class="row">
                            
                            <div class="col-lg-1 col-md-0"></div>
                            <div class="col-lg-11">
                                <p class="txt">ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد جامع را
                                    ارائه می‌کنیم.</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-1 col-md-1 col-sm-1 icon"><i class="fas fa-hospital"></i></div>
                            <div class="col-lg-10 col-md-5 col-sm-7">
                                <h4 class="pb-4">
                                    استاندارد های بین المللی </h4>
                            </div>
                            <div class="row">
                                <div class="col-lg-1"></div>
                                <div class="col-lg-11">
                                    <p class="txt">ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد جامع
                                        را ارائه می‌کنیم.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 col-md-1 col-sm-1 icon"><i class="fas fa-hospital"></i></div>
                            <div class="col-lg-10 col-md-5 col-sm-7">
                                <h4 class="pb-4">
                                    مرکز تعالی </h4>
                            </div>
                            <div class="row">
                                <div class="col-lg-1"></div>
                                <div class="col-lg-11">
                                    <p class="txt">ما متعهد به سلامت و رفاه شما هستیم و آخرین مراقبت‌های مبتنی بر شواهد جامع
                                        را ارائه می‌کنیم.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div class="col-lg-6"><img class="imageman" src="/img/image-HAT9WKS.png"></div>
        </div>
    </div>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'
// import TextLeft from './TextLeft.vue'
export default ({
    data() {
        return {

        }

    }
})
</script>
<style scoped>
@import url("/css/all.css");

.icon {
    font-size: 1.8rem;
    color: rgb(104, 146, 238);
    box-shadow: 1px 1px 3px 3px #e0dddd;
    padding: 2px;
    text-align: center;
    border-radius: 5px;
    width:auto;
}

.icon:hover {
    color: white;
    background-color: rgb(104, 146, 238);
}

.txt{

    top: -30px;
}
@media (max-width: 760px) {
    .imageman{
        display: none;
    }
}
@media (max-width: 1024px) {
    .txt{
margin-right: 10%;
    }
}
@media (max-width: 760px) {

}
</style>

