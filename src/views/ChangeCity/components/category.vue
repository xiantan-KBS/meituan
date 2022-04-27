<template>
  <div class="filter-container">
    <dl class="item" v-for="(it, i) in list" :key="i" :id="`city-${it.value}`">
      <dt>{{ it.value }}</dt>
      <div>
        <dd v-for="item in it.cityList" :key="item.id" @click="handleJump(item.city)">{{ item.city }}</dd>
      </div>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["list"],
  methods:{
    handleJump(data){
      this.$store.commit('aboutCity/setCurCity',data);
      this.$store.dispatch('aboutCity/fetchHotCity');
      this.$router.push('/default');
    }
  }
};
</script>

<style lang="scss">
.filter-container {
  .item {
    padding: 13px 30px 13px 10px;
    border-radius: 10px;
    transition: background-color 500ms;
    dt {
      box-sizing: border-box;
      vertical-align: top;
      padding-top: 10px;
      display: inline-block;
      text-align: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #222222;
      background: #ffd000;
    }
    div {
      display: inline-block;
      max-width: 1065px;
      dd {
        margin: 10px 20px;
        color: #666;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        &:hover{
          color: #222;
        }
      }
    }
    &:hover{
      background: #f8f8f8;
    }
  }
}
</style>
