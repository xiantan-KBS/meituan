<template>
  <div class="geo-container">
    <i class="el-icon-location"></i>
    <span class="current-city">{{ curCity }}</span>
    <router-link :to="{ name: 'changeCity' }" class="change-city"
      >切换城市</router-link
    >
    <div class="city">
      [
      <a href="#" v-for="item in city" :key="item.id">{{ item.hotCity }}</a>
      ]
    </div>
    <div class="entry" v-if="!nickname">
      <router-link :to="{ name: 'login' }" class="select">立即登陆</router-link>
      <router-link :to="{ name: 'register' }">注册</router-link>
    </div>
    <div class="entry" v-else>
      <a href="#" class="select">{{ nickname }}</a>
      <a href="#" @click="exit">退出</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("aboutCity", ["hotCity", "curCity"]),
    city() {
      return this.hotCity
        .filter((it, i) => i === 0 || i === 1 || i === 2)
        .map((it) => ({ ...it, hotCity: it.hotCity.replace("市", "") }));
    },
    nickname() {
      return this.$store.state.userInfo.nickname;
    },
  },
  created() {
    this.$store.dispatch("aboutCity/fetchHotCity");
  },
  methods: {
    exit() {
      localStorage.removeItem('token');
      this.$store.commit("userInfo/setUseName", "");
      this.$store.commit("userInfo/setPassword", "");
      this.$store.commit("userInfo/setNickname", "");
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/var.scss";
.geo-container {
  display: flex;
  align-items: center;
  height: 100%;
  .el-icon-location {
    font-size: 14px;
  }
  .current-city,
  .change-city {
    color: $word;
  }
  .change-city {
    background: #f4f4f4;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    margin: 0 4px;
    padding: 0 2px;
    &:hover {
      color: $select;
    }
  }
  .city {
    a {
      margin: 0 4px;
    }
  }
  .entry {
    margin-left: 10px;
    a {
      margin-left: 10px;
    }
    .select {
      color: $select;
    }
  }
}
</style>
