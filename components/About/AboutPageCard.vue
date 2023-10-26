<template>
  <div class="customer-box">
    <img src="~/assets/images/boxLogo.png" alt="" class="box-logo" />
    <p>
      {{ text }}
    </p>
    <h5>{{ name }}</h5>
    <h6>{{ title }}</h6>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  name: string;
  title: string;
}>();
</script>

<style lang="scss">
.box-logo {
  height: 3.125vw;
  width: 10.677vw;
}

.customer-box {
  width: 26.041vw;
  height: 30.729vw;
  border-radius: 1.041vw;
  background: linear-gradient(
    36.11deg,
    #1a7fbf 42.36%,
    rgba(26, 127, 191, 0.1) 110.31%
  );
  padding: 2.083vw;
}
.customer-box p {
  color: $white;
  width: 21.875vw;
  font-size: 0.937vw;
  font-weight: 300;
  line-height: 1.406vw;
  padding: 2.083vw 0;
}
.customer-box h5 {
  font-size: 1.25vw;
  color: $white;
  line-height: 1.875vw;
  font-weight: 300;
}
.customer-box h6 {
  font-size: 0.937vw;
  color: $white;
  line-height: 1.406vw;
  font-weight: 300;
  padding-top: 0.52vw;
}
@media (max-width: 768px) {
  .box-logo {
    height: 10.256vw;
    width: 35.384vw;
  }

  .customer-box {
    width: 91.794vw;
    height: 131.282vw;
    border-radius: 5.128vw;
    background: linear-gradient(
      36.11deg,
      #1a7fbf 42.36%,
      rgba(26, 127, 191, 0.1) 110.31%
    );
    padding: 5.128vw;
  }
  .customer-box p {
    font-size: 4.102vw;
    line-height: 6.153vw;
    width: 81.538vw;
    padding: 7.692vw 0;
  }
  .customer-box h5 {
    font-size: 4.615vw;

    line-height: 6.923vw;
    font-weight: 300;
  }
  .customer-box h6 {
    font-size: 4.102vw;
    color: $white;
    line-height: 6.153vw;
    font-weight: 300;
    padding-top: 2.564vw;
  }
}
</style>
