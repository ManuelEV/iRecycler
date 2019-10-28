<template>

  <div class="row map">
    <l-map :zoom="zoom" :center="center" @click="addMarker">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="addM, index in markers" :lat-lng="addM">

      </l-marker>
      <l-control class="example-custom-control">
        <div class="text-center">
          <p-button type="info"
                    @click.native.prevent="currentLocation">
            Ubicación actual
          </p-button>
        </div>
      </l-control>
    </l-map>
  </div>


</template>

<script>
  import { latLng, latLngBounds } from "leaflet";
  import {
    LMap,
    LTileLayer,
    LMarker,
    LControl
  } from "vue2-leaflet";


  export default {
    name: "MultiMap",
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LControl
    },
    data() {
      return {
        zoom:13,
        center: L.latLng(-38.7396500, -72.5984200),
        url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        markers: [],
        lat: null,
        lng: null
      }
    },
    methods: {

      addMarker(event){
        this.markers = [];
        this.markers.push(event.latlng);
        //////////////datos a enviar////////////////
        this.lat = event.latlng.lat;
        this.lng = event.latlng.lng;
        ///////////////////////////////////////////
        console.log(this.lat);
        console.log(this.lng);
      },
      mostrarUbicacion (ubicacion) {
        const lng = ubicacion.coords.longitude;
        const lat = ubicacion.coords.latitude;
        console.log(`longitud: ${ lng } | latitud: ${ lat }`);
        this.center = L.latLng(lat, lng);
      },
      currentLocation(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.mostrarUbicacion);
        }else{
          alert("Tu navegador no soporta esto")
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
