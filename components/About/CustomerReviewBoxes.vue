<template>
  <section ref="customerBoxesRef" class="customer-review-boxes">
    <div class="customer-boxes__top">
      <AboutPageCard
        name="Bart Hendrix"
        text="We had a running relationship with CodeFlex, so it was not a hard
            sell for us to try out one of their new products, and we never lived
            to regret that decision. Blueprint has helped us expand our business
            exponentially, and we have managed to increase our revenue with our
            business tasks becoming much easier. Their customer support is
            excellent, adn they are always working on new ways to improve the
            experience of using the product, which adds and extra layer of
            satisfaction."
        title="CEO"
      />

      <AboutPageCard
        name="Bart Hendrix"
        text="We had a running relationship with CodeFlex, so it was not a hard
            sell for us to try out one of their new products, and we never lived
            to regret that decision. Blueprint has helped us expand our business
            exponentially, and we have managed to increase our revenue with our
            business tasks becoming much easier. Their customer support is
            excellent, adn they are always working on new ways to improve the
            experience of using the product, which adds and extra layer of
            satisfaction."
        title="CEO"
      />

      <AboutPageCard
        name="Bart Hendrix"
        text="We had a running relationship with CodeFlex, so it was not a hard
            sell for us to try out one of their new products, and we never lived
            to regret that decision. Blueprint has helped us expand our business
            exponentially, and we have managed to increase our revenue with our
            business tasks becoming much easier. Their customer support is
            excellent, adn they are always working on new ways to improve the
            experience of using the product, which adds and extra layer of
            satisfaction."
        title="CEO"
      />
    </div>
    <div class="customer-boxes__bottom">
      <AboutPageCard
        name="Bart Hendrix"
        text="We had a running relationship with CodeFlex, so it was not a hard
            sell for us to try out one of their new products, and we never lived
            to regret that decision. Blueprint has helped us expand our business
            exponentially, and we have managed to increase our revenue with our
            business tasks becoming much easier. Their customer support is
            excellent, adn they are always working on new ways to improve the
            experience of using the product, which adds and extra layer of
            satisfaction."
        title="CEO"
      />
      <AboutPageCard
        name="Bart Hendrix"
        text="We had a running relationship with CodeFlex, so it was not a hard
            sell for us to try out one of their new products, and we never lived
            to regret that decision. Blueprint has helped us expand our business
            exponentially, and we have managed to increase our revenue with our
            business tasks becoming much easier. Their customer support is
            excellent, adn they are always working on new ways to improve the
            experience of using the product, which adds and extra layer of
            satisfaction."
        title="CEO"
      />
      <AboutPageCard
        name="Bart Hendrix"
        text="We had a running relationship with CodeFlex, so it was not a hard
            sell for us to try out one of their new products, and we never lived
            to regret that decision. Blueprint has helped us expand our business
            exponentially, and we have managed to increase our revenue with our
            business tasks becoming much easier. Their customer support is
            excellent, adn they are always working on new ways to improve the
            experience of using the product, which adds and extra layer of
            satisfaction."
        title="CEO"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const customerBoxesRef = ref(null);

onMounted(() => {
  const mm = gsap.matchMedia();
  if (customerBoxesRef.value) {
    gsap.to('.customer-boxes__top', {
      ease: 'linear',
      width: '100%',
      duration: 1.17,
      delay: '2s',
      right: 0,
      scrollTrigger: {
        trigger: '.customer-review-boxes',
        start: 'top center',
        toggleActions: 'play pause resume reverse',
      },
    });
  }
});

onMounted(() => {
  if (customerBoxesRef.value) {
    gsap.to('.customer-boxes__bottom', {
      ease: 'linear',
      width: '100%',
      duration: 1.17,
      delay: '2s',
      left: 0,
      scrollTrigger: {
        trigger: '.customer-review-boxes',
        start: 'top center',
        toggleActions: 'play pause resume reverse',
      },
    });
  }
});

</script>

<style lang="scss">
.customer-review-boxes {
  margin-bottom: 30vw;
}
.customer-boxes__top {
  display: flex;
  gap: 3.125vw;
  position: relative;
  right: -20vw;
  margin-bottom: 3vw;
}

.customer-boxes__bottom {
  display: flex;
  gap: 3.125vw;
  position: relative;
  left: -20vw;
}
@media (max-width: 768px) {
  .customer-review-boxes {
    margin-bottom: 30vw;
  }
  .customer-boxes__top {
    display: flex;
    flex-direction: column;
    gap: 12.82vw;
    position: relative;
    right: -20vw;
    margin-bottom: 12.82vw;
  }

  .customer-boxes__bottom {
    display: flex;
    flex-direction: column;
    gap: 12.82vw;
    position: relative;
    left: -20vw;
  }
}
</style>
