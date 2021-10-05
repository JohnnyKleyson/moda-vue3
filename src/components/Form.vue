<template>
  <div>
    <form class="form">
      <input type="text" placeholder="Nome" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Telefone" required />
      <textarea placeholder="Mensagem"></textarea>
      <button class="features-btn">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style>
textarea {
  width: 360px;
  height: 100px;
  resize: none;
  background-color: #eeeeee;
  border-radius: 10px;
  border: none;
  padding: 10px;
  outline: none;
}
input {
  outline: none;
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 300px;
  border: none;
  background-color: #eeeeee;
  padding: 10px;
}
form {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
}
</style>
