<template>
  <el-container class="layout-default">
    <el-header height="">
      <MyHeader />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer height="">
      <MyFooter />
    </el-footer>
    <el-backtop target=".layout-default" :bottom="100">
      <div
        style="
           {
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #ffc300;
          }
        "
      >
        top
      </div>
    </el-backtop>
  </el-container>
</template>

<script>
import axios from "axios";
import MyHeader from "@/components/header/index.vue";
import MyFooter from "@/components/footer/index.vue";
export default {
  components: {
    MyHeader,
    MyFooter,
  },
  created() {
    window.addEventListener(
      "load",
      () => {
        console.log(window);
        if (localStorage.token) {
          axios
            .get("http://study.duyiedu.com/api/user/profile", {
              headers: {
                Authorization: "Bearer " + localStorage.token,
              },
            })
            .then((r) => {
              if (r.data.code === 0) {
                this.$store.commit("userInfo/setUseName", r.data.data.loginId);
                this.$store.commit(
                  "userInfo/setNickname",
                  r.data.data.nickname
                );
              }
            });
        }
      },
      false
    );
  },
  // mounted(){
  //   window.addEventListener('scroll',()=>{
  //     console.log(1)
  //   })
  // }
};
</script>

<style lang="scss">
@import "@/styles/var.scss";
.el-header,
.el-main,
.el-footer {
  width: 1190px;
  margin: 0 auto;
  padding: 0 !important;
  overflow: unset !important;
}
.el-header {
  background: #f8f8f8;
  color: $topword;
  width: 100%;
  font-size: 12px;
}
.layout-default {
  -webkit-font-smoothing: antialiased;
  font-family: "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue",
    "MIcrosoft YaHei", sans-serif !important;
  background: linear-gradient(rgba(0, 0, 0, 0.1) 10%, #f8f8f8 35%), #f8f8f8;
  scroll-behavior: smooth;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
}
</style>
