<template>
  <div
    class="nav-bar-container"
    :style="{
      background: `linear-gradient(
      to right,
      ${color[0]} 2%,
      ${color[1]} 97%
    )
    ${color[0]}`,
    }"
  >
    <h2 class="title">{{ title }}</h2>
    <ul>
      <li
        v-for="(item, i) in type"
        :key="i"
        @mouseenter="handleEnter(item)"
        :class="{ active: item.active }"
      >
        {{ item.title }}
      </li>
    </ul>
    <p v-if="isShowAll" class="all">全部></p>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: Array,
      default: () => ["rgb(250,60,104)", "rgb(254,70,77)"],
    },
    title: {
      type: String,
      default: "",
    },
    type: {
      type: Array,
      dafeult: () => [],
    },
    isShowAll: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleEnter(data) {
      if (!data.active) {
        this.$emit("hover", data);
      }
    },
  },
};
</script>

<style lang="scss">
.nav-bar-container {
  width: 1190px;
  height: 45px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 10px;
  color: #fff;
  font-size: 14px;
  .title {
    font-size: 18px;
    letter-spacing: 1.5px;
    margin-left: 13px;
    margin-right: 10px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  ul {
    display: flex;
    width: 1020px;
    li {
      margin-right: 8px;
      padding: 0 5px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      position: relative;
      &.active::after {
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        content: " ";
        display: block;
        width: 2px;
        height: 0;
        top: 37px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
  p {
    cursor: pointer;
  }
}
</style>
