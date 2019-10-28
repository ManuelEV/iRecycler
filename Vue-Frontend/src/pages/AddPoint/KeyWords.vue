<template>
  <card class="card" :title="title">
    <div v-for="(word,index) in keywords" :key="index">
      <p class="btn btn-primary">{{word}}</p>
    </div>
    <div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Nueva Palabra Clave</span>
        </div>
        <input type="text" class="form-control" v-model="newtag" />
        <div class="input-group-append">
          <button
            class="btn btn-primary"
            type="button"
            id="button-addon2"
            @click="addKeyWord"
          >Agregar</button>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      newtag: "",
      title: "Palabras Claves",
      keywords: []
    };
  },
  methods: {
    addKeyWord() {
      if (this.newtag != "") {
        this.keywords.push(this.newtag);
        this.newtag = "";
      }
    }
  }
};
</script>
<style>
</style>
