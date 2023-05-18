<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3" v-for="(item, id) in Boxs" :key="id">
        <div class="box">
          <img class="img" :src="item.img" />
          <br>
          <p class="h4">{{ item.title }}</p>
          <p>{{ item.Text }}</p>
          <button type="button" class="btn btn-primary">بیشتر بدانید</button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Boxs: [
        {
          img: "/img/dental-inspection-P64TKQA-1024x1024.jpg",
          title: "خدمات دندانپزشکی",
          Text: "داروهای با کیفیتی که برای شما گواهی رسمی دارند دریافت کنید",


        },
        {
          img: "/img/image-8VG2XV5-300x300.jpg",
          title: "مراقبت های اولیه",
          Text: "داروهای با کیفیتی که برای شما گواهی رسمی دارند دریافت کنید",
        },
        {
          img: "/img/vaccination-to-child-L2E9QRB-1024x1024.jpg",
          title: "واکسیناسیون",
          Text: "داروهای با کیفیتی که برای شما گواهی رسمی دارند دریافت کنید"

        },
        {
          title: "خدمات اضطراری",
          Text: "با بخش حوادث و اورژانس ما تماس بگیرید تا سریع ترین و نزدیک ترین کمک های اولیه مورد نیاز خود را دریافت کنید."

        }
      ]

    }
  }

}




</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.box {
  box-sizing: border-box;
  text-align: center;
  border: 1px solid rgb(216, 201, 201);
  margin: 2px;
  padding: 50px;
  top: -150px;
  background-color: white;
  border-radius: 10px;
}

.img {
  width: 100px;
  border-radius: 50%;
}
</style>