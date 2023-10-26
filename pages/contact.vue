<template>
  <section class="contact-page">
    <div class="contact-text-wrapper">
      <div class="contac-title-wrapper">
        <SharedHeading
          first-part="Need to know "
          second-part="more "
          third-part="before joining?"
        />
      </div>
      <p class="contact-paragraph">
        Reach out and let us know how we can help you. We will try to answer any
        and all questions that you might have about Blueprint. If there is some
        additional information that you need, please contact us, and we will
        reply as soon as possible. Reach out by filling out the form bellow.
      </p>
    </div>

    <ContactForm />
    <div class="contact-text-container">
      <div class="contac-title-container">
        <SharedHeading
          first-part="Let’s change "
          third-part="retailing together!"
        />
      </div>
      <div class="contact-info">
        <p>Blueprint, Inc.</p>
        <p>Sremska 4</p>
        <span>21000 Novi Sad</span>
        <p>Media and Support contact:</p>
        <p>info@blueprint.com</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.contact-page {
  padding: 0 7.812vw;
}
.contact-text-wrapper {
  display: flex;
  padding-top: 5.208vw;
  gap: 2.656vw;
}
.contact-paragraph {
  padding-top: 7.812vw;
  font-size: 0.937vw;
  line-height: 1.406vw;
  font-weight: 300;
  width: 32.187vw;
}
.contac-title-wrapper {
  padding-bottom: 2.604vw;
  width: 49.531vw;
  display: flex;
  margin: 0 auto;
}
.contact-text-container {
  display: flex;
  margin-bottom: 10.937vw;
  gap: 7.656vw;
}
.contac-title-container {
  width: 44.531vw;
}

.contact-info {
  width: 14.791vw;
  display: flex;
  flex-direction: column;
  padding-top: 7.812vw;
  font-size: 0.937vw;
  line-height: 1.406vw;
  font-weight: 300;
}
.contact-info span {
  padding-bottom: 2vw;
}
@media (max-width: 768px) {
  .contact-page {
    padding: 0 4.102vw;
  }
  .contact-text-wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 15.384vw;
    gap: 0;
  }
  .contac-title-wrapper {
    padding-bottom: 0;
    width: 85.384vw;
    display: flex;
    margin: 0;
  }
  .contact-paragraph {
    padding-top: 15.384vw;
    font-size: 4.102vw;
    line-height: 6.153vw;
    font-weight: 300;
    width: 85.384vw;
  }
  .contact-text-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 25.641vw;
    gap: 7.692vw;
  }
  .contac-title-container {
    width: 76.923vw;
  }
  .contact-info {
    width: 94.791vw;
    display: flex;
    flex-direction: column;
    padding-top: 7.812vw;
    font-size: 4.102vw;
    line-height: 6.153vw;
    font-weight: 300;
  }
  .contact-info span {
    padding-bottom: 8.974vw;
  }
}
</style>
