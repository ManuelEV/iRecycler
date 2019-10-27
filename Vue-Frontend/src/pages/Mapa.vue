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
    LPopup
  } from "vue2-leaflet";


  export default {
    name: "MultiMap",
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPolyline,
      LLayerGroup,
      LPopup
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
      }
    }

  };
</script>

<style>
  .map {
    height: 95vh;
  }
</style>
