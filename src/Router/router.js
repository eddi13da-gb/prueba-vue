import { createRouter, createWebHistory } from "vue-router"
import Home2 from "../pages/home2.vue";
import Catalogo from "../pages/catalogo.vue";
import NuevosProductos from "../pages/NuevosProductos.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
   {
    path: "/",
    name: "Home2",
    component:Home2
   },
   {
    path: "/Catalogo",
    name: "Catalogo",
    component:Catalogo
   },
   {
    path: "/NuevosProductos",
    name: "NuevosProductos",
    component:NuevosProductos
   }


    ]
})
export default router;