<template>
  <card class="card-user">
    <div slot="image">
      <div
        class="base-image-input"
        :style="{ 'background-image': `url(${punto.imageData})` }"
        @click="chooseImage"
      >
        <span v-if="!punto.imageData" class="placeholder">Escoge una Imagen</span>
        <input class="file-input" ref="fileInput" type="file" @input="onSelectFile" />
      </div>
    </div>
    <div>
      <div>
        <div class="author">
          <h4 class="title">
            <fg-input
              type="text"
              label="Nombre del Punto"
              v-model="punto.name"
            ></fg-input>
          </h4>
        </div>
        <p class="description text-center">
          <fg-input
            type="text"
            label="Descripción"
            v-model="punto.desc"
          ></fg-input>
        </p>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      punto: {
        name: "El nombre menos esperado",
        desc: "La Descripción más cabrona",
        imageData: "/img/background2.7e949f88.jpg"
      }
    };
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    },
    chooseImage() {
      this.$refs.fileInput.click();
    },
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.punto.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    }
  }
};
</script>
<style scoped>
.base-image-input {
  display: block;
  height: 230px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #e0e0e0;
}
.file-input {
  display: none;
}
</style>
