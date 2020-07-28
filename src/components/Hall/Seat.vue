<template>
  <div
    v-bind:class="{
      sold: seat.sold,
      seat: true,
      select: seat.selected,
      cartHover: seat.cartHover,
    }"
    @click="selectSeat"
  >
    <div class="seat-info" v-if="!seat.sold">
      <p>Ряд: {{ seat.row + 1 }}</p>
      <p>Место: {{ seat.col + 1 }}</p>
      <p>Цена: {{ seat.price }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Seat",
  props: {
    seat: Object,
  },
  methods: {
    selectSeat() {
      this.$store.dispatch("selectSeat", this.seat);
    },
  },
};
</script>
<style scoped>
.seat {
  width: 100%;
  margin: 0 5px;
  height: 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
}
.seat-info {
  pointer-events: none;
  position: absolute;
  opacity: 0;
  background-color: #fff;
  bottom: calc(100%);
  border-radius: 5px;
  width: 5rem;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.seat:hover,
.cartHover {
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
}
.seat:hover .seat-info,
.cartHover .seat-info {
  opacity: 1;
}
.sold {
  background: #00000036;
}
.select {
  background: #1aae1a78;
}
</style>
