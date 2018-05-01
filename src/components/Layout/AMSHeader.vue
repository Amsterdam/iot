<template>
  <div class="container-fluid mt-2">
    <header>
      <img class="logo" src="../../../static/logo-short.svg">
      <h2><b>{{title}}</b></h2>
    </header>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style lang="scss" scoped>
/*margin-left: -18px;*/
.logo {
  height: 45px;
  margin-right: 15px;
  float: left;
}
</style>
