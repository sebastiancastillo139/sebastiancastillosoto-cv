<template>
  <div>
    <section class="align-text-middle text-center error_section">
      <h1 class="title">ERROR</h1>
      <h2>
        TAL PARECE QUE NO ESTÁS AUTORIZADO PARA ESTAR AQUÍ
      </h2>
      <b-button variant="warning" class="my-3">
        <router-link to="/">VUELVE AL MENÚ PRINCIPAL</router-link>
      </b-button>
    </section>
  </div>
</template>

<style scoped>
.error_section {
  margin-top: 0%;
  padding: 10px;
  color: #fff;
  min-height: calc(100vh - 10vh);
}
.title {
  font-weight: 700;
  padding-top: 120px;
}
.face_img {
  width: 300px;
  padding: 20px;

}
a {
  text-decoration: none;
  color: inherit
}
</style>
