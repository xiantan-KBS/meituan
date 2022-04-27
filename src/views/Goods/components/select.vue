<template>
  <div class="select-container">
    <div class="title" @mouseenter="show" @mouseleave="hidden">
      {{ content.title }}
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div class="pop" ref="pop" @mouseenter="cancelHidden" @mouseleave="hidden">
      <h3>{{ content.title }}</h3>
      <div class="item">
        <span v-for="item in content.subList" :key="item.id">{{
          item.name
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  data(){
      return{
          timer:null,
      }
  },
  methods: {
    show() {
      this.$refs.pop.style.display = "block";
    },
    hidden() {
      this.timer = setTimeout(() => {
        this.$refs.pop.style.display = "none";
      }, 100);
    },
    cancelHidden(){
        // console.log(1)
        clearTimeout(this.timer);
    }
  },
};
</script>

<style lang="scss">
.select-container {
  width: 120px;
  height: 100%;
  position: relative;
  .title {
    cursor: pointer;
  }
  .pop {
    display: none;
    min-width: 510px;
    padding: 19px 15px 10px;
    position: absolute;
    top: 30px;
    left: -15px;
    z-index: 1000;
    cursor: auto;
    user-select: text;
    white-space: normal;
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    text-align: left;
    background: #fff;
    box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    h3 {
      font-size: 16px;
      font-weight: normal;
      margin-bottom: 11px;
      color: #ccc;
    }
    >div{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 80px;
        span{
            cursor: pointer;
            height: 20px;
            line-height: 20px;
        }
    }
  }
}
</style>
