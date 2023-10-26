<template>
  <button
    :style="{
      width: width || '10.416vw',
      height: height || '2.604vw',
      'font-size': fontSize || '0.729vw',
      'border-radius': borderRadius || '1.041vw',
      pointerEvents: disabled ? 'none' : 'auto',
    }"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
}>();
</script>

<style lang="scss">
button {
  display: block;
  text-align: center;
  font-weight: 300;
  background-color: transparent;
  border: 1px solid $blue;
  color: $blue;
  min-width: 6.25vw;
  border-radius: 1.041vw;
  cursor: pointer;

  &:hover {
    background-color: $blue;
    border: 1px solid $white;
    color: $white;
  }
}
</style>
