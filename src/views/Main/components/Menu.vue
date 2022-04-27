<template>
  <div class="menu-container">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd
        v-for="item in menuList"
        :key="item.icon"
        @mouseenter="menuEnter(item)"
      >
        <i :class="item.icon"></i>
        {{ item.title }}
        <span v-if="item.hot" class="hot">HOT</span>
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
      v-if="curDetail"
      class="detail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <template v-for="(item, index) in curDetail">
        <div class="category">
          <h4 :key="index">{{ item.category }}</h4>
          <span>更多</span>
        </div>
        <span v-for="v in item.type" :key="v.href">{{ v.name }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import { getMenu } from "@/api/default";
export default {
  data() {
    return {
      menuList: [],
      curDetail: null,
      timer:null,
    };
  },
  async created() {
    this.menuList = await getMenu();
  },

  methods: {
    menuEnter(item) {
      //   console.log(item);
      this.curDetail = item.children;
    },
    menuLeave() {
      this.timer = setTimeout(()=>{
        this.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/var.scss";
.category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  h4 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 24px;
    height: 22px;
    line-height: 22px;
    padding-bottom: 10px;
    color: #222;
  }
}
.menu-container {
  height: 478px;
  box-sizing: border-box;
  margin-top: -50px;
  color: $word;
  position: relative;
  background: #fff;
  border: 1px solid #e5e5e5;
  dt {
    color: $title;
    font-weight: bold;
    height: 50px;
    padding-top: 15px;
    box-sizing: border-box;
    font-size: 16px;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  dd {
    position: relative;
    box-sizing: border-box;
    padding: 2px 12px;
    height: 26px;
    line-height: 26px;
    cursor: pointer;
    .hot {
      font-size: 12px;
      color: #222222;
      background: #fff3cc;
      display: inline-block;
      border-radius: 10px;
      padding: 0 7px;
      margin-left: 5px;
      transform: scale(0.9);
      position: relative;
      opacity: 1;
    }
    &:hover {
      background: rgba(255, 150, 0, 0.08);
      color: $title;
      font-weight: bold;
      .hot{
          background: $primary;
          font-weight: normal;
      }
      & > i {
        opacity: 1;
      }
    }
  }

  .nav {
    font-size: 13px;
    dd > i {
      font-family: "meituan";
      font-size: 14px;
      font-style: normal;
      margin-right: 11px;

      &:before {
        width: 14px;
        height: 14px;
        display: inline-block;
      }
    }

    .food {
      &:before {
        content: "\e622";
        color: #ff8200;
      }
    }

    .takeout {
      &:before {
        content: "\e630";
        color: #ffb500;
      }
    }

    .hotel {
      &:before {
        content: "\e62a";
        color: #9b5e3e;
      }
    }

    .homestay {
      &:before {
        content: "\e631";
        color: #ffb500;
      }
    }

    .movie {
      &:before {
        content: "\e62c";
        color: #ff3d00;
        position: relative;
        left: -2px;
      }
    }

    .airport {
      &:before {
        content: "\e632";
        color: #03a9f4;
      }
    }

    .ktv {
      &:before {
        content: "\e627";
        color: #00bf96;
      }
    }

    .life {
      &:before {
        content: "\e633";
        color: #00bf96;
      }
    }

    .hair {
      &:before {
        content: "\e626";
        transform: scale(0.7);
        color: #ff4081;
      }
    }

    .marry {
      &:before {
        content: "\e629";
        color: #ff4081;
      }
    }

    .offspring {
      &:before {
        content: "\e623";
        color: #ff4081;
      }
    }

    .sport {
      &:before {
        content: "\e62b";
        color: #03a9f4;
      }
    }

    .furniture {
      &:before {
        content: "\e625";
        color: #00bf96;
      }
    }

    .study {
      &:before {
        content: "\e624";
        color: #00bf96;
      }
    }

    .health {
      &:before {
        content: "\e628";
        color: #03a9f4;
      }
    }

    .bar {
      &:before {
        content: "\e621";
        color: #00bf96;
      }
    }

    .arrow {
      width: 4px;
      height: 4px;
      border-bottom: 1px solid $topword;
      border-right: 1px solid $topword;
      transform: rotate(-45deg);
      display: block;
      position: absolute;
      right: 13px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

  .detail {
    padding: 0 30px;
    position: absolute;
    left: 230px;
    bottom: 0;
    width: 400px;
    height: 416px;
    background: #fff;
    z-index: 9999;

    span {
      color: #999;
      font-size: 12px;
      line-height: 15px;
      display: inline-block;
      margin-right: 16px;
      margin-top: 10px;
      cursor: pointer;

      &:hover {
        color: $select;
      }
    }
  }
}
</style>
