<template>
  <div class="search-bar-container" @click="handleClick">
    <div class="left">
      <router-link :to="{ name: 'main' }">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
          alt="美团"
        />
      </router-link>
    </div>
    <div class="right" >
      <!-- 搜索部分 -->
      <div class="search" id="searchForm">
        <input
          type="text"
          id="searchInput"
          placeholder="搜索商家或地址"
          v-model="keyword"
          @keypress.enter="handleJump"  
        />
        <el-button type="primary" icon="el-icon-search" @click="handleJump"></el-button>
      </div>
      <ul class="list" ref="hotList">
        <li v-for="(item,i) in hotWord" :key="i">
          <router-link :to="{ name: 'goods', params:{a:item} }">{{item}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
      hotWord:[],
    };
  },
  watch: {
    keyword: {
      async  handler(val) {
        if (!val) {
          this.hotWord =null;
          return;
        }
        var val = val.trim();
        // const res = await axios.get('/ptapi/suggest',{
        //   params:{
        //     keyword:val,
        //   }
        // });
        //this.hotWord = res.data.data.suggestItems;
        const res = await axios.get('http://api.duyiedu.com/api/meituan/header/search.json?appkey=xioabai_1647937979681',{
          params:{
            keyword:val,
          }
        });
        
        this.hotWord = res.data.data.list;
      },
      immediate:true,
    },
    $route:{
      handler(val){
        // console.log(val)
        if (val.name === 'goods') {
          this.keyword = val.params.a;
        }
      }
    }
  },
  methods:{
    handleClick(e){
      const dom = e.target.tagName.toLowerCase();
      if(dom === 'input'){
        this.$refs.hotList.style.display = 'block';
      }else{
        this.$refs.hotList.style.display = 'none';
      }
     
    },
    handleJump(){
      if (!this.keyword) {
        return;
      }else{
        this.$router.push({name:"goods",params:{a:this.keyword}}).catch(err=>console.log(err));
        this.$refs.hotList.style.display = 'none';

      }
    }
  },
};
</script>

<style lang="scss">
@import "@/styles/var.scss";
.search-bar-container {
  width: 1190px;
  margin: 0 auto 35px;
  padding: 20px 20px;
  display: flex;
  .left {
    padding-top: 15px;
    width: 320px;
    img {
      width: 126px;
      height: 46px;
    }
  }
  .right {
    position: relative;
    .search {
      margin-top: 16px;
      border: 1px solid $primary;
      box-sizing: border-box;
      border-radius: 4px;
      width: 552px;
      position: relative;
      input {
        border: none;
        outline: none;
        border-radius: 4px;
        box-sizing: border-box;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s;
        width: 462px;
        &::placeholder {
          color: $topword;
        }
      }
      .el-button {
        outline: none;
        width: 88px;
        box-sizing: border-box;
        height: 40px;
        background: #ffc300;
        border: none;
        cursor: pointer;
        border-radius: 0px;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        i {
          font-weight: bold;
        }
      }
      .el-button--primary {
        color: #fff;
      }
    }
    .list {
      width: 462px;
      position: absolute;
      display: none;
      border: 1px solid #e5e5e5;
      border-top: none;
      background: #fff;
      z-index: 999;
      box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      color: $topword;
      font-size: 12px;
      text-align: left;
      a {
        padding: 3px 10px;
        color: $word;
        line-height: 1.6;
        display: block;
        &:hover{
          color:$select;
        }
      }
    }
  }
}
</style>
