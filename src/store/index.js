import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  hall: [],
  cart: [],
  price: 0,
};

const getters = {
  hall: (store) => store.hall,
};

const mutations = {
  SELECT_SEAT(state, { row, col }) {
    state.hall[row][col].selected = !state.hall[row][col].selected;
  },
  CREATE_HALL(state, hall) {
    state.hall = hall;
  },
  ADD_TO_CART(state, item) {
    state.cart = [...state.cart, item];
  },
  REMOVE_FROM_CART(state, item) {
    state.cart = state.cart.filter(
      (cart_item) => cart_item.row != item.row || cart_item.col != item.col
    );
  },
  HOVER_SEAT(state, { row, col }) {
    state.hall[row][col].cartHover = true;
  },
  UNHOVER_SEAT(state, { row, col }) {
    state.hall[row][col].cartHover = false;
  },
};

const actions = {
  selectSeat(context, seat) {
    if (!seat.sold) context.commit("SELECT_SEAT", seat);

    if (seat.selected) {
      context.commit("ADD_TO_CART", seat);
    } else {
      context.commit("REMOVE_FROM_CART", seat);
    }
  },
  generateHall(context) {
    let hall = [],
      rows = 40,
      cols = 20;
    for (let i = 0; i < rows; i++) {
      hall.push([]);
      for (let j = 0; j < cols; j++) {
        hall[i][j] = {
          row: i,
          col: j,
          price: 100,
          sold: !!(Math.random() < 0.5 ? true : false),
          selected: false,
          cartHover: false,
        };
      }
    }
    context.commit("CREATE_HALL", hall);
  },

  HoverCart(context, seat) {
    context.commit("HOVER_SEAT", seat);
  },
  UnHoverCart(context, seat) {
    context.commit("UNHOVER_SEAT", seat);
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
