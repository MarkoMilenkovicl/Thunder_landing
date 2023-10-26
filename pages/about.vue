<template>
  <section class="about-page">
    <div class="wrapper">
      <div class="heading-wrapper">
        <SharedHeading
          first-part="A "
          second-part="seamless "
          third-part="flow, for better results"
        />
      </div>
      <p class="description-paragraph">
        Blueprint is built specifically for retailers who want to streamline
        their operations and take their business to the next level.<br />
        <br />
        We understand that running a retail business is challenging, and that's
        why we've developed a comprehensive software system thats designed to
        make your life easier. Blueprint covers all aspects of any and all
        retail operations. By automating these processes, time-consuming manual
        tasks become eliminated, minimising errors, and providing real-time
        insights into your business performance.<br />
        <br />
        With Blueprint, you'll have access to cutting-edge technology that
        simplifies your business processes, saves you time and money, and
        enables you to make informed decisions.
      </p>
    </div>
    <AboutVisionAndPurpose />
    <AboutOverwiev />
    <div class="customer-words">
      <div class="customer-words__title">
        <SharedSubHeading
          first-part="The "
          second-part="customer"
          third-part=" always has a say "
        />
      </div>
      <p class="customer-words__subtitle">
        At our Blueprint, we believe that the customer comes first. Everything
        we do is centred around ensuring that our users have the best possible
        experience when working with us. We put that into action by listening to
        our user’s needs, being proactive based on that input and taking
        responsibility for fixing any inconvenience. At the end of the day, our
        goal is to build long-lasting relationships with our customers, based on
        trust, transparency, and professionalism.
      </p>
    </div>
    <AboutCustomerReviewBoxes />
  </section>
</template>

<style lang="scss">
.about-page {
  padding: 0 7.812vw;
  font-size: 2.604vw;
  color: $black;
}
.heading-wrapper {
  padding-top: 5.208vw;
  width: 42.145vw;
}
.wrapper {
  display: flex;
  margin-bottom: 10.416vw;
  gap: 10.041vw;
}
.description-paragraph {
  padding-top: 13.02vw;
  font-size: 0.937vw;
  line-height: 1.406vw;
  font-weight: 300;
  width: 32.187vw;
}
.customer-words {
  display: flex;
  margin-bottom: 13.802vw;

  .customer-words__title {
    width: 32.552vw;
  }

  .customer-words__subtitle {
    font-size: 0.937vw;
    font-weight: 300;
    line-height: 1.406vw;
    width: 32.187vw;
    margin-left: 2.239vw;
    margin-top: 9.375vw;
  }
}
@media (max-width: 768px) {
  .about-page {
    padding: 0 4.102vw;
  }
  .heading-wrapper {
    padding-top: 15.384vw;
    width: 71.025vw;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 25.641vw;
    gap: 0;
  }
  .description-paragraph {
    padding-top: 15.384vw;
    font-size: 4.102vw;
    line-height: 6.153vw;
    width: 91.794vw;
  }
  .customer-words {
    display: flex;
    flex-direction: column;
    margin-bottom: 13.589vw;

    .customer-words__title {
      width: 64.102vw;
    }

    .customer-words__subtitle {
      font-size: 4.102vw;
      line-height: 6.153vw;
      width: 91.794vw;
      margin-left: 0;
      margin-top: 7.692vw;
    }
  }
}
</style>
