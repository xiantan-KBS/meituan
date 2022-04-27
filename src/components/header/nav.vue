<template>
  <ul class="nav-container">
    <li class="list my">
      <router-link :to="{ name: 'main' }">我的美团</router-link>
      <dl>
        <dd>
          <router-link :to="{ path: '/' }">我的订单</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">我的收藏</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">抵用券</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">账户设置</router-link>
        </dd>
      </dl>
    </li>
    <li>
      <router-link :to="{ name: 'main' }">手机APP</router-link>
    </li>
    <li class="list bd">
      <router-link :to="{ name: 'main' }">商家中心</router-link>
      <dl>
        <dd>
          <router-link :to="{ path: '/' }">美团餐饮商户中心</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">登录商家中心</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">美团智能收银</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">我想合作</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">手机免费开店</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">到店综合业务招募</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">餐饮合作商招募</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">商家申请开票</router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">免费合作美团排队</router-link>
        </dd>
      </dl>
    </li>
    <li class="list my">
      <router-link :to="{ name: 'main' }">美团规则</router-link>
      <dl>
        <dd>
          <router-link :to="{ path: '/' }">规则中心 </router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">规则目录 </router-link>
        </dd>
        <dd>
          <router-link :to="{ path: '/' }">规则评议院</router-link>
        </dd>
      </dl>
    </li>
    <li class="list site">
      <router-link :to="{ name: 'main' }">网站导航</router-link>
      <div class="subContainer">
        <dl class="hotel">
          <dt>酒店旅游</dt>
          <dd v-for="(item, i) in hotel" :key="i">
            <router-link :to="{ path: '/' }">{{item}}</router-link>
          </dd>
        </dl>
        <dl class="food">
          <dt>吃美食</dt>
          <dd v-for="(item, i) in food" :key="i">
            <router-link :to="{ path: '/' }">{{ item }}</router-link>
          </dd>
        </dl>
        <dl class="movie">
          <dt>看电影</dt>
          <dd v-for="(item, i) in movie" :key="i">
            <router-link :to="{ path: '/' }">{{ item }}</router-link>
          </dd>
        </dl>
        <dl class="app">
          <dt>手机应用</dt>
          <dd>
            <a
              href="https://waimai.meituan.com/mobile/download/default"
              target="_blank"
              ><img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                title="外卖app"
                alt="外卖app"
            /></a>
          </dd>
          <dd>
            <a href="https://minsu.meituan.com/app/" target="_blank"
              ><img
                class="appicon"
                src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                title="民宿app"
                alt="民宿app"
            /></a>
          </dd>
          <dd>
            <a href="https://i.meituan.com/mobile/down/meituan" target="_blank"
              ><img
                class="appicon"
                src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                title="美团app"
                alt="美团app"
            /></a>
          </dd>
          <dd>
            <a
              href="https://www.dianping.com/events/m/index.htm"
              target="_blank"
              ><img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                title="点评app"
                alt="点评app"
            /></a>
          </dd>
          <dd>
            <a href="https://maoyan.com/app" target="_blank"
              ><img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                title="猫眼app"
                alt="猫眼app"
            /></a>
          </dd>
        </dl>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      movie: [
        "热映电影",
        "热门影院",
        "热映电影口碑榜",
        "最受期待电影",
        "国内票房榜",
        "北美票房榜",
        "电影排行榜",
      ],
      food: ["吃美食", "烤鱼", "特色小吃", "烧烤", "自助餐", "火锅", "代金券"],
      hotel: [
        "酒店旅游",
        "国际机票",
        "火车票",
        "民宿",
        "经济型酒店",
        "主题酒店",
        "商务酒店",
        "公寓",
        "豪华酒店",
        "客栈",
        "青年旅社",
        "度假酒店",
        "别墅",
        "农家院",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/var.scss";
.nav-container {
  align-items: center;
  display: flex;
  // justify-content: space-between;
  li {
    width: 78px;
    height: 40px;
    box-sizing: border-box;
    padding: 12px 14px;
    text-align: center;
    cursor: pointer;
    position: relative;
    > dl,
    .subContainer {
      display: none;
    }
    &.list:hover {
      background-color: #fff;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
    }
    &.my:hover,
    &.bd:hover {
      dl {
        display: block;
        width: 100%;
        line-height: 30px;
        position: absolute;
        border: 1px solid #e5e5e5;
        border-top: none;
        background: #fff;
        text-align: center;
        z-index: 1000;
        top: 30px;
        box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
    &.my:hover {
      dl {
        width: 100%;
        left: -1px;
      }
    }
    &.bd:hover {
      dl {
        width: 140%;
        right: -1px;
        border: 1px solid #e5e5e5;
      }
    }

    &.site:hover {
      .subContainer {
        display: flex;
        width: 1200px;
        box-sizing: border-box;
        border-top-left-radius: 4px;
        padding: 30px 36px 36px 47px;
        line-height: 30px;
        position: absolute;
        border: 1px solid #e5e5e5;
        background: #fff;
        text-align: center;
        z-index: 1000;
        top: 30px;
        left: -1123px;
        box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        &:before {
          content: " ";
          display: block;
          width: 76px;
          height: 4px;
          background: #fff;
          position: absolute;
          top: -1px;
          right: 0;
        }

        > dl {
          box-sizing: border-box;
          text-align: left;
          display: inline-block !important;
          margin-right: 47px;
          font-size: 0;

          dt {
            margin-bottom: 26px;
            font-size: 14px;
            color: $title;
            text-align: center;
          }

          dd {
            width: 78px;
            display: inline-block;
            text-align: center;
            font-size: 12px;
          }

          &.hotel {
            width: 234px;
          }

          &.food {
            width: 156px;
          }

          &.movie {
            width: 90px;
            dd {
              width: 100%;
            }
          }

          &.app {
            width: 380px;
            flex: 1;
            text-align: center;
            dd {
              width: 60px;
              height: 73px;
              line-height: 73px;
              text-align: center;
              margin: 0 8px;
              img {
                width: 60px;
                height: 60px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
