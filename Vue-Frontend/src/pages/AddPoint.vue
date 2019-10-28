<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-5 col-md-6">
        <formulario-punto ref="formPunto"></formulario-punto>
        <key-words ref="keyCard"></key-words>
        <location ref="locCard"></location>
      </div>
    </div>
    <div class="row justify-content-center">
      <card class="card">
        <button class="btn btn-info" type="button" @click="addNewPoint">Agregar Nuevo Punto</button>
      </card>
    </div>
  </div>
</template>
<script>
import FormularioPunto from "./AddPoint/FormularioPunto.vue";
import KeyWords from "./AddPoint/KeyWords.vue";
import Location from "./AddPoint/Location.vue";

import axios from "axios";

export default {
  components: {
    FormularioPunto,
    KeyWords,
    Location
  },
  methods: {
    addNewPoint() {
      const qs = require("qs");
      axios
        .post(
          "http://localhost:7070/puntos",
          qs.stringify({
            nombre: this.$refs.formPunto.punto.name,
            descripcion: this.$refs.formPunto.punto.desc,
            latitud: this.$refs.locCard.lat,
            longitud: this.$refs.locCard.lng
          })
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err.response);
        });
      this.$refs.formPunto.punto = {
        name: "",
        desc: "",
        imageData: null
      };
      this.$refs.keyCard.keywords = [];
      this.$refs.locCard.lng = null;
      this.$refs.locCard.lat = null;
    }
  }
};
</script>
<style>
</style>
