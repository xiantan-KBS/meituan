<template>
  <div class="main-container">
    <el-row>
      <el-col :span="5">
        <Menu />
      </el-col>
      <el-col :span="19">
        <Life />
      </el-col>
    </el-row>
    <el-row :span="24">
      <Movie />
    </el-row>
    <el-row :span="24">
      <House />
    </el-row>
    <el-row :span="24">
      <Recommend />
    </el-row>
    <el-row :span="24">
      <ButtomNav />
    </el-row>
  </div>
</template>

<script>

import Menu from "./components/Menu.vue";
import Life from "./components/Life.vue";
import Movie from "./components/Movie.vue";
import House from "./components/House.vue";
import Recommend from "./components/Recommend.vue";
import ButtomNav from "./components/bottomNav.vue";
export default {
  components: {
    Menu,
    Life,
    Movie,
    House,
    Recommend,
    ButtomNav,
  },
  
};
</script>

<style lang="scss"></style>
