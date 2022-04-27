<template>
  <div class="goods-container" ref="goods">
    <Crumb />
    <el-row class="goods">
      <el-col :span="19">
        <div class="top-nav">
          <Classify type="分类" :list="classifyList" />
          <Classify type="区域" :list="areaList" class="border-none" />
        </div>
        <div class="goods-list">
          <Products />
        </div>
      </el-col>
      <el-col :span="5">
        <div class="map" ref="map">
          <img
            class="map"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160419%2F0266f451ae7642bd8db7347158180e74_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651812790&t=f758bb68e8895090f257668f51ce7fee"
            alt=""
          />
        </div>
        <Likes />
      </el-col>
    </el-row>
    <Page :maxPage="5" :curPage="curPage" @changePage="changeCur"/>
    <BottomNav />
  </div>
</template>

<script>
import { getClassify, getArea } from "@/api/default";
import Crumb from "./components/crumb.vue";
import Classify from "./components/classify.vue";
import BottomNav from "@/views/Main/components/bottomNav.vue";
import Likes from "./components/likes.vue";
import Products from "./components/products.vue";
import Page from "./components/page.vue";
export default {
  components: {
    Crumb,
    Classify,
    BottomNav,
    Likes,
    Products,
    Page,
  },
  data() {
    return {
      classifyList: [],
      areaList: [],
      curPage:1,
    };
  },
  async created() {
    this.classifyList = await getClassify();
    this.areaList = await getArea();
  },
  mounted(){
    // var rect = this.$refs.map.getBoundingClientRect();
    // console.log(rect)
    // console.log('自身高度',rect.height);
    // console.log('距离上边的高度',rect.top);
    window.addEventListener('scroll',()=>{
      console.log(window.scrollY)
    })
  },
  methods:{
    changeCur(n){
     this.curPage = n;
    }
  }
};
</script>

<style lang="scss">
.goods-container {
  margin: 0 auto;
  width: 1190px;
  padding-top: 10px;
  .top-nav {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-top: 10px;
    padding-bottom: 30px;
    .border-none {
      .category {
        border: none;
      }
    }
  }
  .el-col-5 {
    padding-left: 16px;
    padding-top: 10px;
  }
  .map {
    width: 230px;
    height: 222px;
    border-radius: 4px;
    margin-bottom: 10px;
    position: relative;
    top: 0px;
    // img {
    //   width: 100%;
    //   position: absolute;
    // }
  }
}
</style>
