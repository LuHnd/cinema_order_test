<template>
  <div class="CartItem" @mouseenter="enter" @mouseleave="leave">
    <div>
      <p>{{ item.row + 1 }} ряд, {{ item.col + 1 }} место</p>
      <p>Цена: {{ item.price }} грн.</p>
    </div>
    <div class="CartItemDelete" @click="deleteItem">X</div>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    item: Object,
  },
  methods: {
    enter() {
      this.$store.dispatch("HoverCart", this.item);
    },
    leave() {
      this.$store.dispatch("UnHoverCart", this.item);
    },
    deleteItem() {
      this.$store.dispatch("selectSeat", this.item);
      this.$store.dispatch("UnHoverCart", this.item);
    },
  },
};
</script>
<style scoped>
.CartItem {
  padding: 7px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.CartItemDelete {
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
p {
  margin: 5px 0;
}
</style>
