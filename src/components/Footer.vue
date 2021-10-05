<template>
  <div>
    <footer>
      <p>{{footerText}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props:{
    footerText: String
  }
};
</script>

<style>
footer {
  background: linear-gradient(to left, #bb3e63, #f79c81);
  text-align: center;
  font-size: 1rem;
  font-family: futuraBold;
  color: #fff;
  padding: 10px;
}
</style>
