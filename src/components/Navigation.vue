<template>
  <header>
    <nav>
      <div class="branding">
        <img src="../assets/logo-topo.png" alt="logo" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Lojista' }">Lojista</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Sobre' }">Sobre</router-link>
        </li>
      </ul>
      <div class="icon">
        <i
          v-show="mobile"
          class="far fa-bars"
          @click="toggleMobileNav"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Lojista' }">Lojista</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Sobre' }">Sobre</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style scoped>
header {
  background: linear-gradient(to left, #bb3e63, #f79c81);
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  color: white;
}

nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
}
nav,
ul,
.link {
  list-style: none;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
}
li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}
.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}
.link:hover {
  color: #00afea;
  border-color: #00afea;
}
.branding {
  display: flex;
  align-items: center;
}
.branding img {
  width: 50px;
  transition: 0.5s ease all;
}

.icon {
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  right: 24px;
  height: 100%;
}
.icon i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8 ease all;
}

.icon-active {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
}

.dropdown-nav li {
  margin: 0;
}
.dropdown-nav li .link {
  color: black;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active{
transition:  1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-250px);
}
.mobile-nav-enter-to{
transform: translateX(0);
}
</style>
