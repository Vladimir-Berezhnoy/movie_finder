<template>
  <div class="add-movie">
    <h1>Add New Movie</h1>
    <el-form :model="form" label-position="top" @submit="addMovie">
      <el-form-item label="Title">
        <el-input v-model="form.title" required></el-input>
      </el-form-item>
      <el-form-item label="Poster URL">
        <el-input v-model="form.poster" required></el-input>
      </el-form-item>
      <el-form-item label="Director">
        <el-input v-model="form.director" required></el-input>
      </el-form-item>
      <el-form-item label="Year">
        <el-input v-model="form.year" required></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">Add Movie</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
// Import any necessary data or functions here
import { reactive } from "vue";

const form = reactive({
  title: "",
  poster: "",
  director: "",
  year: "",
});

const addMovie = () => {
  // Implement logic to add a new movie to the store
};
</script>

<style scoped>
/* Add your custom CSS styles here */
.add-movie {
  padding: 20px;
  min-height: calc(100vh - (80px + 20px + 20px));
  width: 50%;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
