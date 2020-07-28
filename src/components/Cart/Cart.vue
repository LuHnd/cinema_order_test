<template>
  <div class="Cart">
    <h3 style="text-align: center;">Корзина</h3>
    <div class="CartItemsList">
      <CartItem v-for="(item, idx) in cart" v-bind:key="idx" :item="item"></CartItem>
      <div v-if="!cart.length" style="text-align: center;">
        <p>Корзина пуста</p>
      </div>

      <div v-if="cart.length" style="text-align: center; padding: 20px 0;">
        <p>Итого: {{ cart.reduce(((a,b)=>a+b.price),0) }} грн.</p>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from "./CartItem.vue";
export default {
  name: "Cart",
  components: { CartItem },
  props: {
    cart: Array,
  },
};
</script>
<style scoped>
.Cart {
  width: 20%;
  padding: 20px 10px;
  border: 1px solid;
}
</style>
