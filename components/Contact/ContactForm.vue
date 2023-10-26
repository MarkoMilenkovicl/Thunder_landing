<template>
  <section class="contact-form">
    <div class="contact-form__box">
      <form class="contact-inputs">
        <div class="full-name-container">
          <div>
            <p class="contact-p">First Name</p>
            <input type="text" class="name-input" required />
          </div>
          <div>
            <p class="contact-p">Last Name</p>
            <input type="text" class="name-input" required />
          </div>
        </div>
        <div class="field">
          <p class="contact-p">Email</p>
          <input type="email" class="email-input" name="email" required />
        </div>
        <div class="field">
          <p class="contact-p">Phone</p>
          <input type="text" class="phone-input" placeholder="" required />
        </div>
        <div class="field">
          <p class="contact-p">Company Name</p>
          <input
            type="text"
            class="company-name-input"
            placeholder=""
            required
          />
        </div>

        <div class="field">
          <p class="contact-p">Message</p>
          <textarea type="text" class="textarea-input" name="message" />
        </div>
        <div class="checkbox-field">
          <input class="checkbox-component" type="checkbox" />
          <p class="checkbox-text">
            I have read, understand, and agree to Blueprint’s Privacy Policy and
            Terms and Conditions
          </p>
        </div>

        <button class="contact-submit__btn" type="submit" name="submit">
          Send message
        </button>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
.contact-form {
  margin: 10.416vw 14.791vw;
  color: #fff;
}
.contact-p {
  font-size: 0.937vw;
  line-height: 1.406vw;
  font-weight: 300;
  padding-bottom: 0.52vw;
}
.contact-form__box {
  background: #1a7fbf;
  width: 54.791vw;
  height: 47.031vw;
  border-radius: 1.041vw;
  padding: 2.083vw;
}

.full-name-container {
  display: flex;
  gap: 2.135vw;
}
.name-input {
  width: 24.322vw;
  height: 2.083vw;
  border-radius: 1.041vw;
  background: #1a7fbf;
  border: 0.052vw solid #fff;
}
.field {
  padding-top: 2.083vw;
}
.email-input,
.phone-input,
.company-name-input {
  width: 50.781vw;
  height: 2.083vw;
  border-radius: 1.041vw;
  background: #1a7fbf;
  border: 0.052vw solid #fff;
}
.textarea-input {
  width: 50.781vw;
  height: 7.812vw;
  border-radius: 1.041vw;
  background: #1a7fbf;
  border: 0.052vw solid #fff;
}
.checkbox-field {
  padding: 2.083vw 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.041vw;
}
.checkbox-component {
  width: 1.562vw;
  height: 1.562vw;
  border: 0.052vw solid #fff;
  border-radius: 1.041vw;
}
.contact-submit__btn {
  color: #fff;
  width: 50.781vw;
  height: 3.125vw;
  border: 1px solid #fff;
  font-size: 0.937vw;
  line-height: 1.406vw;
  font-weight: 300;
}
.checkbox-text {
  font-size: 0.937vw;
  line-height: 1.406vw;
  font-weight: 300;
  background: #1a7fbf;
}
@media (min-width: 851px) and (max-width: 1050px) {
  .contact-form__box {
    height: 53.031vw;
  }
}
@media (min-width: 1051px) and (max-width: 1250px) {
  .contact-form__box {
    height: 50.031vw;
  }
}
@media (min-width: 1251px) and (max-width: 1450px) {
  .contact-form__box {
    height: 49.031vw;
  }
}
@media (max-width: 768px) {
  .contact-form {
    margin: 0;
    margin-top: 9.23vw;
    margin-bottom: 25.641vw;
    color: #fff;
  }
  .contact-p {
    font-size: 4.102vw;
    line-height: 6.153vw;
    font-weight: 300;
    padding-bottom: 2.564vw;
  }
  .contact-form__box {
    background: #1a7fbf;
    width: 91.794vw;
    height: 248.205vw;
    border-radius: 5.128vw;
    padding: 5.128vw;
  }
  .full-name-container {
    display: flex;
    flex-direction: column;
    gap: 7.692vw;
  }
  .name-input {
    width: 81.538vw;
    height: 10.256vw;
    border-radius: 5.128vw;
    background: #1a7fbf;
    border: 0.052vw solid #fff;
  }
  .field {
    padding-top: 7.692vw;
  }
  .email-input,
  .phone-input,
  .company-name-input {
    width: 81.538vw;
    height: 10.256vw;
    border-radius: 5.128vw;
    background: #1a7fbf;
    border: 0.052vw solid #fff;
  }
  .textarea-input {
    width: 81.538vw;
    height: 51.282vw;
    border-radius: 5.128vw;
    background: #1a7fbf;
    border: 0.052vw solid #fff;
  }
  .checkbox-field {
    padding: 7.692vw 0;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 3.076vw;
  }
  .checkbox-component {
    width: 6.41vw;
    height: 6.41vw;
    border: 0.052vw solid #fff;
    border-radius: 1.794vw;
  }
  .contact-submit__btn {
    color: #fff;
    width: 81.538vw;
    height: 12.838vw;
    border-radius: 5.128vw;
    border: 1px solid #fff;
    font-size: 4.102vw;
    line-height: 6.153vw;
    font-weight: 300;
  }
  .checkbox-text {
    font-size: 2.857vw;
    line-height: 5.384vw;
    font-weight: 300;
    background: #1a7fbf;
  }
}
</style>
