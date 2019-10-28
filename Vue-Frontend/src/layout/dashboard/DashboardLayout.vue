<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/mapa" name="Mapa" icon="ti-map" />
        <sidebar-link to="/mis-puntos" name="Mis Puntos" icon="ti-search" />
        <sidebar-link to="/nuevo-punto" name="Agregar Nuevo Punto" icon="ti-plus" />
      </template>
      <mobile-menu>
        
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"></dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
//import Mapa from "../../pages/";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
