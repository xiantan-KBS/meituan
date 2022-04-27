<template>
  <div class="products-container">
    <div class="sort">
      <a
        href="javascript:void(0)"
        v-for="it in sortList"
        :key="it.id"
        :class="{ active: curActive === it.id }"
        @click="handleSelect($event, it)"
        >{{ it.name }}</a
      >
    </div>
    <div class="products-list">
      <Item
        v-for="(it, i) in products"
        :key="it.itemId"
        :meta="it"
        :index="i"
      />
    </div>
  </div>
</template>

<script>
import { getProducts } from "@/api/default";
// getProducts().then(r=>console.log(r));
import { mapState } from "vuex";
import Item from "./item.vue";
export default {
  components: {
    Item,
  },
  data() {
    return {
      value: 3.7,
      count: 0,
      priceSort: "价格排序",
      curActive: "default",
    };
  },
  computed: {
    ...mapState("goods", ["products"]),
    sortList() {
      return [
        {
          name: "智能排序",
          id: "default",
          active: true,
        },
        {
          name: this.priceSort,
          id: "price",
          active: false,
        },
        {
          name: "人气最高",
          id: "popularity",
          active: false,
        },
        {
          name: "评价最高",
          id: "assess",
          active: false,
        },
      ];
    },
  },
  created() {
    this.$store.dispatch("goods/fetchProducts");
  },
  methods: {
    handleSelect(event, e) {
      if (e.id !== "price") {
        this.curActive = e.id;
        this.priceSort = "价格排序";
      } else {
        this.curActive = e.id;
        this.count++;
        if (this.count % 2 === 1) {
          event.target.classList.remove("tall");
          event.target.classList.add("low");
          // event.target.className = "low";
          this.priceSort = "价格最低";
        } else {
          event.target.classList.remove("low");
          event.target.classList.add("tall");
          // event.target.className = "tall";
          this.priceSort = "价格最高";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.products-container {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  //   color: #333;
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
  .sort {
    padding: 15px 20px 2px;
    a {
      display: inline-block;
      width: 96px;
      color: #666;
      &.active {
        color: #222;
      }
      &.low {
        &::before {
          border-bottom-color: #222 !important;
        }
      }
      &.tall {
        &::after {
          border-top-color: #222 !important;
        }
      }
      &:nth-of-type(2) {
        position: relative;
        &::before {
          width: 0;
          height: 0;
          content: "";
          border: 4px solid #ccc;
          border-color: transparent transparent #ccc;
          position: absolute;
          right: 28px;
          top: 2px;
        }
        &::after {
          width: 0;
          height: 0;
          content: "";
          border: 4px solid #ccc;
          border-color: #ccc transparent transparent;
          position: absolute;
          right: 28px;
          top: 12px;
        }
      }
    }
  }
  .products-list {
    padding: 11px 20px;
  }
}
</style>
