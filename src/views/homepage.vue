<template>
  <div class="homePage">
    <topone></topone>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
import topone from "../components/topone";
import bottom from "../components/bottom";

export default {
  name: "homePage",
  components: {
    topone,
    bottom
  }
};
</script>

<style>
</style>
