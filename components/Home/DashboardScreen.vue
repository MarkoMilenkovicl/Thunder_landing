<template>
  <section class="dashboard-content">
    <div class="text-content">
      <p class="text-content__p1">
        As a modern business solution, Enterprise Blueprint sets out to help
        small retailers streamline their business, with all their needs and
        expectations being met in one convenient place.
      </p>
      <div class="dashboard-mobile">
        <img
          class="dashboard-mobile__img"
          src="~/assets/images/dashboardMobile.png"
          alt="dashboard-img"
        />
      </div>
      <h5 class="text-content__h5">Speed up, solve, satisfy.</h5>
      <p class="text-content__p2">
        A tool for resourceful entrepreneurs who wish to simplify their
        work-related processes, helping them and their businesses grow, in a
        professional and dependable manner.
      </p>
    </div>

    <div class="animation-content">
      <div ref="dashboardRef" class="bluprint__box">
        <img
          class="bluprint-logo__box"
          src="~/assets/images/bluprintBoxLogo.svg"
          alt="bluprint-img"
        />
        <img
          id="bluprint-tagline"
          src="~/assets/images/dashboardHome.svg"
          alt="bluprint dashboard image"
          class="bluprint-img__dashboard"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const dashboardRef = ref(null);

onMounted(() => {
  const mm = gsap.matchMedia();
  if (dashboardRef.value) {
    mm.add('(min-width: 3200px) ', () => {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: dashboardRef.value,
          pin: true,
          scrub: 1.5,
          start: '-=100%',
          end: '+=80%',
        },
      });

      growTl.to(dashboardRef.value, {
        duration: 1,
        scale: '1.86',
      });
      growTl.to('#bluprint-tagline', {
        duration: 1,
        delay: -0.7,
        opacity: 1,
        scale: 1,
      });
    });

    mm.add('(min-width: 2901px) and (max-width:3200px)', () => {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: dashboardRef.value,
          pin: true,
          scrub: 1.5,
          start: '-=100%',
          end: '+=77%',
        },
      });

      growTl.to(dashboardRef.value, {
        duration: 1,
        scale: '1.86',
      });
      growTl.to('#bluprint-tagline', {
        duration: 1,
        delay: -0.7,
        opacity: 1,
        scale: 1,
      });
    });

    mm.add('(min-width: 2701px) and (max-width:2900px)', () => {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: dashboardRef.value,
          pin: true,
          scrub: 1.5,
          start: '-=100%',
          end: '+=69%',
        },
      });

      growTl.to(dashboardRef.value, {
        duration: 1,
        scale: '1.86',
      });
      growTl.to('#bluprint-tagline', {
        duration: 1,
        delay: -0.7,
        opacity: 1,
        scale: 1,
      });
    });

    mm.add('(min-width: 2501px) and (max-width:2700px)', () => {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: dashboardRef.value,
          pin: true,
          scrub: 1.5,
          start: '-=100%',
          end: '+=60%',
        },
      });

      growTl.to(dashboardRef.value, {
        duration: 1,
        scale: '1.86',
      });
      growTl.to('#bluprint-tagline', {
        duration: 1,
        delay: -0.7,
        opacity: 1,
        scale: 1,
      });
    });

    mm.add('(min-width: 2201px) and (max-width:2500px)', () => {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: dashboardRef.value,
          pin: true,
          scrub: 1.5,
          start: '-=100%',
          end: '+=53%',
        },
      });

      growTl.to(dashboardRef.value, {
        duration: 1,
        scale: '1.86',
      });
      growTl.to('#bluprint-tagline', {
        duration: 1,
        delay: -0.7,
        opacity: 1,
        scale: 1,
      });
    });

    mm.add('(min-width: 1751px) and (max-width:2200px)', () => {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: dashboardRef.value,
          pin: true,
          scrub: 1.5,
          start: '-=100%',
          end: '+=45%',
        },
      });

      growTl.to(dashboardRef.value, {
        duration: 1,
        scale: '1.86',
      });
      growTl.to('#bluprint-tagline', {
        duration: 1,
        delay: -0.7,
        opacity: 1,
        scale: 1,
      });
    });

    mm.add('(min-width: 1401px) and (max-width:1750px)', () => {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: dashboardRef.value,
          pin: true,
          scrub: 1.5,
          start: '-=100%',
          end: '+=36%',
        },
      });

      growTl.to(dashboardRef.value, {
        duration: 1,
        scale: '1.86',
      });
      growTl.to('#bluprint-tagline', {
        duration: 1,
        delay: -0.7,
        opacity: 1,
        scale: 1,
      });
    });
    mm.add('(min-width: 1101px) and (max-width:1400px)', () => {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: dashboardRef.value,
          pin: true,
          scrub: 1.5,
          start: '-=100%',
          end: '+=31%',
        },
      });

      growTl.to(dashboardRef.value, {
        duration: 1,
        scale: '1.86',
      });
      growTl.to('#bluprint-tagline', {
        duration: 1,
        delay: -0.7,
        opacity: 1,
        scale: 1,
      });
    });
    mm.add('(min-width: 751px) and (max-width:1100px)', () => {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: dashboardRef.value,
          pin: true,
          scrub: 1.5,
          start: '-=100%',
          end: '+=23%',
        },
      });

      growTl.to(dashboardRef.value, {
        duration: 1,
        scale: '1.86',
      });
      growTl.to('#bluprint-tagline', {
        duration: 1,
        delay: -0.7,
        opacity: 1,
        scale: 1,
      });
    });
  }
});
</script>
<style lang="scss">
.dashboard-content {
  margin-top: 3.2vw;
  font-size: 2.604vw;
  color: $black;
  display: flex;
}
.dashboard-mobile {
  display: none;
}
.animation-content {
  padding-left: 2.604vw;
  position: relative;
}
.bluprint__box {
  margin-left: 11.562vw;
  width: 31.666vw;
  height: 18.385vw;
  background: #1a7fbf;
  border-radius: 1.041vw;
  opacity: 1;
  transform: scale(0.8);
  position: relative;
}
.text-content__p1 {
  padding-top: 1.8vw;
}
.animation-content .bluprint-logo__box {
  position: absolute;
  top: 0.562vw;
  left: 1.362vw;
  width: 5.86vw;
  height: 1.875vw;
}
.text-content__p2 {
  padding-right: 2.604vw;
}

