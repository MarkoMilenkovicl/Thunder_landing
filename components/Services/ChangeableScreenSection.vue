<template>
  <div class="changable-screen-section">
    <div class="text-wrapper">
      <h5 class="heading-container">Create deals</h5>
      <p class="paragraph-wrapper__first">
        Creating new deals is no longer a problem. In a couple of easy steps,
        quotations can be created and modelled to the customer’s needs. As
        agreed upon terms tend to change, everything remains editable, and can
        be changed at any time.
      </p>
      <img
        src="~/assets/images/mobileDashboardOne.png"
        alt="bluprint dashboard image"
        class="mobile-dashboard"
      />
      <h5 class="heading-container">Manage the business flow</h5>
      <p class="paragraph-wrapper__second">
        A sale is not completed once a deal has been struck. There is still a
        lot of phases to go through before it can ba finalised. You can track
        all these phases and adjust them to your current need and preference, as
        they are all linked together in one overarching sales flow, which
        encapsulates the entire process.
      </p>
      <img
        src="~/assets/images/mobileDashboardTwo.png"
        alt="bluprint dashboard image"
        class="mobile-dashboard"
      />
      <h5 class="heading-container">Keep track of all appointments</h5>
      <p class="paragraph-wrapper__third">
        Easily keep an eye on all of your past, current and future appointments
        through a calendar view. Information about each single appointment is
        easily accessed and changed if need be.
      </p>
      <img
        src="~/assets/images/mobileDashboardThree.png"
        alt="bluprint dashboard image"
        class="mobile-dashboard"
      />
      <h5 class="heading-container last-heading">
        Sit back, and let us do the work
      </h5>
      <p class="paragraph-wrapper__fourth">
        Do business, minus the stress. Let us take care of the repetitive and
        menial side of your work, and focus on more engaging and worthwhile
        concerns. Just sit back, and watch your business thrive.
      </p>
      <img
        src="~/assets/images/mobileDashboardFour.png"
        alt="bluprint dashboard image"
        class="mobile-dashboard"
      />
    </div>

    <div id="sequence-container">
      <div class="dashboard-screen">
        <div class="dashboard__box">
          <img
            id="dashboard-header"
            src="~/assets/images/changeableScreenHeader.svg"
            alt="bluprint dashboard image"
          />
          <img
            id="dashboard-side-menu"
            src="~/assets/images/changeableScreenSideMenu.svg"
            alt="bluprint dashboard image"
          />
          <div class="sequence-panels">
            <img
              id="seq-1"
              src="~/assets/images/changeableScreenForm.svg"
              alt="bluprint dashboard image"
              class="sequence-panel"
            />
            <img
              id="seq-2"
              src="~/assets/images/changeableScreenQoutation.svg"
              alt="bluprint dashboard image"
              class="sequence-panel"
            />
            <img
              id="seq-3"
              src="~/assets/images/changeableScreenTable.svg"
              alt="bluprint dashboard image"
              class="sequence-panel"
            />
            <img
              id="seq-4"
              src="~/assets/images/changeableScreenCircles.svg"
              alt="bluprint dashboard image"
              class="sequence-panel"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  const Tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#sequence-container',
      pinSpacing: true,
      start: 'bottom, 90%',
      scrub: 2,
    },
  });

  mm.add('(min-width: 2551px) and (max-width:2800px)', () => {
    const Tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#sequence-container',
        start: 'bottom, 60%',
        scrub: 1.5,
      },
    });
  });
  mm.add('(min-width: 2351px) and (max-width:2550px)', () => {
    const Tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#sequence-container',
        start: 'bottom, 20%',
        scrub: 1.5,
      },
    });
  });
  mm.add('(min-width: 2151px) and (max-width:2350px)', () => {
    const Tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#sequence-container',
        start: 'top, 30%',
        scrub: 1.5,
      },
    });
  });
  mm.add('(min-width: 1951px) and (max-width:2150px)', () => {
    const Tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#sequence-container',
        start: 'top, 20%',
        scrub: 1.5,
      },
    });
  });

  mm.add('(min-width: 1281px) and (max-width: 1550px)', () => {
    const Tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#sequence-container',
        start: 'top, top',
        scrub: 1.5,
      },
    });
  });

  // const tl = gsap.timeline();

  Tl.to('#seq-1', 1, { opacity: 1 });

  Tl.to('#seq-1', 1, { opacity: 0 });

  Tl.to('#seq-2', 1, { opacity: 1 });

  Tl.to('#seq-2', 1, { opacity: 0 });

  Tl.to('#seq-3', 1, { opacity: 1 });

  Tl.to('#seq-3', 1, { opacity: 0 });

  Tl.to('#seq-4', 1, { opacity: 1 });

  Tl.to('#seq-4', 1, { opacity: 0 });
});
</script>
<style lang="scss">
.changable-screen-section {
  margin: 10.416vw 7vw 0 7vw;
  font-size: 2.604vw;
  color: $black;
  height: 138vw;
  display: flex;
  position: relative;
  .paragraph-wrapper__first {
    padding-top: 1.8vw;
    padding-bottom: 21.614vw;
    font-size: 0.937vw;
    line-height: 1.406vw;
    font-weight: 300;
    padding-top: 2.083vw;
    width: 32.187vw;
    margin-right: 2.604vw;
  }

  .paragraph-wrapper__second {
    padding-right: 2.604vw;
    padding-bottom: 15.52vw;
    font-size: 0.937vw;
    line-height: 1.406vw;
    font-weight: 300;
    padding-top: 2.083vw;
    width: 32.187vw;
    margin-right: 2.604vw;
  }

  .paragraph-wrapper__third {
    padding-right: 2.604vw;
    padding-bottom: 18.333vw;
    font-size: 0.937vw;
    line-height: 1.406vw;
    font-weight: 300;
    padding-top: 2.083vw;
    width: 32.187vw;
    margin-right: 2.604vw;
  }

  .paragraph-wrapper__fourth {
    padding-right: 2.604vw;
    font-size: 0.937vw;
    line-height: 1.406vw;
    font-weight: 300;
    padding-top: 2.083vw;
    width: 32.187vw;
    padding-bottom: 23.541vw;
    margin-right: 2.604vw;
  }
  .heading-container {
    font-size: 3.125vw;
    line-height: 4.687vw;
    font-weight: 275;
    width: 32.187vw;
  }
}
#sequence-container {
  order: 2;
  margin-left: 2.604vw;
  height: 132vw;
}

