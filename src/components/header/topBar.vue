<template>
  <div class="top-bar-container">
              <Geo />
              <Nav />
  </div>
</template>

<script>
import Geo from "./geo.vue";
import Nav from "./nav.vue";
export default {
    components:{
        Geo,
        Nav,
    }
}
</script>

<style lang="scss">
// @import "@/assets/css/public/header/topbar.scss";
.top-bar-container{
    height: 40px;
    width: 1190px;
    margin: 0 auto;
    // overflow: hidden;
    display: flex;
    justify-content: space-between;
}
</style>