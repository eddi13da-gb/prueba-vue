<script>
export default {
  name: "Home",
  data() {
    return {
      empresa: "VARIEDADES GS"
    }
  }
}
</script>
<template>
    <div class="home">
    <header class="header">
      <h1>{{ empresa }}</h1>
    </header>

    <div class="contenido">
      <h2>Bienvenido a nuestras pagina</h2>
      <h3>GRACIAS POR VISITARNO!</h3>
      <p>Explora nuestro catálogo de productos</p>
      <router-link to="/catalogo" class="boton">
        Ver Catálogo
      </router-link>
    </div>
  </div>
</template>
<style>
.home{
  text-align:center;
  font-family: Arial;
}

.header{
  background:#2c3e50;
  color:white;
  padding:40px;
}

.contenido{
  margin-top:100px;
}

.boton{
  padding:15px 25px;
  background:#3498db;
  margin-top: 200px;
  color:white;
  text-decoration:none;
  border-radius:8px;
  display:inline-block;
}

.boton:hover{
  background:#2980b9;
}
</style>