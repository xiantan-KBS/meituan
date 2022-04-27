<template>
  <div class="carousel-container">
    <el-carousel height="240px">
      <el-carousel-item v-for="item in imgList" :key="item.link">
        <router-link :to="{ name: 'goods'}">
          <img :src="item.src" />
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getCarousel } from "@/api/default.js";
export default {
  data() {
    return {
      imgList: null,
    };
  },
  async created() {
    this.imgList = await getCarousel("/api/carousel");
  },
};
</script>

<style lang="scss">
.carousel-container {
  height: 240px;
  // width: 540px;
  margin: 10px;
  img {
    height: 240px;
    width: 547px;
  }
  .el-carousel__arrow{
    background-color: #333;
  }
  .el-icon-arrow-right,
  .el-icon-arrow-left {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
