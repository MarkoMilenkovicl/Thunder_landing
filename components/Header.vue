<template>
  <header>
    <NuxtLink to="/">
      <img src="~/assets/images/navLogo.svg" alt="" class="logo-img" />
    </NuxtLink>
    <nav class="nav_menu" :class="{ active: hamburgerActive }">
      <ul>
        <li>
          <NuxtLink to="/about" @click="hamburgerActive = false"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/services" @click="hamburgerActive = false"
            >Services</NuxtLink
          >
        </li>
        <!-- <li><NuxtLink to="/pricing"  @click="hamburgerActive = false">Pricing</NuxtLink></li> -->
        <li>
          <NuxtLink to="/contact" @click="hamburgerActive = false"
            >Contact</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <div class="header-button">
      <SharedButton text="Try it now" height="2.1354vw" :disabled="true" />
    </div>
    <div class="header-button__mobile">
      <SharedButton
        text="Try it now"
        width="25.641vw"
        height="6.905vw"
        border-radius="5.128vw"
        font-size="3.076vw"
        :disabled="true"
      />
    </div>
    <div
      class="hamburger"
      :class="{ active: hamburgerActive }"
      @click="hamburgerActive = !hamburgerActive"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const hamburgerActive = ref(false);
</script>

<style lang="scss">
header {
  width: 100%;
  height: 5.052vw;
  position: sticky;
  top: 0;
  left: 0;
  padding: 1.562vw 7.812vw 0 7.812vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $background-color;
  z-index: 10000;
}
.logo-img {
  width: 14.375vw;
  height: 3.489vw;
}

nav {
  margin: 0 2.083vw;

  ul {
    display: flex;
    align-items: center;

    li {
      font-size: 0.937vw;
      line-height: 1.406vw;
      font-weight: 300;
      color: $blue;

      .router-link-active {
        font-weight: 600;
      }

      &:not(:first-child) {
        margin-left: 2.631vw;
      }
    }
  }
}
.header-button__mobile {
  display: none;
}
.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 6.66vw;
  height: 0.741vw;
  margin: 1.294vw auto;
  -webkit-transition: all 0.3s ease-in-out;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  background-color: #1a7fbf;
}
@media (max-width: 768px) {
  header {
    height: 100%;
    position: sticky;
    top: 0;
    left: 0;
    padding: 4vw 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $background-color;
    z-index: 1000;
  }
  .header-button {
    display: none;
  }
  .header-button__mobile {
    display: block;
    margin-left: 5vw;
  }
  .logo-img {
    width: 37.179vw;
    height: 8.974vw;
    align-items: center;
    margin-left: 4.2vw;
  }

  .hamburger {
    display: block;
    margin-top: 0;
    margin-right: 4.2vw;
    z-index: 10000;
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(2.1vw) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-2.1vw) rotate(-45deg);
  }
  .nav_menu {
    margin-top: 13vw;
    z-index: 10000;
    position: fixed;
    top: -1%;
    display: none;
    flex-direction: column;
    width: 91.794vw;
    background-color: #edf4fa;
    opacity: 0;
    animation: hamburgerOpen 0.5s ease-in-out;
    border-radius: 0 0 10.256vw 10.256vw;
  }

  @keyframes hamburgerOpen {
    from {
      transform: translateY(-3%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  nav {
    margin: 0;
    align-items: center;

    ul {
      padding-top: 5.128vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5.128vw;
      align-items: center;

      li {
        font-size: 6.153vw;
        line-height: 9.23vw;
        font-weight: 275;
        color: #000000;

        .router-link-active {
          font-weight: 400;
        }

        &:not(:first-child) {
          margin-left: 0;
        }
      }
    }
  }
  .nav_menu.active {
    display: flex;
    top: 0;
    opacity: 1;
    color: #fff;
    height: 61.794vw;
    width: 100vw;
  }
}
</style>
