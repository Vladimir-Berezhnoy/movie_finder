<template>
  <section class="movies">
    <h2 class="movies-title">Movies:</h2>
    <div class="movies-search">
      <el-input
        v-model="search"
        placeholder="What will you look for?"
        class="input-with-select"
        @keyup.enter="searchFunc()"
      >
        <template #append>
          <el-button :icon="Search" @click="searchFunc()" />
        </template>
      </el-input>
    </div>
    <div class="movies-list" v-loading="loading" v-if="data !== null">
      <div class="movies-item" v-for="(item, index) in data" :key="index" @click="currentItem = item">
        <img :src="item.Poster" alt="poster" width="300" height="420" />
        <div class="movies-item-container">
          <h4 class="movies-item-title">{{ item.Title }}</h4>
          <div class="movies-item-description-container">
            <p class="movies-item-description movies-item-year">
              Year: {{ item.Year }}
            </p>
            <p class="movies-item-description movies-item-id">
              imdbID: {{ item.imdbID }}
            </p>
          </div>
        </div>
      </div>
      <DetailComponent :item="currentItem" @is-modal="currentItem = {}"/>
    </div>
    <el-pagination
      layout="prev, pager, next"
      @current-change="paginate"
      :total="total"
      :background="true"
    />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import { Search } from "@element-plus/icons-vue";
import { posterStore } from "../store/store";
import { ElNotification } from "element-plus";
import DetailComponent from "./DetailComponent.vue";

const search = ref("");
const data = ref(null);
const total = ref(null);
const store = posterStore();
const loading = ref(true)
const currentItem = ref({});

onMounted(function () {
  store.getAllPosts().then((res) => {
    loading.value = false;
    data.value = res.data.Search;
    total.value = +res.data.totalResults;
  });
});

async function searchFunc() {
  store.getPostByName(search.value).then((res) => {
    if (res.data.Error) {
      ElNotification({
        title: "Warning",
        message: `${res.data.Error}`,
        type: "warning",
      });
    } else {
      router.push({
        name: "search",
        query: { name: search.value },
      });
      console.log(res.data);
    }
  });
}

async function paginate(e) {
  loading.value = true;
  store.getAllPosts(e).then((res) => {
    loading.value = false;
    data.value = res.data.Search;
  });
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.movies {
  padding: 20px 40px 50px;
  min-height: calc(100vh - (80px + 20px + 50px));
  &-title {
    font-size: 48px;
    text-align: left;
    margin-bottom: 32px;
  }
  &-search {
    width: 560px;
    margin-bottom: 46px;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 40px;
  }
  &-item {
    width: 300px;
    background-color: #141414;
    &-container {
      height: 64px;
      padding: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &-description-container {
      display: flex;
      justify-content: space-between;
    }
  }
}

.el-pagination {
  justify-content: center;
}
</style>
