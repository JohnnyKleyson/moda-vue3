<template>
  <div>
    <div class="contact-container" id="contact">
      <div class="formulario">
        <div class="contact-text">
          <img src="../assets/cabide-2.png" class="hero-logo" />
          <p>Sou marca do atacado</p>
          <h2>
            <span>Venda</span> através do <span>Moda Todo Dia</span>,<br />
            entre em contato.
          </h2>
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./Form";

export default {
  name: "Contact",
  components: {
    Form,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

.contact-container {
  padding-top: 20px;
  padding-bottom: 20px;
  background: #f6f6f6;
  width: 100%;
  height: auto;
}
.formulario {
  justify-content: center;
  align-items: center;
  display: flex;
}
.contact-text p {
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  margin-top: 20px;
  font-weight: 600;
  color: #e62e3a;
}
.contact-text {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.contact-text h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 22px;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: rgb(26, 25, 25);
  padding: 10px;
  text-align: center;
}
.contact-text span {
  color: #ec1624;
}
</style>
