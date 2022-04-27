<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/" class>猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/" class>美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" class="apartment">民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/" class="business">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/" class>美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <Carousel />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login" v-if="!nickname">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt>
          </h4>

          <p class="m-life-login-name">Hi！ {{$store.state.userName ? $store.state.userName : '你好！'}}</p>
          <p v-if="!$store.state.userName">
            <router-link :to="{name: 'register'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p v-if="!$store.state.userName">
            <router-link :to="{name: 'login'}">
              <el-button round>立即登陆</el-button>
            </router-link>
          </p>
        </div>
        <div class="m-life-login" v-else>
          <router-link to="/settings" class="setting"
            ><i class="el-icon-s-tools"></i
          ></router-link>
          <div class="avatar">
            <a href="#">
              <img
                src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png"
              />
            </a>
          </div>
          <div class="nickName">
            <a href="#"
              ><em>{{ nickname }}</em></a
            >
            <a href="#"><i class="el-icon-shopping-cart-1"></i></a>
          </div>
          <ul class="util">
            <li>
              <p><i class="el-icon-s-order"></i></p>
              <p class="dir">我的订单</p>
            </li>
            <li>
              <p><i class="el-icon-star-on"></i></p>
              <p class="dir">我的收藏</p>
            </li>
            <li>
              <p><i class="el-icon-s-ticket"></i></p>
              <p class="dir">抵用券</p>
            </li>
            <li>
              <p><i class="el-icon-s-goods"></i></p>
              <p class="dir">余额</p>
            </li>
            <li>
              <p><i class="el-icon-more"></i></p>
              <p class="dir">更多</p>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img
            src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt="下载APP"
          />
          <p>美团APP手机版</p>
          <p class="last-p">
            <span class="red"> 1元起 </span>
            吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
@import "@/assets/css/index/life.scss";
.m-life-login {
  position: relative;
  .setting {
    position: absolute;
    right: 10px;
    top: 10px;
    i {
      font-size: 24px;
    }
  }
  .avatar {
    img {
      width: 47px;
      height: 47px;
      border-radius: 50%;
      border: 5px solid #e5e5e5;
    }
    margin-bottom: 10px;
  }
  .nickName {
    em {
      font-size: 16px;
      color: #222;
    }
    a {
      margin-left: 14px;
    }
    .el-icon-shopping-cart-1 {
      width: 18px;
      height: 18px;
      border-radius: 3px;
      color: #fff;
      background-color: #ffc300;
      display: inline-block;
      font-size: 18px;
    }
  }
  .util {
    width: 100%;
    li{
      float: left;
      width: 33.3%;
      text-align: center;
      cursor: pointer;
      i{
        font-size: 20px;
        color: #ffc300; 
      }
      .el-icon-star-on{
        font-size: 20px;
      }
      p{
        font-size: 14px;
        margin: 10px 0;
      }
      .dir{
        color: #222;
        font-size: 12px;
      }
    }
  }
}
</style>
<script>
import Carousel from "./Carousel.vue";
export default {
  components: {
    Carousel,
  },
  computed: {
    nickname() {
      return this.$store.state.userInfo.nickname;
    },
  },
};
</script>
