<template>
  <div class="lojista-container">
    <div class="aviso-container">
      <h1>{{conteudo}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avisos",
  props: {
    conteudo: String,
  },
};
</script>

<style scoped>
.lojista-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to left, #bb3e63, #f79c81);
  height: 100vh;
  width: 100%;
}
.aviso-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
}
</style>
