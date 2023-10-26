<template>
  <section class="home-page">
    <div class="title-wrapper">
      <SharedHeading
        first-part="Outline the business, "
        second-part="simplify "
        third-part="your work"
      />
    </div>
    <div class="button-container">
      <SharedButton
        text="Let’s work together!"
        height="2.1354vw"
        :disabled="true"
      />
    </div>
    <div class="button-container-mobile">
      <SharedButton
        text="Let’s work together!"
        width="51.282vw"
        height="10.256vw"
        border-radius="5.128vw"
        font-size="3.589vw"
        :disabled="true"
      />
    </div>
    <HomeDashboardScreen />
    <HomeCreatedByCodeFlex />
    <HomeBenefitBoxes />
    <h5 class="contac-title">Want to know more?</h5>

    <NuxtLink to="/contact" class="contact-link"
      >Contact us
      <img src="~/assets/images/arrowSimbol.png" alt="arrow" class="arrow-img"
    /></NuxtLink>
  </section>
</template>

<style lang="scss">
.home-page {
  font-size: 2.604vw;
  color: $black;
  margin-bottom: 25.641vw;
}
.title-wrapper {
  padding-top: 5.208vw;
  padding-bottom: 2.604vw;
  width: 51.093vw;
  display: flex;
  margin: 0 auto;
}
.button-container {
  display: flex;
  justify-content: center;
}
.button-container-mobile {
  display: none;
}
.contac-title {
  font-size: 5.208vw;
  line-height: 7.812vw;
  font-weight: 250;
  padding-left: 7.812vw;
  padding-bottom: 2.343vw;
}
.contact-link {
  display: flex;
  width: 17.395vw;
  justify-content: space-between;
  padding-bottom: 0.52vw;
  margin-left: 7.812vw;
  font-size: 1.25vw;
  line-height: 1.875vw;
  font-weight: 300vw;
  color: $blue;
  border-radius: none;
  border: none;
  border-bottom: 1px solid $blue;
}
.arrow-img {
  text-align: center;
  width: 1.875vw;
  height: 1.875vw;
}
@media (max-width: 768px) {
  .title-wrapper {
    width: 88.205vw;
    padding-top: 15.384vw;
    padding-bottom: 7.692vw;
  }
  .button-container {
    display: none;
  }
  .button-container-mobile {
    display: flex;
    justify-content: center;
  }
  .button-container-mobile button {
    line-height: 5.384vw;
  }
  .contac-title {
    margin-top: 25.641vw;
    font-size: 8.974vw;
    line-height: 13.461vw;
    font-weight: 250;
    padding-left: 7.692vw;
    padding-bottom: 8.717vw;
  }
  .contact-link {
    display: flex;
    width: 62.564vw;
    justify-content: space-between;
    padding-bottom: 0.52vw;
    margin-left: 7.812vw;
    font-size: 4.615vw;
    line-height: 6.923vw;
    font-weight: 300vw;
    color: $blue;
    border-radius: none;
    border: none;
    border-bottom: 1px solid $blue;
  }
  .arrow-img {
    text-align: center;
    width: 7.692vw;
    height: 7.692vw;
  }
}
</style>
