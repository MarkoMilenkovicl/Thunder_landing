<template>
  <section id="missionAndPurpose_jump_link" class="vision-and-purpose">
    <div class="content">
      <h3>Vision</h3>
      <p>
        Our vision is to empower retailers with a comprehensive and integrated,
        ERP system that streamlines their operations, improves their
        decision-making, and enhances their customer experience. By leveraging
        cutting-edge technology and best practices, we aim to enable retailers
        to focus on what matters most: growing their business and delivering
        value to their customers.
      </p>
      <div class="thunder-animation__mobile">
        <img
          src="~/assets/images/thunderImg.svg"
          alt=""
          class="thunder-animation__img"
        />
        <img
          src="~/assets/images/thunderLineFirst.svg"
          alt=""
          class="thunder-loading__first"
        />
        <img
          src="~/assets/images/thunderLineSecond.svg"
          alt=""
          class="thunder-loading__second"
        />
        <img
          src="~/assets/images/thunderLineFirst.svg"
          alt=""
          class="thunder-loading__third"
        />
      </div>
      <h3 class="purpose-heading">Purpose</h3>
      <p>
        Our purpose is to help retailers overcome the challenges of managing
        multiple business processes and data sources across different
        departments, locations, and channels. By integrating all key functions
        in one place, we can make all these tasks seem like less of a burden,
        helping our users do business, minus the stress.
      </p>
    </div>
    <div class="thunder-animation">
      <img
        src="~/assets/images/thunderImg.svg"
        alt=""
        class="thunder-animation__img"
      />
      <img
        src="~/assets/images/thunderLineFirst.svg"
        alt=""
        class="thunder-loading__first"
      />
      <img
        src="~/assets/images/thunderLineSecond.svg"
        alt=""
        class="thunder-loading__second"
      />
      <img
        src="~/assets/images/thunderLineFirst.svg"
        alt=""
        class="thunder-loading__third"
      />
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.vision-and-purpose {
  color: $blue;
  display: flex;
  margin-bottom: 12.416vw;

  .content {
    padding-top: 2.083vw;
    color: $black;
    margin-right: 20vw;
  }
  .content p {
    padding-top: 2.083vw;
    width: 32.187vw;
    font-size: 0.937vw;
    font-weight: 300;
    line-height: 1.406vw;
  }
  .content h3 {
    font-size: 3.125vw;
    line-height: 4.687vw;
    font-weight: 275;
  }
}
.purpose-heading {
  margin-top: 5.208vw;
}
.thunder-animation__mobile {
  display: none;
}
.thunder-animation {
  position: relative;
  animation-delay: 2.1s;
}
.thunder-animation__img {
  width: 32.1875vw;
  height: 38.385vw;
}
.thunder-loading__first {
  position: absolute;
  top: 0;
  left: 0;
  width: 4.125vw;
  border-radius: 0.4vw;
  z-index: 1000;
  animation: thunderLoadingFirst 1.6s ease-in infinite;
}
.thunder-loading__second {
  position: absolute;
  top: 14.7vw;
  left: 11.2vw;
  width: 4.125vw;
  border-radius: 0.4vw;
  z-index: 1000;
  animation: thunderLoadingSecond 1.6s ease-in-out infinite;
}
.thunder-loading__third {
  position: absolute;
  top: 22.7vw;
  left: 6.86vw;
  width: 4.125vw;
  border-radius: 0.4vw;
  z-index: 1000;
  animation: thunderLoadingThird 1.6s ease-in-out infinite;
}

