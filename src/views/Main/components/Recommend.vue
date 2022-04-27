<template>
  <div class="recommend-container">
    <NavBar
      title="猜你喜欢"
      :color="['rgb(88, 174, 221)', 'rgb(66, 191, 205)']"
      :isShowAll="false"
      :type="[{ title: '为你甄选最合适的', active: true }]"
    />
    <div class="recommend-list">
      <router-link :to="{name:'goods'}" v-for="it in data" :key="it.id">
        <div class="item">
          <img :src="it.img" alt="" class="card-image" />
          <h4 class="card-title">{{ it.title }}({{it.address}}店)</h4>
          <p class="card-score">
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <span class="card-comment">{{ it.comment }}个评价</span>
          </p>
          <p class="card-address">{{ it.address }}</p>
          <p class="card-price">
            <span class="money">￥</span>
            {{ it.price }}.0
            <em>起</em>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/styles/var.scss";
.recommend-container {
  margin-top: 40px;
  .recommend-list {
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-top: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 758px;
    padding: 10px 10px 20px;
    box-sizing: border-box;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    a {
      width: 20%;
      display: inline-block;
      transition: 0.5s;
      border-radius: 4px;
      .item {
        padding: 10px;
        box-sizing: border-box;
        .card-image {
          width: 214px;
          height: 120px;
          border-radius: 4px;
          object-fit: cover;
          background: url("https://p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png")
            50% / cover;
          // background-size: cover;
          // background-position: 50%;
          margin-bottom: 11px;
        }
        .card-title{
          font-size: 16px;
          height: 24px;
          line-height: 24px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: $title;
          font-weight: 600px;
        }
        .card-score{
          margin: 8px 0;
          color: $topword;
          .el-icon-star-on{
            color: $primary;
            &:nth-last-child(2){
              color: $topword;
            }
          }
          .card-comment{
            font-size: 12px;
            margin-left: 10px;
            font-weight: 500px;
          }
        }
        .card-address{
          font-size: 12px;
            font-weight: 500px;
            color: $topword;
            height: 20px;
        }
        .card-price{
            color: $price;
            font-weight: bold;
            font-size: 18px;
            .money{
              font-size: 14px;
              margin-right: -5px;
            }
            em{
              font-size: 12px;
            }
          }
      }
      &:hover {
        background: rgba(0,0,0,.08);
      }
    }
  }
}
</style>

<script>
import NavBar from "./NavBar.vue";
import { getRecommend } from "@/api/default";
import { mapState } from "vuex";
export default {
  components: {
    NavBar,
  },
  computed: mapState("recommend", ["data"]),
  created() {
    this.$store.dispatch("recommend/fetchRecommend");
  },
};
</script>
