<template>
  <div class="change-city-container">
    <el-row>
      <Province />
    </el-row>
    <el-row>
      <HotCity title="热门城市：" :list="myHotCity" />
    </el-row>
    <el-row>
      <HotCity title="最近访问：" :list="lately" />
    </el-row>
    <el-row>
      <div class="select">
        <h2>按拼音首字母选择：</h2>
        <div>
          <a :href="`#city-${it}`" v-for="it in letter" :key="it">{{ it }}</a>
        </div>
      </div>
    </el-row>
    <el-row>
      <Category :list="categoryList" />
    </el-row>
  </div>
</template>

<script>
import Province from "./components/province.vue";
import HotCity from "./components/hotCity.vue";
import Category from "./components/category.vue";
import { mapState } from "vuex";
import { getFilterCity } from "@/api/default";
// getFilterCity().then(r=>console.log(r))
var arr = [
  "北京",
  "上海",
  "广州",
  "深圳",
  "天津",
  "西安",
  "重庆",
  "杭州",
  "南京",
  "武汉",
  "成都",
];
const myHotCity = [];
for (let i = 0; i < arr.length; i++) {
  myHotCity.push({
    id: i,
    city: arr[i],
  });
}
export default {
  components: {
    Province,
    HotCity,
    Category,
  },
  data() {
    return {
      letter: "abcdefghjklmnpqrstwxyz".toUpperCase().split(""),
      myHotCity,
      data: null,
    };
  },
  computed: {
    ...mapState("aboutCity", ["hotCity"]),
    lately() {
      return this.hotCity.map((it) => ({
        ...it,
        city: it.hotCity.replace("市", ""),
      }));
    },
    categoryList(){
      if (!this.data) {
        return [];
      }
      return this.letter.map(it=>{
        let list = this.data.splice(0,17);
        return {
          value:it,
          cityList:list,
        }
      })
    }
  },
  async created() {
    this.data = await getFilterCity();
  },
};
</script>

<style lang="scss">
.change-city-container {
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
  .select {
    padding: 30px 0;
    display: flex;
    align-items: center;
    h2 {
      color: #222;
    }
    a {
      display: inline-block;
      width: 18px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      margin: 0 9px;
      padding: 4px 4px;
      color: #666;
      &:hover {
        color: #222;
        border-radius: 50%;
        background: #f8f8f8;
      }
    }
  }
}
</style>
