<template>
  <card class="card-user">
    <div class="row justify-content-center" v-if="mMapa">
      <button class="btn btn-success" @click="mostrarMapa">Mostrar Mapa</button>
    </div>
    <div v-else class="map">
      <l-map :zoom="zoom" :center="center" @click="addMarker">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="(addM, index) in markers" :lat-lng="addM" :key="index"></l-marker>
      </l-map>
    </div>
    <br>
    <div v-if="!mMapa" class="row justify-content-center">
      <button class="btn btn-success" @click="mostrarMapa">Confirmar Posición</button>
    </div>
  </card>
</template>

<script>
import { latLng, latLngBounds } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "MultiMap",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      mMapa: true,
      zoom: 13,
      center: L.latLng(-38.73965, -72.59842),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markers: [],
      lat: null,
      lng: null
    };
  },
  methods: {
    addMarker(event) {
      this.markers = [];
      this.markers.push(event.latlng);
      //////////////datos a enviar////////////////
      this.lat = event.latlng.lat;
      this.lng = event.latlng.lng;
      ///////////////////////////////////////////
      console.log(this.lat);
      console.log(this.lng);
    },
    mostrarMapa() {
      if (this.mMapa) {
        this.mMapa = false;
      } else {
        this.mMapa = true;
      }
    }
  }
};
</script>

<style>
.map {
  height: 95vh;
}
</style>