#bluprint-tagline {
  transform: scale(0.8);
  opacity: 0;
  position: absolute;
  top: 0;
  left: -4.5vw;
  width: 40.583vw;
  height: 18.402vw;
}

.text-content__h5 {
  font-size: 1.25vw;
  line-height: 1.875vw;
  font-weight: 300;
  padding-top: 24.791vw;
  padding-bottom: 5.208vw;
}
.text-content {
  font-size: 0.937vw;
  width: 32.1875vw;
  line-height: 1.406vw;
  font-weight: 300;
  padding-left: 7.8125vw;
}
@media (max-width: 768px) {
  .animation-content {
    display: none;
  }
  .dashboard-content {
    flex-direction: column;
  }
  .text-content {
    padding-left: 4.102vw;
  }
  .text-content__p1 {
    width: 91.794vw;
    padding-top: 25.641vw;
    padding-bottom: 15.384vw;
    font-size: 4.102vw;
    line-height: 6.153vw;
    font-weight: 300;
  }
  .dashboard-mobile {
    display: block;
  }
  .dashboard-mobile__img {
    width: 91.794vw;
    height: 58.974vw;
  }
  .text-content__h5 {
    width: 91.538vw;
    padding-top: 15.384vw;
    padding-bottom: 7.692vw;
    font-size: 4.615vw;
    line-height: 6.923vw;
    font-weight: 300;
  }
  .text-content__p2 {
    width: 91.794vw;
    font-size: 4.102vw;
    line-height: 6.153vw;
    font-weight: 300;
  }
}
</style>
