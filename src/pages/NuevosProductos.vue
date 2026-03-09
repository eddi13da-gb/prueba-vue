<template>
  <div class="contenedor">

    <h2>Agregar Producto</h2>

    <form @submit.prevent="agregarProducto">

      <label>Nombre del producto</label>
      <input
        type="text"
        v-model="producto.nombre"
        required
      />

      <label>Precio</label>
      <input
        type="number"
        v-model="producto.precio"
        required
      />

      <label>Cantidad</label>
      <input
        type="number"
        v-model="producto.cantidad"
        required
      />

      <button type="submit">Agregar</button>

    </form>

    <h3>Lista de productos</h3>

    <ul>
      <li v-for="(item, index) in productos" :key="index">
        {{ item.nombre }} - ${{ item.precio }} - Cantidad: {{ item.cantidad }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "ProductoForm",

  data() {
    return {
      producto: {
        nombre: "",
        precio: "",
        cantidad: ""
      },
      productos: []
    }
  },

  methods: {
    agregarProducto() {

      this.productos.push({ ...this.producto })

      this.producto.nombre = ""
      this.producto.precio = ""
      this.producto.cantidad = ""
    }
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