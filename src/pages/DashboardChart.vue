<template>
  <q-card class="q-mb-md" style="width: 100%; height: 500px">
    <q-card-section style="height: 100%">
      <div class="text-h5 q-mb-md">
        {{ title }}
      </div>
      <div style="position: relative; height: calc(100% - 24px)">
        <canvas ref="chartCanvas" style="height: 100%"></canvas>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "DashboardChart",
  props: {
    title: String,
    type: String,
    data: Object,
    options: Object,
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      if (this.$refs.chartCanvas) {
        new Chart(this.$refs.chartCanvas, {
          type: this.type,
          data: this.data,
          options: this.options,
        });
      }
    },
  },
};
</script>

<style scoped>
.q-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
