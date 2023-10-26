<template>
  <footer>
    <div class="footer-menu">
      <div class="footer-menu__col">
        <NuxtLink class="title" to="/about">About</NuxtLink>
        <ul>
          <li>The Software</li>
          <li>
            <NuxtLink
              :to="{ path: '/about', hash: '#missionAndPurpose_jump_link' }"
              >Mission & Purpose</NuxtLink
            >
          </li>
          <li>
            <NuxtLink :to="{ path: '/about', hash: '#codeFlex_jump_link' }"
              >CodeFlex</NuxtLink
            >
          </li>
          <li>
            <NuxtLink :to="{ path: '/about', hash: '#logyx_jump_link' }"
              >Logyx</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="footer-menu__col">
        <NuxtLink class="title" to="/services">Services</NuxtLink>
        <ul>
          <li>Sunshading</li>
        </ul>
      </div>
      <!-- <div class="footer-menu__col">
        <span class="title">Plans</span>
        <ul>
          <li>Basic</li>
          <li>Regular</li>
          <li>Pro</li>
        </ul>
      </div> -->
      <div class="footer-menu__col">
        <NuxtLink class="title" to="/contact">Contact</NuxtLink>
      </div>
    </div>
    <div class="copyright">
      <p>© 2023. All rights reserved.</p>
      <NuxtLink class="privacy-policy" to="/privacy-policy"
        >Privacy policy</NuxtLink
      >
    </div>
    <img
      src="~/assets/images/blueprintLogoFooter.png"
      alt=""
      class="footer-logo"
    />
    <img
      src="~/assets/images/blueprintLogo.png"
      alt=""
      class="footer-logo__mobile"
    />
  </footer>
</template>

<style lang="scss">
footer {
  width: 100%;
  height: 19.062vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 7.812vw;
  position: relative;
  background: $background-color;
  z-index: 10000;
  .footer-logo__mobile {
    display: none;
  }
  img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
}

.footer-menu {
  height: 19.0625vw;
  display: flex;
  align-items: center;
}

.footer-menu__col {
  display: flex;
  flex-direction: column;
  width: 17.39vw;
  height: 100%;
  padding-right: auto;

  .title {
    font-size: 1.25vw;
    line-height: 1.875vw;
    font-weight: 300;
    color: $black;
    margin-bottom: 2.343vw;
  }

  ul {
    li {
      font-size: 0.937vw;
      line-height: 1.406vw;
      font-weight: 300;

      &:not(:last-child) {
        margin-bottom: 0.52vw;
      }
    }
  }
}

.footer-logo {
  width: 22.604vw;
  height: 19.0625vw;
}
.copyright {
  display: flex;
  padding-bottom: 2.083vw;

  p,
  a {
    font-size: 0.937vw;
    line-height: 1.406vw;
    font-weight: 300;
  }

  .privacy-policy {
    margin-left: 5.364vw;
  }
}
@media (max-width: 768px) {
  footer {
    width: 100;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 4.102vw;
    position: relative;
    background: $background-color;
    z-index: 10000;
    .footer-logo {
      display: none;
    }

    .footer-logo__mobile {
      display: flex;
      width: 38.461vw;
      height: 49.23vw;
    }
    img {
      position: absolute;
      top: 0;
      left: 30.769vw;
      z-index: -1;
    }
  }

  .footer-menu {
    height: 100%;
    display: flex;
    padding-top: 62.051vw;
    flex-direction: column;
    align-items: center;
    gap: 12.82vw;
  }

  .footer-menu__col {
    display: flex;
    flex-direction: column;
    width: 52.564vw;
    align-items: center;
    text-align: center;

    height: 100%;

    .title {
      font-size: 4.615vw;
      line-height: 6.923vw;
      font-weight: 300;
      margin-bottom: 2.564vw;
    }

    ul {
      li {
        font-size: 4.102vw;
        line-height: 6.153vw;
        font-weight: 300;
        margin-top: 2.564vw;

        &:not(:last-child) {
          margin-bottom: 0.52vw;
        }
      }
    }
  }
  .copyright {
    display: flex;
    margin-top: 12.82vw;
    padding-bottom: 12.82vw;
    flex-direction: column;
    align-items: center;
    gap: 5.128vw;
    p,
    a {
      font-size: 4.102vw;
      line-height: 6.153vw;
      font-weight: 300;
    }

    .privacy-policy {
      margin-left: 5.364vw;
    }
  }
}
</style>
