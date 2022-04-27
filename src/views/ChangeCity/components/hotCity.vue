<template>
  <div class="hot-city-container">
      <h2>{{title}}</h2>
      <div class="cityList">
          <span v-for="item in list" :key="item.id" @click="handleJump(item.city)">{{item.city}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:['title','list'],
    methods:{
        handleJump(data){
           this.$store.commit('aboutCity/setCurCity',data);
           this.$router.push('/default');
           this.$store.dispatch('aboutCity/fetchHotCity');
        }
    }
}
</script>

<style lang="scss">
.hot-city-container{
    border-bottom: 1px solid #E5E5E5;
    padding: 30px 0;
    color: #666;
    display: flex;
    h2{
        color: #222222;
    }
    .cityList{
        span{
            cursor: pointer;
            margin: 0 15px;
            padding: 3px 4px;
            font-size: 14px;
            &:hover{
                color: #222222;
            }
        }
    }
}

</style>