<template>
  <div class="crumb-container">
    <router-link to="/default"
      >{{ $store.state.aboutCity.curCity }}美团</router-link
    >
    <i class="el-icon-arrow-right"></i>
    <router-link :to="{ name: 'goods', params: { a: $route.params.a } }"
      >{{ $store.state.aboutCity.curCity }}{{ $route.params.a }}</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.crumb-container{
    color: #222;
    margin: 10px 0;
    font-size: 12px;
}
</style>
