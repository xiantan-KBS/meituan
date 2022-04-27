<template>
  <div class="page-container">
    <a @click="handlePage(curPage - 1)" :class="{ disabled: curPage === 1 }"
      ><i class="el-icon-arrow-left"></i
    ></a>
    <a
      v-for="it in maxPage"
      :key="it"
      :class="{ active: curPage === it }"
      @click="handlePage(it)"
      >{{ it }}</a
    >
    <a @click="handlePage(curPage + 1)" :class="{ disabled: curPage === maxPage }"
      ><i class="el-icon-arrow-right"></i
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    maxPage: {
      type: Number,
      default: 5,
    },
    totalPage: {
      type: Number,
      default: 5,
    },
    limit: {
      type: Number,
      default: 30,
    },
    curPage: {
      type: Number,
      default: 3,
    },
  },
  methods: {
    handlePage(n) {
      if (n < 1) {
        n = 1;
      }
      if (n > this.totalPage) {
        n = this.totalPage;
      }
      this.$emit("changePage", n);
    },
  },
};
</script>

<style lang="scss">
.page-container {
  margin: 40px auto 0;
  //   width: 600px;
  text-align: center;
  .el-icon-arrow-left,
  .el-icon-arrow-right {
    font-weight: bold;
  }
  .disabled {
    cursor: not-allowed;
    background: rgba(0,0,0,.2);
    opacity: .3;
  }
  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    padding: 5px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-right: 8px;
    cursor: pointer;
    &.active {
      background: #ffc300;
      color: #fff;
    }
    &:hover{
        color: inherit;
    }
  }
}
</style>
