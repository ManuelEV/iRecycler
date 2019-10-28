import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import AddPoint from "@/pages/AddPoint.vue";
import Mapa from "@/pages/Mapa";
import MisPuntos from "@/pages/MisPuntos";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "nuevo-punto",
        name: "nuevo punto",
        component: AddPoint
      },
      {
        path: "mapa",
        name: "mapa",
        component: Mapa
      }, 
      {
        path: "mis-puntos",
        name: "mis puntos",
        component: MisPuntos
      },
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
