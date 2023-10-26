<template>
  <section class="benefit-boxes">
    <div class="box">
      <img src="~/assets/images/makePlan.png" alt="" class="box-img" />
      <h3>Make plans</h3>
      <p>We will help you make all the necessary business arrangements</p>
    </div>
    <div class="box">
      <img src="~/assets/images/setAppointments.png" alt="" class="box-img" />
      <h3>Make plans</h3>
      <p>We will help you make all the necessary business arrangements</p>
    </div>
    <div class="box">
      <img src="~/assets/images/makePlan.png" alt="" class="box-img" />
      <h3>Make plans</h3>
      <p>We will help you make all the necessary business arrangements</p>
    </div>
  </section>
</template>

<style lang="scss">
.benefit-boxes {
  margin: 0 7.812vw 10.416vw 7.812vw;
  font-size: 2.604vw;
  color: $white;
  display: flex;
  gap: 3.177vw;
}
.box {
  width: 26.041vw;
  height: 29.895vw;
  background: linear-gradient(
    36.11deg,
    #1a7fbf 42.36%,
    rgba(26, 127, 191, 0.1) 110.31%
  );
  border-radius: 1.041vw;
  transition: 0.5s ease-in-out;
}
.box:hover {
  margin-top: -0.8vw;
}
.box-img {
  width: 15.625vw;
  height: 15.625vw;
  margin: 0 5.208vw;
  margin-top: 1.083vw;
}
.box h3 {
  margin-top: 1.083vw;
  font-size: 2.083vw;
  line-height: 3.125vw;
  font-weight: 300;
  padding-left: 2.187vw;
  padding-bottom: 1.9vw;
}
.box p {
  padding-left: 2.187vw;
  font-size: 0.937vw;
  line-height: 1.406vw;
  font-weight: 300;
  width: 21.875vw;
  padding-bottom: 2.083vw;
}
@media (max-width: 768px) {
  .benefit-boxes {
    margin: 0 4.102vw;
    display: flex;
    flex-direction: column;
    gap: 12.82vw;
  }
  .box {
    width: 91.794vw;
    height: 90.769vw;
    border-radius: 5.128vw;
  }
  .box-img {
    width: 38.461vw;
    height: 38.461vw;
    margin: 0 26.666vw;
    margin-top: 7.692vw;
  }

  .box h3 {
    margin-top: 7.692vw;
    font-size: 6.153vw;
    line-height: 9.23vw;
    padding-left: 7.692vw;
    padding-bottom: 7.692vw;
  }
  .box p {
    padding-left: 7.692vw;
    font-size: 4.102vw;
    line-height: 6.153vw;
    width: 86.41vw;
    padding-bottom: 2.083vw;
  }
}
</style>
