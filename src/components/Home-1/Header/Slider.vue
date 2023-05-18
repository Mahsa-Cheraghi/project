<template>
    <div class="container-fluid">
        <div class="Box">
            <div class="image" v-for="i in [Index]" :key="i">
                <img class="image-backgrand" :src="currentImg.src" />
                <div class="overlay"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Slider",
    data() {
        return {
            images: [{
                src: "/image/successful-handsome-doctor-with-a-beaming-smile-V34ZJYH.jpg",

            },

            {
                src: "/image/team-of-multiracial-doctors-at-hospital-e1598498378805.jpg",
            }


            ],
            timer: null,
            Index: 0
        };
    },

    mounted: function () {
        this.startSlide();
    },

    methods: {
        startSlide: function () {
            this.timer = setInterval(this.next, 4000);
        },

        next: function () {
            this.Index += 1;
        },
        prev: function () {
            this.Index -= 1;
        }
    },

    computed: {
        currentImg: function () {
            return this.images[Math.abs(this.Index) % this.images.length];
        }
    }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    position: absolute;
    opacity: 1;
}

.Box{
    /* position: fixed; */

}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(118, 215, 240, 0.5); */
    background-color: rgba(11, 198, 245, 0.5);
}

 .image-backgrand,.overlay {
    top: 0;
    left: 0;
    height:800px;
    width: 100%;
    animation-name: zoom-in;
    animation-duration: 3s;
    animation-delay: 0s;
    animation-fill-mode: forwards;
    /* background-image: url("/image/team-of-multiracial-doctors-at-hospital-e1598498378805.jpg");
    */
 }

@keyframes zoom-in {
    from {

        transform: scale(.9);
     
    }

    to {
       
        transform: scale(1);
      
    }
} 
.Title{
    top:-50%;
}
</style>
  
  
  