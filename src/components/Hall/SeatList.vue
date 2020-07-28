<template>
  <div class="seatlist">
    <div v-for="(rows, idx) in hall" v-bind:key="idx" class="seatrow">
      <Seat v-for="(seat, idx) in rows" v-bind:key="idx" :seat="seat"> </Seat>
    </div>
  </div>
</template>
<script>
import Seat from "./Seat.vue";

export default {
  name: "SeatList",
  props: {
    hall: Array,
  },
  components: { Seat },
};
</script>
<style>
.seatlist {
  width: 80%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px;
  position: relative;
}
.seatrow {
  margin-top: 5px;
  justify-content: space-between;
  display: flex;
}
</style>
