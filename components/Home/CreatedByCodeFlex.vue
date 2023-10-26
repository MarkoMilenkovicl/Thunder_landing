<template>
  <section class="static-content">
    <div class="static-content__top">
      <SharedSubHeading first-part="Made by " second-part="CodeFlex " />
      <p>
        CodeFlex is a Dutch/Serbian IT company based in Eindhoven and Novi Sad.
        Blueprint as a product was conceived within the walls of these two
        offices and from there it evolved from a mere idea to reality. The
        CodeFlex team is still working tirelessly, to make sure that Blueprint
        is always improving.
      </p>
      <div class="button-container">
        <SharedButton
          text="Learn More"
          height="2.1354vw"
          @click="goToLink('https://codeflex.it')"
        />
      </div>
      <div class="button-container-mobile">
        <SharedButton
          text="Learn More"
          width="51.282vw"
          height="12.820vw"
          border-radius="5.128vw"
          font-size="3.589vw"
          :disabled="true"
        />
      </div>
    </div>
    <div>
      <img
        src="~/assets/images/blueprintLogo.png"
        alt=""
        class="static-content__logo"
      />
    </div>
    <div class="static-content__bottom">
      <SharedSubHeading first-part="Powered by " second-part="Logyx " />
      <p>
        Logyx was built by the CodeFlex team with Blueprint in mind. It is a
        software used to configure a wanted products’ dimensions, colours,
        material, etc... as well as determining its final price based on all
        that input. Logyx adds another dimension of ease to using Blueprint,
        simplifying the product configuration process.
      </p>
      <div class="button-container">
        <SharedButton text="Learn More" height="2.1354vw" :disabled="true" />
      </div>
      <div class="button-container-mobile">
        <SharedButton
          text="Learn More"
          width="51.282vw"
          height="12.820vw"
          border-radius="5.128vw"
          font-size="3.589vw"
          :disabled="true"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.static-content {
  margin: 18vw 7.612vw 10.416vw 7.612vw;
  font-size: 2.604vw;
  color: $black;
  display: flex;
}
.static-content__logo {
  width: 14.791vw;
  height: 18.854vw;
  margin: 10.3125vw 2.004vw 0 2.004vw;
}
.static-content__bottom {
  padding-top: 19.739vw;
}

.static-content__top p {
  width: 32.187vw;
  font-weight: 300;
  font-size: 0.937vw;
  line-height: 1.406vw;
  margin: 2.083vw 0;
}
.static-content__bottom p {
  width: 32.187vw;
  font-weight: 300;
  font-size: 0.937vw;
  line-height: 1.406vw;
  margin: 2.083vw 0;
}

.button-container-mobile {
  display: none;
}
@media (max-width: 768px) {
  .static-content {
    display: flex;
    flex-direction: column;
    margin: 25.641vw 4.102vw 25.641vw 4.102vw;
  }
  .static-content__top p {
    font-size: 4.102vw;
    line-height: 6.153vw;
    font-weight: 300;
    width: 91.794vw;
    margin: 7.692vw 0;
  }
  .static-content__bottom {
    padding-top: 19.739vw;
  }
  .static-content__bottom p {
    font-size: 4.102vw;
    line-height: 6.153vw;
    font-weight: 300;
    width: 91.794vw;
    margin: 7.692vw 0;
  }

  .static-content__logo {
    width: 56.666vw;
    height: 72.307vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-top: 12.82vw;
  }
  .button-container {
    display: none;
  }
  .button-container-mobile {
    display: flex;
  }
}
</style>
