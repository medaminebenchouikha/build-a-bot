<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="header">
      <span @click="open = !open" @keydown.enter="open = !open" @keydown.space="open = !open" tabindex="0" role="button"
        aria-expanded="true" v-if="open">
        <slot name="collapse">&#x25B2; Collapse</slot>
      </span>
      <span @click="open = !open" @keydown.enter="open = !open" @keydown.space="open = !open" tabindex="0" role="button"
        aria-expanded="false" v-else>
        <slot name="expand">&#x25BC; Expand</slot>
      </span>
    </div>
    <slot v-if="open">
      <div>DefaultContent</div>
    </slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(true);
</script>

<style scoped>
.header {
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
  font-size: 22px;
}
</style>
