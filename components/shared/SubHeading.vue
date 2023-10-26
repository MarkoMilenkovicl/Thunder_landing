<template>
  <h2>
    <span firstPart>{{ firstPart }}</span>
    <span v-if="secondPart" class="changed-color">{{ secondPart }}</span>
    <span v-if="thirdPart">{{ thirdPart }}</span>
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  firstPart?: string;
  secondPart?: string;
  thirdPart?: string;
}>();
</script>

<style lang="scss">
h2 {
  color: $black;
  font-size: 3.125vw;
  font-weight: 300;
  line-height: 4.687vw;
}
.changed-color {
  color: $blue;
}
@media (max-width: 768px) {
  h2 {
    font-size: 6.153vw;
    font-weight: 275;
    line-height: 9.23vw;
  }
}
</style>
