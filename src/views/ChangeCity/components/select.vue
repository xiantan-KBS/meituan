<template>
  <div class="select-container" @click="handleSpread" :disabled="disabled==='城市'">
    <p>{{ value }}</p>
    <i class="el-icon-caret-bottom"></i>
    <div class="address-area" ref="select" :style="{display: isShow?'block':'none'}">
      <p>{{ title }}</p>
      <div class="item-area">
        <span
          v-for="it in data"
          :key="it"
          @click="handleActive($event, it)"
          :class="{ active: isActive === it }"
          >{{ it }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value", "title", "data",'isShow','disabled'],
  data() {
    return {
      isActive: "",
    };
  },
  methods: {
    handleSpread(e) {
      e.stopPropagation();
     this.$emit('hidden',true);
    },
    handleActive(e, data) {
      e.stopPropagation();
      this.isActive = data;
      this.$emit("changeArea", data,()=>{
        this.$refs.select.style.display = 'none';
      });
      
    },
    showSelect() {
      this.$emit('hidden',false);
    },
  },
  created() {
    document.addEventListener("click", this.showSelect);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.showSelect);
  },
};
</script>

<style lang="scss" scoped>
.select-container {
  padding: 10px 0 10px 10px;
  cursor: pointer;
  border-radius: 4px;
  width: 150px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  position: relative;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &[disabled]{
    cursor: not-allowed;
  }
  .el-icon-caret-bottom {
    width: 30px;
  }
  .address-area {
    display: none;
    position: absolute;
    cursor: default;
    top: 45px;
    left: 0;
    width: 264px;
    height: 375px;
    padding: 20px 0 20px 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    z-index: 10;
    &::before {
      content: "";
      position: absolute;
      top: -7px;
      left: 26px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #e5e5e5;
      border-top: 0;
    }
    &::after {
      content: "";
      position: absolute;
      top: -4px;
      left: 26px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #fff;
      border-top: 0;
    }
    p {
      font-size: 16px;
      margin-bottom: 11px;
      color: #ccc;
    }
    .item-area {
      display: flex;
      height: 100%;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
      span {
        cursor: pointer;
        font-size: 12px;
        color: #666;
        display: inline-block;
        box-sizing: border-box;
        height: 20px;
        line-height: 20px;
        padding: 1px 8px;
        margin: 6px 38px 0 0;
        &:hover{
            background: #f4f4f4;
            border-radius: 10px;
        }
        &.active {
          background: linear-gradient(to bottom right, #ffd000, #ffbd00);
          border-radius: 10px;
          color: #222222;
        }
      }
    }
  }
}
</style>
