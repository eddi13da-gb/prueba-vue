<script>
import { useProductosStore } from "../stores/productos"

export default {
  setup(){
    const store = useProductosStore()

    return { store }
  }
}
</script>

<template>
  <header class="header">
    <h1>CATALOGO</h1>
  </header>

  <div class="catalogo">
    <div class="productos">

      <div class="producto" v-for="p in store.productos" :key="p.nombre">
        <h3>{{ p.nombre }}</h3>
        <p>{{ p.precio }}</p>
        <p>Cantidad: {{ p.cantidad }}</p>
      </div>

    </div>

    <router-link to="/" class="volver">
      Volver al inicio
    </router-link>

    <router-link to="/NuevosProductos" class="agregar">
      Agregar nuevo producto
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
  padding:20px;
  text-align:center;
  font-family:Arial;
  padding:100px;
}
.volver{
  display:inline-block;
  margin-left:60px;
  margin-top:20px;
  margin-right: 1450px;
  padding:10px 20px;
  background:#2c3e50;
  color:white;
  text-decoration:none;
  border-radius:6px;
}
.agregar{
  display:inline-block;
  margin-top:20px;
  padding:10px 20px;
  background:#2c3e50;
  color:white;
  text-decoration:none;
  border-radius:6px;
}
</style>