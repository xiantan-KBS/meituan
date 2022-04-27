<template>
  <div class="movie-container">
    <NavBar title="猫眼电影" :type="type" @hover="handleActive" />
    <div class="block">
      <el-carousel  :autoplay="false" indicator-position="none">
        <el-carousel-item v-for="item in data" :key="item.title">
          <div class="banner">
            <div class="item" v-for="it in data[i].movies" :key="it.id">
              <a href="#movie">
                <img :src="it.img" alt="" class="film-img" />
                <img
                  v-if="it.IMAX"
                  src="https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png"
                  class="film-imax"
                />
                <div class="film-info">
                  <p class="film-score">
                    <b
                      >{{ curActive === "正在热映" ? "观众评" : "" }}
                      <span>{{ it.mk }}</span
                      >{{ curActive === "即将上映" ? "人想看" : "" }}</b
                    >
                  </p>
                  <p class="film-name">{{ it.nm }}</p>
                  <span class="buy-ticket" v-if="curActive === '正在热映'"
                    >购票</span
                  >
                </div>
              </a>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
// import {getMovie} from "@/api/default";
import { mapState } from "vuex";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      i: 0,
      curActive: "正在热映",
    };
  },
  computed: {
    ...mapState("movie", ["data"]),
    type() {
      return this.data.map((it) => ({
        title: it.title,
        active: it.title === this.curActive,
      }));
    },
  },
  created() {
    this.$store.dispatch("movie/fetchMovie");
  },
  methods: {
    handleActive(e) {
      this.curActive = e.title;
      if (e.title === "正在热映") {
        this.i = 0;
      } else {
        this.i = 1;
      }
    },
  },
};
</script>

<style lang="scss">
.movie-container {
  margin-top: 40px;
  .block {
    color: #000;
    height: 297px;
    .el-carousel__arrow {
      background-color: #333;
    }
    .el-icon-arrow-right,
    .el-icon-arrow-left {
      color: #fff;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    .banner {
      // left: 0px;
      margin: 1px 12px;
      // position: relative;
      height: 100%;
      transition: 0.5s;
      // transition-timing-function: ease-out;
      width: 10000000px;
      .item {
        height: 297px;
        width: 214px;
        float: left;
        margin-right: 19px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 50%;
        position: relative;
        .film-img {
          border-radius: 4px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 0px;
        }
        .film-imax {
          position: absolute;
          top: 10px;
          z-index: 99;
          left: -6px;
          height: 20px;
          box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
          width: auto;
          border: 0px;
        }
        .film-info {
          height: 100px;
          width: 100%;
          position: absolute;
          bottom: 0;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          background-image: linear-gradient(
            -180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(29, 45, 55, 0.8) 99%
          );
          .film-score {
            font-size: 12px;
            color: #fff;
            text-align: left;
            margin-top: 48px;
            padding-left: 10px;
            font-weight: 500;
            b {
              font-weight: bold;
              span {
                font-size: 16px;
                color: #fd9827;
                font-weight: 500;
                margin-right:5px;
              }
            }
          }
          .film-name {
            text-align: left;
            color: #fff;
            padding-left: 10px;
            font-size: 16px;
            white-space: nowrap;
            width: 6em;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 500;
          }
          .buy-ticket {
            background: #ff4949;
            border-radius: 100px;
            color: #fff;
            padding: 2px 12px 3px 12px;
            font-size: 14px;
            position: relative;
            top: -24px;
            cursor: pointer;
            line-height: 20px;
            text-align: center;
            float: right;
            right: 10px;
          }
        }
      }
    }
  }
}
</style>
