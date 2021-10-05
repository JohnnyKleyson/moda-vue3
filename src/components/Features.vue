<template>
  <div>
    <div class="features-container" id="features">
      <div class="features-content">
        <div class="features-text">
          <img src="../assets/cabide-2.png" class="hero-logo" />
          <p>Sou lojista</p>
          <h2>Encontre marcas de atacado e dê um <span>match</span>!</h2>
          <button class="features-btn">
            <i class="fas fa-download"></i> Baixe Agora
          </button>
        </div>
        <div class="features-image">
          <img src="../assets/app.svg" class="features-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

.features-container {
  padding-top: 20px;
  padding-bottom: 20px;
  background: #eeeeee;
  width: 100%;
  min-height: 600px;
}
.features-content {
  justify-content: center;
  align-items: center;
  display: flex;
}
.features-image {
  margin-top: 10px;
  width: 500px;
  height: auto;
}
.features-logo {
  width: 65px;
  height: 50px;
}
.features-text p {
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  margin-top: 20px;
  font-weight: 600;
  color: #e62e3a;
}
.features-text {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.features-text h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: rgb(26, 25, 25);
  padding: 10px;
  text-align: center;
}
.features-text span {
  color: #ec1624;
}

.features-btn {
  letter-spacing: 2px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  margin-top: 10px;
  padding: 6px 30px;
  font-size: 16px;
  border: none;
  background: #e62e3a;
  color: #ffffff;
  border-radius: 100px;
  transition: 0.3s ease;
}
.features-btn:hover {
  color: #ffffffb3;
}

@media screen and (max-width: 700px) {
  .features-image {
    display: none;
  }
  .features-container {
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    height: 100%;
  }
}
</style>
