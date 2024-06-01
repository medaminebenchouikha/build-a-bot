<!-- eslint-disable max-len -->
<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
        <template v-slot:collapse>&#x25B2; Hide</template>
        <template v-slot:expand>&#x25BC; Show</template>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.imageUrl" alt="part" />
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.imageUrl" class="rotate-left" alt="part" />
            <img :src="selectedRobot.torso.imageUrl" alt="part" />
            <img :src="selectedRobot.rightArm.imageUrl" class="rotate-right" alt="part" />
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.imageUrl" alt="part" />
          </div>
        </div>
      </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    </div>
    <div class="top-row">
      <div class="robot-name">
        {{ selectedRobot.head.title }}
        <span class="sale" v-if="selectedRobot.head.onSale">Sale!</span>
      </div>
      <PartSelector :parts="availableParts.heads" position="top" @partSelected="part => selectedRobot.head = part" />
    </div>
    <div class="middle-row">
      <PartSelector :parts="availableParts.arms" position="left" @partSelected="part => selectedRobot.leftArm = part" />
      <PartSelector :parts="availableParts.torsos" position="center"
        @partSelected="part => selectedRobot.torso = part" />
      <PartSelector :parts="availableParts.arms" position="right"
        @partSelected="part => selectedRobot.rightArm = part" />
    </div>
    <div class="bottom-row">
      <PartSelector :parts="availableParts.bases" position="bottom" @partSelected="part => selectedRobot.base = part" />
    </div>
  </div>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td>{{ robot.head.title }}</td>
          <td class="cost">{{ toCurrency(robot.cost) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import parts from '../data/parts';
import CollapsibleSection from '../shared/CollapsibleSection.vue';
import { toCurrency } from '../shared/formatter';
import PartSelector from './PartSelector.vue';

const availableParts = parts;
const cart = ref([]);

onMounted(() => console.log('onMonted executed!'));

const selectedRobot = ref({
  head: {},
  leftArm: {},
  torso: {},
  rightArm: {},
  base: {},
});

const addToCart = () => {
  const robot = selectedRobot.value;
  const cost =
    robot.head.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost;
  cart.value.push({ ...robot, cost });
};

</script>

<style scoped>
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 270px;
  height: 270px;
  padding: 5px;
}

.preview-content {
  border: 1px solid #999;
}

.preview img {
  width: 70px;
  height: 70px;
}

.rotate-right {
  transform: rotate(90deg);
}

.rotate-left {
  transform: rotate(-90deg);
}

.top-row {
  display: flex;
  justify-content: space-around;
}

.middle-row {
  display: flex;
  justify-content: center;
}

.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.robot-name {
  position: absolute;
  top: -25px;
  width: 100%;
  text-align: center;
}

.sale-border {
  border: 3px solid red;
}

.sale {
  color: red;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  width: 270px;
  padding: 3px;
  font-size: 16px;
}

td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}
</style>
