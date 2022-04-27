<template>
  <div class="house-container">
    <NavBar
      title="推荐民宿"
      :color="['rgb(243, 182, 74)', 'rgb(242, 197, 69)']"
      :type="type"
      @hover="handleActive"
    />
    <div class="house-info">
      <div class="products">
        <div class="product-item" v-for="item in houseList" :key="item.id">
          <a href="#house">
            <img :src="item.img" alt="" class="product-img" />
            <div class="block"><el-avatar :size="50"></el-avatar></div>
            <div class="product-info">
              <p class="product-title">
                {{ item.title }}
              </p>
              <p class="sub-title">
                整套1居室·<span>可住{{ item.maxGuestNumber }}人 | </span
                ><span>{{ item.address }}</span>
              </p>
              <p class="price"><span>￥</span>{{ item.price }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import { getHouse } from "@/api/default.js";
import {mapState} from "vuex";
import debounce from "@/util/debounce";
export default {
  data() {
    return {
      data: [],
      curCity:'',
    };
  },
  components: {
    NavBar,
  },
  computed: {
    houseList() {
      if (!this.data) {
        return [];
      }
      return this.data.map((it) => ({
        ...it,
        img: new URL(it.img, import.meta.url).href,
      }));
    },
    ...mapState('houseCity',['city']),
    // curCity(){
    //   return this.city[0].title;
    // },
    type(){
      const result = this.city.map(it=>({
        ...it,
        active:it.title === this.curCity,
      }));
      // this.curCity = result[0].title;
      return result;
    }
  },
  async created() {
    this.$store.dispatch('houseCity/fetchCity');
    this.data = await getHouse();
     
  },
  methods:{
    async handleActive(e){
      this.curCity = e.title;
      // this.data = await getHouse();
    },
    // debounce,
    // changeActive(e){
    //   debounce(this.handleActive(e));
    // }
  }

};
</script>

<style lang="scss">
.house-container {
  margin-top: 40px;
  .house-info {
    height: 668px;
    padding: 20px;
    padding-right: 0;
    padding-bottom: 0;
    border: 1px solid #e5e5e5;
    border-top: 0px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #fff;
    .products {
      display: flex;
      flex-wrap: wrap;
      .product-item {
        margin-right: 18px;
        .product-img {
          width: 370px;
          height: 208px;
          border-radius: 4px;
          background: url("https://p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png");
          background-size: cover;
          background-position: 50%;
          margin-bottom: 11px;
        }
       .block{
         position: relative;
          .el-avatar {
          border: 2px solid #ffffff;
          position: absolute;
          bottom: -12px;
          right: 15px;
          background: url("https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png") no-repeat 0/100%;
        }
       }
        .product-info {
          padding-bottom: 25px;
          .product-title {
            font-size: 16px;
            color: #222222;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 7px 0;
            font-weight: 400;
            width: 297px;
          }
          .sub-title {
            margin: 10px 0;
            font-size: 12px;
            color: #999999;
          }
          .price {
            font-weight: 500;
            font-size: 22px;
            color: #ff6600;
            letter-spacing: -0.8px;
            padding: 4px 0;
            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
