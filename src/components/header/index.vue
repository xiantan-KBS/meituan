<template>
    <div class="m-header">
            <TopBar />
            <div class="bg">
              <SearchBar />
            </div>
    </div>
</template>

<script>
import TopBar from './topBar.vue'
import SearchBar from './searchBar.vue'
export default {
  components: {
    TopBar,
    SearchBar
  }
}
</script>
<style lang="scss">
// @import "@/assets/css/public/header/index.scss";
.bg{
  background: #fff;
  padding-bottom: 35px;
}
</style>
