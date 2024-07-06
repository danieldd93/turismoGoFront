<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <!-- Columna izquierda -->
      <div class="col-12 col-md-8">
        <!-- Tarjeta de bienvenida -->
        <q-card class="q-mb-md bg-purple text-white">
          <q-card-section class="text-center">
            <div class="text-h4 q-mb-md">¡Bienvenido a TourismGo!</div>
            <div class="text-h6 q-mb-md">
              Estamos encantados de tenerte aquí,
              <span class="text-bold">{{ email }}</span
              >!
            </div>
          </q-card-section>
        </q-card>

        <!-- Sección de Estadísticas -->
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h5 q-mb-md text-purple">Estadísticas</div>
            <q-card-section class="row q-col-gutter-md">
              <q-card class="col-4 bg-light-purple text-center">
                <q-card-section>
                  <div class="text-subtitle1">Actividades Totales</div>
                  <div class="text-h6 text-bold">123</div>
                </q-card-section>
              </q-card>
              <q-card class="col-4 bg-light-purple text-center">
                <q-card-section>
                  <div class="text-subtitle1">Usuarios Activos</div>
                  <div class="text-h6 text-bold">456</div>
                </q-card-section>
              </q-card>
              <q-card class="col-4 bg-light-purple text-center">
                <q-card-section>
                  <div class="text-subtitle1">Comentarios</div>
                  <div class="text-h6 text-bold">789</div>
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card-section>
        </q-card>

        <!-- Sección de Actividades Recientes -->
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h5 q-mb-md text-purple">Actividades Recientes</div>
            <q-list bordered>
              <q-item
                v-for="(activity, index) in recentActivities"
                :key="index"
                clickable
              >
                <q-item-section>
                  <q-item-label>{{ activity.name }}</q-item-label>
                  <q-item-label caption>{{ activity.date }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
        <!-- Gráfico Doughnut -->
        <div class="q-mb-md">
          <DashboardChart
            title="Distribución de Usuarios por Grupo de Edad"
            type="doughnut"
            :data="ageDistributionData"
            :options="chartOptions"
          />
        </div>
        <!-- Gráfico Pie -->
        <div class="q-mb-md">
          <DashboardChart
            title="Distribución de Actividades por Tipo"
            type="pie"
            :data="activityTypeData"
            :options="chartOptions"
          />
        </div>
      </div>

      <!-- Columna derecha -->
      <div class="col-12 col-md-4">
        <!-- Gráfico de Usuarios Activos por Mes -->
        <div class="q-mb-md">
          <DashboardChart
            title="Usuarios Activos por Mes"
            type="line"
            :data="userActivityData"
            :options="chartOptions"
          />
        </div>
        <!-- Gráfico de Comentarios por Actividad -->
        <div class="q-mb-md">
          <DashboardChart
            title="Comentarios por Actividad"
            type="bar"
            :data="commentActivityData"
            :options="chartOptions"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import DashboardChart from "./DashboardChart.vue";

export default {
  name: "DashboardPage",
  components: {
    DashboardChart,
  },
  data() {
    return {
      email: "",
      recentActivities: [
        { name: "Actividad 1", date: "2024-07-01" },
        { name: "Actividad 2", date: "2024-06-30" },
        { name: "Actividad 3", date: "2024-06-29" },
      ],
      userActivityData: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [
          {
            label: "Usuarios Activos",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            data: [65, 59, 80, 81, 56, 55],
          },
        ],
      },
      commentActivityData: {
        labels: ["Actividad 1", "Actividad 2", "Actividad 3", "Actividad 4"],
        datasets: [
          {
            label: "Comentarios",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            data: [12, 19, 3, 5],
          },
        ],
      },
      ageDistributionData: {
        labels: ["0-18", "19-25", "26-35", "36-45", "46-60", "60+"],
        datasets: [
          {
            label: "Distribución de Usuarios",
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            data: [15, 25, 30, 20, 10, 5],
          },
        ],
      },
      activityTypeData: {
        labels: ["Deporte", "Cultura", "Aventura", "Relajación"],
        datasets: [
          {
            label: "Distribución de Actividades",
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            data: [30, 20, 25, 25],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.email) {
      this.email = userData.email;
    } else {
      this.email = "Usuario";
    }
  },
  methods: {
    goToProfilePage() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
.q-page {
  background-color: #f0f0f0;
  padding: 20px;
}

.q-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.text-h4 {
  font-weight: bold;
}

.q-btn {
  font-weight: bold;
  background-color: #7e57c2;
  color: white;
}

.text-h5 {
  font-weight: bold;
  color: #7e57c2;
}

.bg-purple {
  background-color: #7e57c2;
  color: white;
}

.bg-light-purple {
  background-color: #e1bee7;
}

.text-bold {
  font-weight: bold;
}
</style>