#dashboard-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 49.583vw;
  height: 4.479vw;
}
#dashboard-side-menu {
  position: absolute;
  top: 4.479vw;
  left: 0;
  width: 16.429vw;
  height: 24.322vw;
}
.dashboard-screen {
  top: 9vw;
  position: sticky;
}
.mobile-dashboard {
  display: none;
}
@media (min-width: 760px) and (max-width: 1050px) {
  .dashboard-screen {
    top: 20vw;
    position: sticky;
  }
  #sequence-container {
    order: 2;
    margin-left: 2.604vw;
    height: 130vw;
  }
  .changable-screen-section {
    height: 210vw;
  }
}
@media (min-width: 1051px) and (max-width: 1280px) {
  .dashboard-screen {
    top: 20vw;
    position: sticky;
  }
  #sequence-container {
    order: 2;
    margin-left: 2.604vw;
    height: 140vw;
  }
  .changable-screen-section {
    height: 178vw;
  }
}
@media (min-width: 1281px) and (max-width: 1550px) {
  .dashboard-screen {
    top: 15vw;
    position: sticky;
  }
  #sequence-container {
    order: 2;
    margin-left: 2.604vw;
    height: 135vw;
  }
  .changable-screen-section {
    height: 158vw;
  }
}
@media (min-width: 1551px) and (max-width: 1750px) {
  .dashboard-screen {
    top: 20vw;
    position: sticky;
  }
  #sequence-container {
    order: 2;
    margin-left: 2.604vw;
    height: 128vw;
  }
  .changable-screen-section {
    height: 150vw;
  }
}
@media (min-width: 1751px) and (max-width: 1950px) {
  .dashboard-screen {
    top: 19vw;
    position: sticky;
  }
  #sequence-container {
    order: 2;
    margin-left: 2.604vw;
    height: 125vw;
  }
}
.dashboard__box {
  width: 49.583vw;
  height: 28.802vw;
  background: #1a7fbf;
  border-radius: 1.041vw;
  position: relative;
}
.sequence-panels {
  position: absolute;
  left: 1.1vw;
  top: 0;
  right: 0;
  bottom: 0;
}
.sequence-panel {
  position: absolute;
  left: 0;
  top: calc(var(--gutter) * 2);
  bottom: auto;
  will-change: transform, opacity;
}

#seq-1 {
  opacity: 1;
  top: 6.145vw;
  left: 17.864vw;
  width: 28.645vw;
  height: 20.989vw;
}

#seq-2 {
  opacity: 0;
  top: 5.677vw;
  left: 16.43vw;
  width: 29.739vw;
  height: 16.718vw;
}

#seq-3 {
  opacity: 0;
  top: 5.677vw;
  left: 16.43vw;
  width: 30.625vw;
  height: 20.156vw;
}

#seq-4 {
  opacity: 0;
  top: 5.677vw;
  left: 20.43vw;
  width: 17.864vw;
  height: 17.864vw;
}

.text-wrapper__h5 {
  font-size: 3.125vw;
  line-height: 4.687vw;
  font-weight: 275;
  padding-top: 24.791vw;
  padding-bottom: 2.083vw;
}
.text-wrapper {
  font-size: 0.937vw;
  width: 32.1875vw;
  line-height: 1.406vw;
  font-weight: 300;
}
@media (max-width: 768px) {
  #sequence-container {
    display: none;
  }
  .mobile-dashboard {
    display: block;
    width: 91.794vw;
    height: 58.974vw;
    margin-bottom: 7.692vw;
  }
  .changable-screen-section {
    margin: 5.416vw 4.102vw 23.076vw 4.102vw;
    height: 100%;

    .paragraph-wrapper__first {
      padding-top: 1.8vw;
      padding-bottom: 21.614vw;
      font-size: 4.102vw;
      line-height: 6.153vw;
      font-weight: 300;
      padding: 7.692vw 0;
      width: 91.794vw;
      margin-right: 0;
    }

    .paragraph-wrapper__second {
      padding-right: 0;
      padding-bottom: 15.52vw;
      font-size: 4.102vw;
      line-height: 6.153vw;
      font-weight: 300;
      padding: 7.692vw 0;
      width: 91.794vw;
      margin-right: 0;
    }

    .paragraph-wrapper__third {
      padding-right: 0;
      padding-bottom: 18.333vw;
      font-size: 4.102vw;
      line-height: 6.153vw;
      font-weight: 300;
      padding: 7.692vw 0;
      width: 91.794vw;
      margin-right: 0;
    }

    .paragraph-wrapper__fourth {
      padding-right: 0;
      font-size: 4.102vw;
      line-height: 6.153vw;
      font-weight: 300;
      padding: 7.692vw 0;
      width: 91.794vw;
      padding-bottom: 23.541vw;
      margin-right: 0;
    }
    .heading-container {
      font-size: 6.153vw;
      line-height: 9.23vw;
      font-weight: 275;
      width: 78.317vw;
    }
    .last-heading {
      width: 63.317vw;
    }
  }
}
</style>
