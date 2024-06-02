import { defineStore } from 'pinia';
import { ref } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const usePartsStore = defineStore('parts', () => {
  const parts = ref(null);
  // eslint-disable-next-line no-return-assign, no-param-reassign
  const getParts = async () => {
    const response = await fetch('/api/parts');
    parts.value = await response.json();
  };

  return { parts, getParts };
});
