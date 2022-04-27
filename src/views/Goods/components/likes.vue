<template>
  <div class="likes-container">
    <h2>猜你喜欢</h2>
    <a href="/detail" v-for="it in likes" :key="it.id" class="like-item">
      <div class="item">
        <img :src="it.img" alt="" class="card-image" />
        <h4 class="card-title">{{ it.title }}({{ it.address }}店)</h4>
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
    </a>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("goods", ["likes"]),
  },
  created() {
    this.$store.dispatch("goods/fetchLikes");
    // this.$store.dispatch('goods/fetchProducts');
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/var.scss";
.likes-container {
  // margin-top: 240px;
  margin-top: 20px;
  width: 230px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background-color: #fff;
  padding: 16px 20px 0;
  box-sizing: border-box;
  // text-align: left;
  h2 {
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    line-height: 22px;
    text-align: left;
  }
  .like-item {
    display: inline-block;
    width: 190px;
    margin-bottom: 20px;
    .card-image {
      width: 190px;
      height: 106px;
      border-radius: 4px;
      object-fit: cover;
      background: url("https://p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png")
        50% / cover;
      // background-size: cover;
      // background-position: 50%;
      margin-bottom: 11px;
    }
    .card-title {
      font-size: 16px;
    //   height: 24px;
      line-height: 24px;
    //   white-space: nowrap;
    //   overflow: hidden;
    //   text-overflow: ellipsis;
      color: $title;
      font-weight: 600px;
    }
    .card-score {
      margin: 8px 0;
      color: $topword;
      .el-icon-star-on {
        color: $primary;
        &:nth-last-child(2) {
          color: $topword;
        }
      }
      .card-comment {
        font-size: 12px;
        margin-left: 10px;
        font-weight: 500px;
      }
    }
    .card-address {
      font-size: 12px;
      font-weight: 500px;
      color: $topword;
      height: 20px;
    }
    .card-price {
      color: $price;
      font-weight: bold;
      font-size: 18px;
      .money {
        font-size: 14px;
        margin-right: -5px;
      }
      em {
        font-size: 12px;
      }
    }
  }
}
</style>
