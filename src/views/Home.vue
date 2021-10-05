<template>
  <Hero />
  <Features />
  <Contact />
</template>

<script>
import Hero from "../components/Hero";
import Features from "../components/Features";
import Contact from "../components/Contact.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Features,
    Contact,
  },
};
</script>
