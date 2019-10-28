<template>
  <div class="row" v-for="(punto, index) in misPuntos" :key="index">
    <chart-card
      :title="punto.nombre"
      :sub-title="punto.descripcion"
      :chart-data="punto.data"
      chart-type="Pie"
    >
      <span slot="footer">
        <i class="ti-timer"></i> Campaign set 2 days ago
      </span>
      <div slot="legend">
        <i class="fa fa-circle text-info"></i> Open
        <i class="fa fa-circle text-danger"></i> Bounce
        <i class="fa fa-circle text-warning"></i> Unsubscribe
      </div>
    </chart-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      misPuntos: [
        {
          nombre: "nombre mal escrito",
          capacidad: 50,
          data: { labels: ["Ocupado", "No Ocupado"], series: [50, 50] }
        }
      ]
    };
  },
  methods: {}
};
</script>