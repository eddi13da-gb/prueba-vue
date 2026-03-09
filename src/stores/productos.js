import { defineStore } from "pinia";

export const useProductosStore = defineStore("productos", {
  state: () => ({
    producto: {
      nombre: "",
      precio: "",
      cantidad: ""
    },
    productos: []
  }),

  actions: {
    agregarProducto() {
      this.productos.push({ ...this.producto })

      this.producto.nombre = ""
      this.producto.precio = ""
      this.producto.cantidad = ""
    }
  }
});