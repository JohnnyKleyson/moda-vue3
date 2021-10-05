<template>
  <div>
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-image">
          <img src="../assets/hero.svg" class="hero-image" />
        </div>
        <div class="hero-text">
          <img src="../assets/logo-banner.png" class="hero-logo" />
          <p>Moda Todo Dia</p>
          <h2>
            Conectando marcas de <span> atacado</span><br />
            e lojistas <span>apaixonados</span> por moda.
          </h2>
          <button class="hero-btn" >
            <i class="fab fa-instagram"></i> Instagram
          </button>
          <button class="hero-btn">
            <i class="fab fa-whatsapp"></i> Whatsapp
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

.hero-container {
  width: 100%;
  background: linear-gradient(to left, #bb3e63, #f79c81);
  min-height: 600px;
}
.hero-content {
  justify-content: center;
  align-items: center;
  display: flex;
}
.hero-image {
  margin-top: 10px;
  width: 500px;
  height: auto;
}
.hero-logo {
  width: 65px;
  height: 50px;
}
.hero-text p {
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  margin-top: 20px;
  font-weight: 400;
  color: #fff;
 
}
.hero-text {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.hero-text h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  letter-spacing: 1px;
 font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #ffffffb3;
  padding: 10px;
  text-align: center;
}
.hero-text span {
  color: #fff;
}

.hero-btn {
  letter-spacing: 2px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  margin-top: 10px;
  padding: 6px 30px;
  font-size: 16px;
  border: 1px solid white;
  background: transparent;
  color: #ffffff;
  border-radius: 100px;
  transition: 0.3s ease;
}
.hero-btn:hover {
  color: #ffffffb3;
}

@media screen and (max-width: 750px) {
  .hero-image {
    display: none;
  }
  .hero-container {
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    height: 100%;
  }
}
</style>
