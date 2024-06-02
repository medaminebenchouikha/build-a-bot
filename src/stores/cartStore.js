import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const lastRobotCost = ref(0);
  // eslint-disable-next-line no-return-assign, no-param-reassign
  const cartTotal = computed(() => cart.value.reduce((prev, cur) => prev += cur.cost, 0));

  return { cart, lastRobotCost, cartTotal };
});
