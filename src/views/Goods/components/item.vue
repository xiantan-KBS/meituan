<template>
  <dl class="s-item">
    <router-link to="/detail" class="img">
      <span class="sort">{{index+1}}</span>
      <img :src="meta.image" alt="图片" />
    </router-link>
    <dd>
      <h3>
        <router-link :to="{ name: 'detail' }">{{ meta.title }}</router-link>
      </h3>
      <p>
        <el-rate
          v-model="meta.score"
          disabled
          text-color="#ff9900"
          score-template="{value}"
        ></el-rate>
        <span v-if="meta.score > 4.5">很好</span>
        <span v-else-if="meta.score > 4">好</span>
        <span v-else-if="meta.score > 3.5">不错</span>
        <span v-else-if="meta.score > 3">一般</span>
        <span v-else>很差</span>
        <span class>{{ meta.score }}分</span>
        <span class="s-item-comment-total">{{ meta.commentNum }}人评论</span>
      </p>
      <p>
        <span class="s-item-tab">
          <span v-for="(v, i) in meta.tab" :key="v">{{
            v + (i < meta.tab.length - 1 ? "|" : "")
          }}</span>
        </span>
        <span class="s-item-addr">{{ meta.address }}</span>
        <span>
          <a href="#" class="map">
            <i class="el-icon-location"></i>
            查看地图
          </a>
        </span>
      </p>
      <p>
        <span class="s-item-price"> 人均￥{{ meta.avgPrice }} </span>
      </p>
      <ul class="deal-items">
        <li
          class="items"
          v-for="(item, index) in meta.dealItems.slice(0, 2)"
          :key="index"
        >
          <p class="deal-title">
            {{ item.title }}
          </p>
          <p>
            <span class="deal-price"> ￥{{ item.price }} </span>
            <span class="deal-old-price">门市价￥{{ item.counterPrice }}</span>
            <span class="deal-sales">已售{{ item.saleNum }}</span>
          </p>
        </li>
      </ul>
    </dd>
  </dl>
</template>
<script>
export default {
  props: ["meta","index"],
};
</script>
<style lang="scss" scoped>
.s-item {
  display: flex;
  padding: 20px 0;
  min-height: 125px;
  border-top: 1px solid #e5e5e5;
  font-size: 14px;

  .img {
    width: 220px;
    padding-right: 20px;
    position: relative;
    >.sort{
      background: #FB6433;
    border-radius: 2px;
    position: absolute;
    line-height: 13px;
    width: 20px;
    margin-left: -3px;
    margin-top: 3px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    }
    > img {
      width: 220px;
      height: 125px;
      overflow: hidden;
      border-radius: 4px;
    }
  }

  dd {
    flex: 1;

    > h3 {
      font-weight: 500;
      font-size: 16px;
      color: #333;
      a{
        color: #333;
      }
    }
    .el-icon-location {
      font-size: 18px;
      color: #ffc300;
    }
    .map{
      color: #222;
    }
    .el-rate {
      display: inline-block;

      .el-rate__icon {
        font-size: 12px;
      }
    }

    > span {
      font-size: 12px;
      margin-right: 10px;
    }

    .s-item-comment-total {
      color: #f90;
    }

    .s-item-price {
      color: #666;
      letter-spacing: -1px;
    }
    .deal-items {
      .items {
        cursor: pointer;
        border-radius: 4px;
        padding: 6px 0 8px;
        &:hover {
          background-color: #f8f8f8;
          .deal-title {
            color: #FB6433;
          }
        }
        .deal-title {
          font-size: 14px;
          line-height: 20px;
        }
        .deal-price {
          font-size: 15px;
          color: #f60;
          margin-right: 10px;
        }
        .deal-old-price {
          font-size: 12px;
          color: #999;
          margin-right: 10px;
        }
        .deal-sales {
          font-size: 12px;
          color: #999;
        }
      }
    }
    > p {
      > span {
        font-size: 12px;
        padding-right: 10px;
      }

      > em {
        font-style: normal;
      }

      > b {
        float: right;
        border: 1px solid #FB6433;
        background-color: rgb(255, 153, 0);
        border-color: rgb(255, 153, 0);
        color: rgb(255, 255, 255);
        padding: 0 6px;
        border-radius: 2px;
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        cursor: default;
      }
    }

    > ul {
      list-style: none;
      font-size: 12px;
      padding-top: 11px;
      margin-top: 5px;
      border-top: 1px dashed #ddd;

      li {
        width: 668px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        .detail-type {
          width: 27px;
          height: 15px;
          line-height: 15px;
          display: inline-block;
          background: rgb(35, 147, 238);
          color: #fff;
          text-align: center;
          border-radius: 1px;
          padding: 1px 2px;
          margin-right: 10px;
        }

        &:nth-child(2) {
          .detail-type {
            background: rgb(162, 35, 204);
          }
        }

        &:nth-child(3) {
          .detail-type {
            background: rgb(234, 109, 45);
          }
        }
      }
    }
  }
}
</style>
