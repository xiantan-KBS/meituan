<template>
  <div class="province-container">
    <div class="provice-box">
      <h2>按省份选择：</h2>
      <Select
        title="省份"
        :value="curProvince"
        @changeArea="changeProvince"
        :data="procinceData"
        :isShow="provinceActive"
        @hidden="phidden"
      />
      <Select
        title="城市"
        :value="curCity"
        @changeArea="changeCity"
        :data="cityData"
        :isShow="cityActive"
        :disabled="isDisabled"
        @hidden="chidden"
      />
    </div>
    <div class="search">
      <h2>直接搜索：</h2>
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入城市中文或拼音"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import Select from "./select.vue";
import { mapState } from "vuex";
export default {
  components: {
    Select,
  },
  data() {
    return {
      curProvince: "省份",
      provinceActive: false,
      cityActive: false,
      curCity: "城市",
      isDisabled: "城市",
      value: [],
      options:['asdsfd',2,3,4,5,6,7,8,9],
      loading:false,

    };
  },
  computed: {
    ...mapState("aboutCity", ["allCity"]),
    procinceData() {
      return [
        ...new Set(
          this.allCity.map((it) => {
            let pro = it.city.substr(0, 2).trim();
            if (pro == "内蒙") {
              pro = "内蒙古";
            } else if (pro == "黑龙") {
              pro = "黑龙江";
            }
            return pro;
          })
        ),
      ];
    },
    cityData() {
      if (this.curProvince === "省份") {
        return [];
      }
      return [
        ...new Set(
          this.allCity
            .filter((it) => it.city.includes(this.curProvince))
            .map((it) => {
              let city = it.city.substr(3).trim();
              const result = city.split(" ");
              if (result.length === 2) {
                return result[1];
              }
              return city;
            })
        ),
      ];
    },
  },
  created() {
    this.$store.dispatch("aboutCity/fetchCity");
  },
  methods: {
    changeProvince(e, callback) {
      this.curProvince = e;
      callback();
      this.isDisabled = "";
    },
    changeCity(e) {
      this.$store.commit("aboutCity/setCurCity", e);
      this.$store.dispatch("aboutCity/fetchHotCity");
      this.$router.push("/default");
    },
    phidden(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    chidden(flag) {
      if (!this.isDisabled) {
        this.cityActive = flag;
        if (flag) {
          this.provinceActive = false;
        }
      }
    },
    remoteMethod(){
      console.log('远程搜索');
    }
  },
};
</script>

<style lang="scss">
.province-container {
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  color: #222222;
  .provice-box {
    display: flex;
    align-items: center;
    margin-right: 80px;
    h2 {
      line-height: 40px;
      height: 40px;
    }
    .select-container {
      margin: 0 10px;
    }
  }
  .search {
    display: flex;
    align-items: center;
    h2 {
      line-height: 40px;
      height: 40px;
      width: 130px;
    }
    input{
    outline: none;
    }
    ::-webkit-input-placeholder{
      color: #666;
    }
  }
}
</style>
