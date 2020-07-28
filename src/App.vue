<template>
  <div id="app">
    <PurchasePage />
  </div>
</template>

<script>
import PurchasePage from "./components/PurchasePage.vue";

export default {
  name: "App",
  components: {
    PurchasePage,
  },
};
</script>

<style>
#app {
  font-family: Arial;
  max-width: 1160px;
  margin: 0 auto;
  padding: 30px 10px;
}

p {
  padding: 0;
  margin: 0;
}
</style>
