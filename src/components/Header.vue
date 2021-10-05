<template>
  <div>
    <header>
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo-topo.png" />
        </router-link>
      </div>
      <nav>
        <ul class="links">
          <router-link to="/lojista">Sou Lojista</router-link>
          <router-link to="/sobre">Sobre</router-link>
          <button class="btn">Baixe Já</button>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "PrimeiroComponente",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

header {
  background: linear-gradient(to left, #bb3e63, #f79c81);
  justify-content: space-around;
  display: flex;
  align-items: center;
  height: auto;
  padding: 10px;
}
.links,
a {
  transition: 0.3s ease;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  text-decoration: none;
  list-style: none;
  color: #ffffffb3;
  margin: 10px;
}
.links,
a:hover {
  color: white;
}
.btn {
  color: #ffffffb3;
  border: 1px solid #fff;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 11px;
  cursor: pointer;
  padding: 10px;
  transition: 0.3s ease;
  border-radius: 300px;
}
.btn:hover {
  color: white;
}
.logo img {
  color: white;
  cursor: pointer;
  width: 50px;
  height: auto;
}
</style>
