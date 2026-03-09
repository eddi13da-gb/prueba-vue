<script>
export default {
  name: "Catalogo",
  data() {
    return {
      productos: []
    }
  }
}
</script>
<template>
  <header class="header">
      <h1>CATALOGO</h1>
    </header>
<div class="catalogo">
    <div class="productos">

      <div class="producto" v-for="p in productos" :key="p.id">
        <img :src="p.imagen" alt="">
        <h3>{{ p.nombre }}</h3>
        <p>{{ p.precio }}</p>
      </div>

    </div>

    <router-link to="/" class="volver">
      Volver al inicio
    </router-link>

  </div>
</template>
<style>
.productos{
  display:flex;
  justify-content:center;
  gap:90px;
  flex-wrap:wrap;
  margin-top:50px;
  text-align:center;
}

.producto{
  background:white;
  border:1px solid #ddd;
  border-radius:10px;
  padding:20px;
  width:180px;
  box-shadow:0 2px 5px rgba(0,0,0,0.1);
}
.header{
  background:#2c3e50;
  color:white;
  padding:70px;
  text-align:center;
  font-family:Arial;
  padding:100px;
}

.producto img{
  width:100%;
}

.volver{
  display:inline-block;
  margin-top:20px;
  padding:10px 20px;
  background:#2c3e50;
  color:white;
  text-decoration:none;
  border-radius:6px;
}
</style>