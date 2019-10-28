<template>

  <div class="row map">
    <l-map :zoom="zoom" :center="center" @click="addMarker">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker">
        <l-popup>
          <div @click="showLongText">
            I am a popup
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
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
    LPolyline,
    LLayerGroup,
    LPopup,
    LControl
  } from "vue2-leaflet";

  import axios from 'axios';

  export default {
    name: "MultiMap",
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPolyline,
      LLayerGroup,
      LPopup,
      LControl
    },
    data() {
      return {
        zoom:13,
        center: L.latLng(-38.7396500, -72.5984200),
        url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(-38.7396500, -72.5984200),
        showParagraph: false,
        markers: []
      }
    },
    methods: {
      list(){
        console.log(this.ruta);
        console.log("SADASDSD");
      },
      showLongText() {
        this.showParagraph = !this.showParagraph;
      },
      innerClick() {
        alert("Click!");
      },
      addMarker(event){
        this.markers = [];
        this.markers.push(event.latlng);
        console.log(event.latlng.lat);
        console.log(event.latlng.lng);

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
    },
    mounted(){
      this.list();
    }

  };
</script>

<style>
  .map {
    height: 95vh;
  }

</style>
