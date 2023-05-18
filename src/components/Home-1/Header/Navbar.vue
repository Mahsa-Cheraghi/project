<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home2' }">
                            خانه
                        </router-link>

                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'home2'}">
                            درباره ی ما
                        </router-link>
                        <!-- <router-link class="mar " to="/blogs">وبلاگ</router-link> -->

                    </li>

                </ul>
                <form class="form-inline my-2 my-lg-0 mr-auto">
                    <div>ما را دنبال کنید :
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </form>
            </div>
        </div>
    </nav>

    <router-view></router-view>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    setup() {

    },
}
</script>
  
<style scoped>
@import url("/css/all.css");

body {
    /* direction: ltr !important; */
}

.bg-light {

    background-color: white !important;
    border-top: 1px solid rgb(107, 102, 102);
}

li {
    list-style-type: none;
}

.twitter {
    margin: 1rem;
}

div i {
    color: blue;
}

select {
    width: 100px;
    border: none;
}
</style>
  