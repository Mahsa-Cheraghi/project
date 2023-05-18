<template>
 
  <div class="row pt-15">
    <!-- <div class=""> -->
    <div class="col-lg-3">
      <h5>نوبت دهی</h5>
      <p class="pt-2">تشخیص دقیق می تواند یکی از تاثیرگذارترین تجربیاتی باشد که می توانید داشته باشید.</p>
      <div class="p-1 mr-auto"><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
          autocomplete="off">
          +62 361 234 567
        </button></div>
    </div>
    <div class="col-lg-3">
      <location />
    </div>
    <div class="col-lg-3"><h5>صفحات دیگر</h5>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
    </div>
    <div class="col-lg-3">
      <h5>لینک های سریع</h5> <a href="#top" class="gototop">خانه</a>
    </div>
  <!-- </div> -->

</div>
  <!-- <button @click="showMessage">Show Message</button> -->
</template>
<script>
import location from './location.vue';
// import { myFunction } from './gotop.js'
export default {
  components: {
    location
  },

  data() {
    return {
      //   methods: {
      // showMessage() {
      //   myFunction();
      // }},
    }


  }
}
</script>
<style>
a {
  text-decoration: none;
}
</style>