@keyframes thunderLoadingFirst {
  0% {
    opacity: 0;
  }
  12.5% {
    top: 0.42vw;
    left: 0.62vw;
    opacity: 0.6;
  }
  25% {
    top: 11vw;
    left: 11.18vw;
    opacity: 0.9;
  }

  37.5% {
    top: 11vw;
    left: 11.18vw;
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  62.5% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }
  87.5% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
@keyframes thunderLoadingSecond {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }

  37.5% {
    top: 14.7vw;
    left: 11.2vw;
    opacity: 0.5;
  }

  50% {
    top: 19.1vw;
    left: 6.8vw;
    opacity: 1;
  }

  62.5% {
    top: 19.1vw;
    left: 6.8vw;
    opacity: 0;
  }

  75% {
    opacity: 0;
  }
  87.5% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes thunderLoadingThird {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }

  37.5% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  62.5% {
    top: 22.7vw;
    left: 6.86vw;
    opacity: 0.2;
  }

  75% {
    top: 30.72vw;
    left: 14.89vw;
    opacity: 0.8;
  }
  87.5% {
    top: 30.72vw;
    left: 14.89vw;
    opacity: 0.3;
  }
  100% {
    top: 30.72vw;
    left: 14.93vw;
    opacity: 0;
  }
}
@keyframes thunderLoadingFirstMobile {
  0% {
    opacity: 0;
  }
  12.5% {
    top: 0.42vw;
    left: 0.62vw;
    opacity: 0.6;
  }
  25% {
    top: 31.2vw;
    left: 31.6vw;
    opacity: 0.9;
  }

  37.5% {
    top: 31.2vw;
    left: 31.6vw;
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  62.5% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }
  87.5% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
@keyframes thunderLoadingSecondMobile {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }

  37.5% {
    top: 45vw;
    left: 29.2vw;
    opacity: 0.5;
  }

  50% {
    top: 54.4vw;
    left: 19.4vw;
    opacity: 1;
  }

  62.5% {
    top: 54.4vw;
    left: 19.4vw;
    opacity: 0;
  }

  75% {
    opacity: 0;
  }
  87.5% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes thunderLoadingThirdMobile {
  0% {
    opacity: 0;
  }
  12.5% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }

  37.5% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  62.5% {
    top: 59.7vw;
    left: 13.86vw;
    opacity: 0.2;
  }

  75% {
    top: 87.72vw;
    left: 42.3vw;
    opacity: 0.8;
  }
  87.5% {
    top: 87.72vw;
    left: 42.3vw;
    opacity: 0.3;
  }
  100% {
    top: 87.72vw;
    left: 42.3vw;
    opacity: 0;
  }
}
@media (max-width: 768px) {
  .vision-and-purpose {
    color: $blue;
    display: flex;
    flex-direction: column;
    margin-bottom: 10.416vw;

    .content {
      padding-top: 2.083vw;
      color: $black;
      margin-right: 0;
    }
    .content p {
      padding-top: 0;
      width: 91.794vw;
      font-size: 4.102vw;
      font-weight: 300;
      line-height: 6.153vw;
      padding-bottom: 12.82vw;
    }
    .content h3 {
      font-size: 6.153vw;
      padding-bottom: 7.692vw;
    }
    .purpose-heading {
      margin-top: 12.82vw;
    }
    .thunder-animation {
      display: none;
    }

    .thunder-animation__mobile {
      display: block;
      position: relative;
    }
    .thunder-animation__img {
      width: 91.794vw;
      height: 109.471vw;
      border-radius: 5.128vw;
    }
    .thunder-loading__first {
      position: absolute;
      top: 0;
      left: 0;
      width: 11.764vw;
      border-radius: 0.4vw;
      z-index: 1000;
      animation: thunderLoadingFirstMobile 1.6s ease-in infinite;
    }
    .thunder-loading__second {
      position: absolute;
      width: 11.764vw;
      top: 16.7vw;
      left: 11.2vw;
      border-radius: 0.4vw;
      z-index: 1000;
      animation: thunderLoadingSecondMobile 1.6s ease-in-out infinite;
    }
    .thunder-loading__third {
      position: absolute;
      width: 11.764vw;
      border-radius: 0.4vw;
      z-index: 1000;
      animation: thunderLoadingThirdMobile 1.6s ease-in-out infinite;
    }
  }
}
</style>
