<template>
  <div class="setting-container" ref="container">
    <h2>全局设置</h2>
    <div class="await">该页面待开发</div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.setting-container {
  position: relative;
  width: 100%;
  height: 300px;
  border: 1px solid #f8f8f8;
}
 h2 {
    text-align: center;
    font-weight: bold;
  }
  .await{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -75px;
    border: 1px solid #ccc;
    text-align: center;
    height: 150px;
    width: 200px;
    border-radius: 6px;
    line-height: 150px;
    transition: .5s;
    &:hover{
      transform: scale(1.2);
      box-shadow:2px 2px 5px #ccc;
      transform: translate(-50%,-50%),translate(-40px,-30px);
    }
  }
</style>
