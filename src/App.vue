<template>
  <div>
    <!--<Header />-->
    <Navigation />
    <router-view />
    <Footer footerText="Moda Todo Dia - Todos os Direitos Reservados" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Navigation,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
</style>
