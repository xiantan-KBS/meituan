<template>
  <div class="filter-box">
    <div class="label">
      <h3>{{type}}</h3>
      <a href="">全部</a>
    </div>
    <div class="category">
      <Select :content="item" v-for="item in list" :key="item.id"/>
    </div>
  </div>
</template>

<script>

import Select from "./select.vue";

// getArea().then(r=>console.log(r))
export default {
  components: {
    Select,
  },
  props:['list',"type"]
};
</script>

<style lang="scss" scoped>
.filter-box {
  padding: 15px 20px 0;
  display: flex;
  .label {
    display: flex;
    line-height: 22px;
    height: 22px;
    width: 160px;
    font-size: 14px;
    h3 {
      width: 80px;
    }
    a {
      padding: 0 10px;
      border-radius: 100px;
      background: linear-gradient(to bottom right, #ffd000, #ffbd00);
      color: #222;
    }
  }
  .category{
    padding-bottom: 10px;
    border-bottom: 1px solid #E5E5E5;
    width: 748px;
    height: 28px;
    color: #666;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
