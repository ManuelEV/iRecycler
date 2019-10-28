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
  methods: {
    list(){

      const url = this.ruta+"/puntos";
      //console.log(url);

      let me = this;

      axios.get(url)
        .then(function (r) {


          const response = r.data;

          console.log(response);

          for (const i in response){

            const lat = response[i].latitud;
            const long = response[i].longitud;



            const nombre = response[i].nombre;
            const descripcion = response[i].descripcion;

            const punto = {
              nombre: nombre,
              descripcion: descripcion,
              capacidad: 60,
              data: { labels: [], series: [40, 60] },
              options: {}
            };

            me.misPuntos.push(punto);

          }

        });
    }
  },
  mounted(){
    this.list();
  }
};
</script>
