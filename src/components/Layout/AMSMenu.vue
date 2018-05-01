<template>
  <div class="menu mt-3">

    <div class="container-fluid">
      <div>
        <div class="float-right">
          <nav class="nav nav-pills justify-content-end">
            <router-link to="/" class="nav-link" :class="{active: $route.name === 'Home'}">
            <span class="linklabel">
              Home
            </span>
            </router-link>
            <router-link to="/complaints" class="nav-link" :class="{active: $route.name === 'Complaints'}">
            <span class="linklabel">
              Over IoT
            </span>
            </router-link>
          </nav>
        </div>
        <div class="d-flex justify-content-center">
          <geo-search v-show="$route.name === 'Home'" class="geo-search" :aria-disabled="true"></geo-search>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>

</template>

<script>
import GeoSearch from '../Home/GeoSearch'
export default {
  components: {GeoSearch}
}
</script>

<style lang="scss" scoped>
@import "~stijl/dist/scss/ams-colorpalette";

.menu {
  background-color: $ams-lichtgrijs;
}

.geo-search {
  background-color: white;
  width: 75%;
}
</style>
