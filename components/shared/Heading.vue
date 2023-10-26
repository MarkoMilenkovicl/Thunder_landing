<template>
  <h1>
    <span>{{ firstPart }}</span
    ><span v-if="secondPart" class="changed-color">{{ secondPart }}</span>
    <span v-if="thirdPart">{{ thirdPart }}</span>
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  firstPart: string;
  secondPart?: string;
  thirdPart?: string;
}>();
</script>

<style lang="scss">
h1 {
  color: $black;
  font-size: 5.2083vw;
  font-weight: 250;
  line-height: 7.812vw;
}
.changed-color {
  color: $blue;
}
@media (max-width: 968px) {
  h1 {
    font-size: 8.974vw;
    line-height: 13.461vw;
    font-weight: 250;
  }
}
</style>
