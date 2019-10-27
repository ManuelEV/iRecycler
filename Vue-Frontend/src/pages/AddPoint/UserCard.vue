<template>
  <card class="card-user">
    <div slot="image">
      <div
        class="base-image-input"
        :style="{ 'background-image': `url(${imageData})` }"
        @click="chooseImage"
      >
        <span v-if="!imageData" class="placeholder">Choose an Image</span>
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
              placeholder="Paper dashboard"
              v-model="user.company"
            ></fg-input>
          </h4>
        </div>
        <p class="description text-center">
          <fg-input
            type="text"
            label="Descripción"
            placeholder="Paper dashboard"
            v-model="user.company"
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
      imageData: "/img/base-point.c7dddeb5.jpg",
      details: [
        {
          title: "12",
          subTitle: "Files"
        },
        {
          title: "2GB",
          subTitle: "Used"
        },
        {
          title: "24,6$",
          subTitle: "Spent"
        }
      ],
      user: {
        company: "Paper Dashboard",
        username: "michael23",
        email: "",
        firstName: "Chet",
        lastName: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
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
          this.imageData = e.target.result;
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
  height: 200px;
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
