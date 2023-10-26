<template>
  <section class="vision-and-purpose">
    <div class="overwiev">
      <div id="codeFlex_jump_link" class="idea">
        <div class="text-continer">
          <SharedSubHeading
            first-part="Made possible by "
            second-part="CodeFlex "
          />
        </div>
        <p>
          The idea for Blueprint was formed in the offices of CodeFlex, and from
          there it developed into the product that exists today. It took a long
          time to get it from inception to launch, but the task was well
          worthwhile and they enjoyed every minute of it. They are currently
          working on more ways to improve and adapt Blueprint, so that it serves
          its purpose to the highest possible standards.
        </p>
        <div class="container">
          <div class="button-overwiev">
            <SharedButton
              text="Learn more"
              height="2.604vw"
              @click="goToLink('https://codeflex.it')"
            />
          </div>
          <div class="button-overwiev__mobile">
            <SharedButton
              text="Learn more"
              width="51.282vw"
              height="12.820vw"
              border-radius="5.128vw"
              font-size="3.589vw"
              @click="goToLink('https://codeflex.it')"
            />
          </div>
          <img
            src="~/assets/images/codeflexOverviewLogo.svg"
            alt=""
            class="codeflex-overview__logo"
          />
        </div>
      </div>
      <div id="logyx_jump_link" class="description">
        <img src="~/assets/images/teamImg.svg" alt="" class="team-img" />

        <SharedSubHeading
          second-part="Logyx"
          third-part=", the tool of Blueprint "
        />
        <p>
          Logyx is a configuration software which was also built by the CodeFlex
          team. It helps users configure products almost automatically, making
          their job much easier. It lives in perfect harmony with Blueprint,
          through which it can be accessed, providing a hassle-free
          configuration experience.
        </p>

        <div class="container">
          <div class="button-overwiev">
            <SharedButton text="Learn more" height="2.604vw" :disabled="true" />
          </div>
          <div class="button-overwiev__mobile">
            <SharedButton
              text="Learn more"
              width="51.282vw"
              height="12.820vw"
              border-radius="5.128vw"
              font-size="3.589vw"
              @click="goToLink('https://codeflex.it')"
            />
          </div>
          <img
            src="~/assets/images/logyxOverviewLogo.svg"
            alt=""
            class="logyx-overview__logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.vision-and-purpose {
  color: $black;
  margin-bottom: 10.416vw;

  .overwiev {
    display: flex;

    .text-continer {
      width: 27.822vw;
    }
    .idea p {
      font-size: 0.937vw;
      font-weight: 300;
      line-height: 1.406vw;
      width: 32.187vw;
      margin: 2.083vw 0;
      margin-right: 2.604vw;
    }
    .description p {
      font-size: 0.937vw;
      font-weight: 300;
      line-height: 1.406vw;
      width: 32.187vw;
      margin: 2.083vw 0;
    }
    .container {
      display: flex;
      align-items: center;
    }
  }
  .team-img {
    width: 49.135vw;
    height: 30.885vw;
    margin-bottom: 2.083vw;
  }
  .codeflex-overview__logo {
    margin-left: 4.166vw;
    width: 14.166vw;
    height: 4.166vw;
  }
  .logyx-overview__logo {
    margin-left: 4.166vw;
    width: 12.76vw;
    height: 4.218vw;
  }
  .button-overwiev__mobile {
    display: none;
  }
}
@media (max-width: 768px) {
  .vision-and-purpose {
    .overwiev {
      display: flex;
      flex-direction: column;

      .idea .text-continer {
        width: 52.82vw;
      }
      .idea p {
        font-size: 4.102vw;
        font-weight: 300;
        line-height: 6.153vw;
        width: 91.794vw;
        margin: 7.692vw 0;
        margin-right: 0;
      }
      .description p {
        font-size: 4.102vw;
        font-weight: 300;
        line-height: 6.153vw;
        width: 91.794vw;
        margin: 7.692vw 0;
      }
      .description .team-img {
        width: 91.794vw;
        height: 57.692vw;
        border-radius: 5.128vw;
        margin-top: 12.82vw;
        margin-bottom: 12.82vw;
      }
      .container {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 7.692vw;
      }
      .button-overwiev {
        display: none;
      }
      .button-overwiev__mobile {
        display: flex;
      }

      .codeflex-overview__logo {
        margin-left: 0;
        width: 52.564vw;
        height: 15.384vw;
      }
      .logyx-overview__logo {
        margin-left: 0;
        width: 46.41vw;
        height: 15.384vw;
      }
    }
  }
}
</style>
