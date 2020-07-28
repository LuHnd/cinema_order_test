<template>
  <div>
    <div class="flex">
      <SeatList type="normal" :hall="this.$store.state.hall"></SeatList>
      <Cart :cart="this.$store.state.cart"></Cart>
    </div>
  </div>
</template>

<script>
import SeatList from "./Hall/SeatList.vue";
import Cart from "./Cart/Cart.vue";
export default {
  name: "PurchasePage",
  components: { SeatList, Cart },
  created() {
    this.$store.dispatch("generateHall");
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
</style>
