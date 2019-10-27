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
export default {
  components: {
    FormularioPunto,
    KeyWords,
    Location
  },
  methods:{
    addNewPoint(){
      console.log(this.$refs.formPunto.punto);
      console.log(this.$refs.keyCard.keywords);
      console.log(this.$refs.locCard.lat);
      console.log(this.$refs.locCard.lng);
    }
  }
};
</script>
<style>
</style>
