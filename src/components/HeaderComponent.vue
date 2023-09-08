<template>
  <header>
    <nav>
      <div class="logo">Logo</div>
      <div class="links">
        <a href="/">Home</a>
        <a href="/search/">Search</a>
        <a href="/add">Add movie</a>
      </div>
    </nav>
  </header>
</template>

<script setup>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  background-color: $--el-color-primary-light-7;
  position: fixed;
  width: 100vw;
  height: 80px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 1;
}

nav {
  color: $--primary-text;
  display: flex;
  gap: 120px;
}

.links {
  display: flex;
  align-items: center;
  gap: 40px;
}
</style>
