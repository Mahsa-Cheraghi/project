<template>
    <div class="bg-white form">
                <form class="p-5 ml-15">
  <div class="form-group">
    <input type="text" class="form-control" placeholder="نام:">
  </div>
  <br>
  <div class="form-group">
    <input type="email" class="form-control" placeholder="ایمیل:">
  </div>
  <br>
  <select class="form-select" aria-label="Default select example">
  <option selected>خدمات را انتخاب کنید</option>
  <option value="1">قلب و عروق</option>
  <option value="2">دندانپزشکی</option>
  <option value="3">مراقبت از چشم</option>
  <option value="3">بررسی سلامت</option>
</select>

<br>
  <div class="form-group">
  
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="پیام شما:"></textarea>
  </div>
</form>
<div class="p-3 m-2"><button type="button" class="btn btn-primary" data-toggle="button"
                            aria-pressed="false" autocomplete="off">
                            Book Appointment
                        </button></div></div>
</template>
<style>.form {
    box-shadow: 1px 1px 5px 5px #e0dddd;
    top: -15%;
    border-radius: 5px;
}
@media (max-width: 990px) {
    .form{
        top:8%;
    }
    }
</style>