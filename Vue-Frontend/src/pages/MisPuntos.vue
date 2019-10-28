<template>
  <div>
    <div v-for="(punto, index) in misPuntos" :key="index">
      <div>
        <chart-card
          :title="punto.nombre"
          :sub-title="punto.descripcion"
          :chart-data="punto.data"
          chart-type="Pie"
        >
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Libre
            <i class="fa fa-circle text-warning"></i> Ocupado
          </div>
        </chart-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ChartCard from "@/components/Cards/ChartCard.vue";
export default {
  components: {
    ChartCard
  },
  data() {
    return {
      misPuntos: [
        {
          nombre: "nombre mal escrito",
          descripcion: "La peor descripcion",
          capacidad: 60,
          data: { labels: [], series: [40, 60] },
          options: {}
        },
        {
          nombre: "nombre mal escrito 2",
          descripcion: "La peor descripcion",
          capacidad: 60,
          data: { labels: [], series: [40, 60] },
          options: {}
        }
      ]
    };
  },
  methods: {}
};
</script>
