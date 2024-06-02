<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { useRoute } from 'vue-router';

import { usePartsStore } from '../stores/partsStore';

const partsStore = usePartsStore();

const props = defineProps(['partType', 'id']);
const part = computed(() => partsStore.parts[props.partType].find((prt) => prt.id === +props.id));

// const route = useRoute();
// const { id: partId, partType } = route.params;
// return parts[partType].find((prt) => prt.id === +partId);

</script>
