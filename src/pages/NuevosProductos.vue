<template>
   <header class="header">
    <h1>Agregar productos</h1>
  </header>

  <div class="contenedor">

    <h2>Agregar Producto</h2>

    <form @submit.prevent="store.agregarProducto">

      <label>Nombre del producto</label>
      <input
        type="text"
        v-model="store.producto.nombre"
        required
      />

      <label>Precio</label>
      <input
        type="number"
        v-model="store.producto.precio"
        required
      />

      <label>Cantidad</label>
      <input
        type="number"
        v-model="store.producto.cantidad"
        required
      />

      <button type="submit">Agregar</button>

    </form>
  </div>
</template>

<script>
import { useProductosStore } from "../stores/productos"

export default {

  setup(){
    const store = useProductosStore()

    return { store }
  }

}
</script>

<style scoped>

.contenedor{
  font-family: Arial;
  max-width: 400px;
  margin: 40px auto;
}

form{
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
}

label{
  margin-top: 10px;
}

input{
  padding: 8px;
  margin-top: 5px;
}

button{
  margin-top: 15px;
  padding: 10px;
  background: #42b883;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

ul{
  margin-top: 20px;
  list-style: none;
  padding: 0;
}

li{
  background: #eaeaea;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

</style>