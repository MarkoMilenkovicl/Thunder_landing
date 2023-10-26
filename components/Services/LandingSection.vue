<template>
  <section class="services-landing">
    <div class="srvices-landing__text">
      <div class="heading-wrapper__shared">
        <SharedHeading
          first-part="Maximise "
          second-part="efficiency"
          third-part=", increase productivity"
        />
      </div>
      <p class="services-landing__text">
        Blueprint an advanced business management software built to help
        retailers run their operations more efficiently. It integrates all the
        critical functions of a retail business, from creating quotations to
        scheduling actual meetings with customers, into a single, unified
        system. This allows retailers to manage their entire business from a
        centralised platform.
      </p>
      <p class="services-landing__text">
        With Blueprint, contact between the retailer and the customer becomes
        much less of a hassle. Retailers can make quotations, offers and sales,
        which can be changed based on the customers wishes. This leads to
        improved communication, and less time-consuming back and forth
        communication.
      </p>
    </div>
    <div class="image-wrapper">
      <img
        src="~/assets/images/quotationsOverviewImg.svg"
        alt=""
        class="quotations-invoices__img"
      />
      <img
        src="~/assets/images/quotationsHomeImg.svg"
        alt=""
        class="quotations-home__img"
      />
      <img
        src="~/assets/images/quotationsInvoicesImg.svg"
        alt=""
        class="quotations-overview__img"
      />
      <img
        src="~/assets/images/quotationsPlaningImg.svg"
        alt=""
        class="quotations-planing__img"
      />
    </div>
  </section>
</template>

<style lang="scss">
.services-landing {
  padding: 0 7.812vw;
  width: 100%;
  display: flex;
  font-size: 2.604vw;
  color: $black;
  display: flex;
  padding-bottom: 13vw;

  .heading-wrapper__shared {
    width: 52.708vw;
    padding-top: 5.208vw;
    padding-bottom: 1.625vw;
    margin-right: 0.52vw;
  }
  .image-wrapper {
    position: relative;
    margin-top: 7.135vw;
  }
  .services-landing__text {
    width: 32.187vw;
    font-size: 0.937vw;
    line-height: 1.406vw;
    font-weight: 300;
    padding-top: 1.5vw;
  }
}
.quotations-invoices__img {
  position: absolute;
  width: 25.364vw;
  height: 22.083vw;
}
.quotations-home__img {
  position: absolute;
  top: 16.666vw;
  left: -17.537vw;
  width: 25.364vw;
  height: 22.083vw;
}
.quotations-overview__img {
  position: absolute;
  top: 13.697vw;
  left: 5.581vw;
  width: 25.364vw;
  height: 22.083vw;
}
.quotations-planing__img {
  position: absolute;
  top: 25.26vw;
  left: -3.645vw;
  width: 25.364vw;
  height: 22.083vw;
}
@media (max-width: 768px) {
  .services-landing {
    padding: 0 4.102vw;
    width: 100%;
    display: flex;
    font-size: 2.604vw;
    color: $black;
    padding-bottom: 23.0769vw;

    .heading-wrapper__shared {
      width: 90.769vw;
      padding-top: 15.384vw;
      padding-bottom: 176.153vw;
      margin-right: 0.52vw;
    }
    .image-wrapper {
      position: absolute;
      top: 55.948vw;
      left: 0;
    }
    .services-landing__text {
      width: 91.794vw;
      font-size: 4.102vw;
      line-height: 6.153vw;
      font-weight: 300;
      padding-top: 2.5vw;
    }
  }
  .quotations-invoices__img {
    position: absolute;
    width: 79.23vw;
    height: 68.974vw;
    left: 5.897vw;
  }
  .quotations-home__img {
    display: none;
  }
  .quotations-overview__img {
    position: absolute;
    top: 44.871vw;
    left: 17.435vw;
    width: 79.23vw;
    height: 68.974vw;
  }
  .quotations-planing__img {
    position: absolute;
    top: 76.41vw;
    left: 10.256vw;
    width: 79.23vw;
    height: 68.974vw;
  }
}
</style>
