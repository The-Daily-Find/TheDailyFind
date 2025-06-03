<template>
  <el-row class="filter-container" align="middle" justify="space-between">
    <el-row style="gap: 1em">
      <el-text class="poppins-bold" style="color: var(--color-green); font-size: 20px"
        >Filter by:</el-text
      >
      <el-dropdown trigger="click" placement="bottom">
        <el-button round class="poppins-semibold card-button" size="large">
          <el-text class="poppins-bold"> Ratings </el-text>
          <el-icon style="margin-left: 5px">
            <ArrowDown />
          </el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="filterProductsByRatings(5)">
              <el-text> 5 </el-text>
              <el-icon style="margin-left: 5px">
                <Star />
              </el-icon>
            </el-dropdown-item>
            <el-dropdown-item @click="filterProductsByRatings(4)">
              <el-text> 4 </el-text>
              <el-icon style="margin-left: 5px">
                <Star />
              </el-icon>
            </el-dropdown-item>
            <el-dropdown-item @click="filterProductsByRatings(3)">
              <el-text> 3 </el-text>
              <el-icon style="margin-left: 5px">
                <Star />
              </el-icon>
            </el-dropdown-item>
            <el-dropdown-item @click="filterProductsByRatings(2)">
              <el-text> 2 </el-text>
              <el-icon style="margin-left: 5px">
                <Star />
              </el-icon>
            </el-dropdown-item>
            <el-dropdown-item @click="filterProductsByRatings(1)">
              <el-text> 1 </el-text>
              <el-icon style="margin-left: 5px">
                <Star />
              </el-icon>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="click" placement="bottom">
        <el-button round class="poppins-semibold card-button" size="large">
          <el-text class="poppins-bold"> Category </el-text>
          <el-icon style="margin-left: 5px">
            <ArrowDown />
          </el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="filterProductsByCategory(`men's clothing`)"
              >Men's Clothing</el-dropdown-item
            >
            <el-dropdown-item @click="filterProductsByCategory(`women's clothing`)"
              >Women's Clothing</el-dropdown-item
            >
            <el-dropdown-item @click="filterProductsByCategory(`jewelery`)"
              >Jewelery</el-dropdown-item
            >
            <el-dropdown-item @click="filterProductsByCategory(`electronics`)"
              >Electronics</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-text
        class="poppins-semibold"
        style="font-size: 16px; cursor: pointer"
        @click="getProducts()"
        >Clear</el-text
      >
    </el-row>

    <el-dropdown trigger="click" placement="bottom-start">
      <el-button round class="poppins-semibold card-button" size="large">
        <el-text class="poppins-bold"> Sort by </el-text>
        <el-icon style="margin-left: 5px">
          <ArrowDown />
        </el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="sortProductsByCategory">Category</el-dropdown-item>
          <el-dropdown-item @click="sortProductsByRatings">Ratings</el-dropdown-item>
          <el-dropdown-item @click="sortProductsByPrice('Low')"
            >Price (low to high)</el-dropdown-item
          >
          <el-dropdown-item @click="sortProductsByPrice('High')"
            >Price (high to low)</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-row>
</template>

<script setup lang="ts">
import {
  sortProductsByPrice,
  sortProductsByCategory,
  sortProductsByRatings,
  filterProductsByRatings,
  filterProductsByCategory,
  getProducts,
} from '@/api/actions/product.actions'
</script>

<style scoped>
.filter-container {
  width: 75%;
  padding: 2em 0em;
}

.card-button {
  border: none;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
}
</style>
