<template>
  <q-page class="home-page">
    <q-carousel
      v-model="slide"
      animated
      infinite
      swipeable
      arrows
      control-color="white"
      autoplay
      height="700px"
    >
      <q-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :name="index"
        :img-src="image.src"
      />
    </q-carousel>

    <div class="overlay-content">
      <div class="text-container">
        <h1 class="text-title">Encuentra tu siguiente Destino</h1>
      </div>
      <div class="selectors-container row">
        <q-select
          filled
          v-model="location"
          label="Seleccionar una actividad"
          use-input
          input-debounce="300"
          :options="filteredLocations"
          @filter="filterLocations"
          dense
          class="col-3"
        />
        <q-select
          outlined
          v-model="category"
          label="Empresa"
          :options="categories"
          dense
          class="col-3"
        />
        <q-select
          outlined
          v-model="persons"
          label="Personas"
          :options="personsOptions"
          dense
          class="col-3"
        />
        <q-btn label="Buscar" color="purple" class="q-ml-md" @click="search" />
      </div>
    </div>

    <!-- Nueva Sección -->
    <div class="why-buy-section">
      <div class="container mt-5">
        <h3 class="text-center text-purple mb-4">
          ¿POR QUÉ COMPRAR EN NUESTRA WEB?
        </h3>
        <div class="row text-center">
          <div class="col-md-3 col-sm-6 mb-4">
            <i
              class="bi bi-tags-fill mb-2"
              style="font-size: 2rem; color: #e83e8c"
            ></i>
            <p>Mejores tarifas</p>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <i
              class="bi bi-check2-square mb-2"
              style="font-size: 2rem; color: #e83e8c"
            ></i>
            <p>Elige tu asiento</p>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <i
              class="bi bi-arrow-right-circle mb-2"
              style="font-size: 2rem; color: #e83e8c"
            ></i>
            <p>Saltar las líneas</p>
          </div>
          <div class="col-md-3 col-sm-6 mb-4">
            <i
              class="bi bi-credit-card mb-2"
              style="font-size: 2rem; color: #e83e8c"
            ></i>
            <p>Mejores métodos de pago</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de Servicios -->
    <div class="services-section q-pa-md">
      <h3 class="text-center text-purple q-mb-md">ACTIVIDADES</h3>
      <div class="row q-col-gutter-md q-mt-md">
        <div
          v-for="activity in activities"
          :key="activity.id"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
        >
          <q-card class="bg-purple-6 text-white">
            <q-img
              :src="getImageUrl(activity.name)"
              alt="activity.name"
              class="q-img-cover"
            />
            <q-card-section>
              <div class="text-h6">{{ activity.name }}</div>
              <div class="text-subtitle1">{{ activity.description }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  name: "HomePage",
  data() {
    return {
      slide: 0,
      images: [
        { src: "public/images/mancora4.jpg" },
        { src: "public/images/cusco2.jpg" },
        { src: "public/images/huaraz.jpg" },
      ],
      allLocations: [],
      filteredLocations: [],
      location: null,
      category: null,
      persons: null,
      categories: [],
      personsOptions: ["1", "2", "3", "4", "5+"],
      activities: [],
    };
  },
  methods: {
    search() {
      const selectedActivity = this.activities.find(
        (activity) => activity.location === this.location
      );
      if (selectedActivity) {
        this.$router.push({
          path: "/activityDetail",
          query: {
            activityId: selectedActivity.id,
          },
        });
      } else {
        console.error("No activity found for the selected location");
      }
    },
    filterLocations(val, update, abort) {
      console.log("Filtering locations with value:", val);
      if (val === "") {
        update(() => {
          this.filteredLocations = [...this.allLocations];
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.filteredLocations = this.allLocations.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
        console.log("Filtered locations:", this.filteredLocations);
      });
    },
    fetchLocations() {
      axios
        .get("http://localhost:5222/api/v1/Activity")
        .then((response) => {
          console.log("API response:", response.data);
          this.allLocations = response.data.map(
            (activity) => activity.location
          );
          this.filteredLocations = [...this.allLocations]; // Para mostrar todas las ubicaciones inicialmente
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
        });
    },
    fetchCategories() {
      axios
        .get("http://localhost:5222/api/v1/Company")
        .then((response) => {
          console.log("API response (categories):", response.data);
          this.categories = response.data.map((company) => company.name);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    getImageUrl(activityName) {
      const images = {
        "Mountain Biking": "public/images/Mountain Biking.webp",
        "River Kayaking": "public/images/River Kayaking.jpg",
        "Cultural Tour": "public/images/Cultural Tour.jpg",
        "Forest Hiking": "public/images/Forest Hiking.jpg",
        "Rock Climbing": "public/images/Rock Climbing.jpg",
        "Gastronomic Tour": "public/images/Gastronomic Tour.jpg",
        "Beach Surfing": "public/images/Beach Surfing.jpg",
        "Balloon Ride": "public/images/Balloon Ride.jpg",
        "Night Hiking": "public/images/Night Hiking.jpeg",
        "Photo Safari": "public/images/Photo Safari.jpg",
      };
      return images[activityName] || "public/images/Photo Safari.jpg";
    },
    fetchActivities() {
      axios
        .get("http://localhost:5222/api/v1/Activity")
        .then((response) => {
          console.log("API response (activities):", response.data);
          this.activities = response.data;
        })
        .catch((error) => {
          console.error("Error fetching activities:", error);
        });
    },
  },
  created() {
    console.log("Component created");
    console.log("data:", this.$data);
    this.fetchLocations();
    this.fetchCategories();
    this.fetchActivities();
  },
  watch: {
    location(newVal) {
      console.log("Location changed to:", newVal);
      this.filteredLocations = [...this.allLocations];
    },
  },
};
</script>

<style scoped>
.home-page {
  padding: 0;
  margin: 0;
  position: relative;
}

.q-carousel {
  width: 100%;
  max-width: 100%;
}

.overlay-content {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-top: -500px;
}

.text-container {
  margin-bottom: 20px;
}

.text-title {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.text-subtitle {
  font-size: 1.2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}

.selectors-container {
  background: rgba(255, 255, 255, 1);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  margin-top: 20px;
}

.selectors-container > * {
  margin: 0 10px;
}

.why-buy-section {
  position: relative;
  width: 100%;
  text-align: center;
  background-color: #f9f9f9;
  padding: 40px 20px;
  margin-top: 20px;
}

.why-buy-section h2 {
  color: #5a2d82;
  margin-bottom: 20px;
}

.why-buy-items {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.why-buy-item {
  margin: 20px;
  text-align: center;
}

.why-buy-item i {
  font-size: 2rem;
  color: #e83e8c;
  margin-bottom: 10px;
}

.why-buy-item p {
  color: #333;
  font-size: 16px;
  margin: 0;
}

.services-section {
  margin-top: 50px;
}

.card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 200px;
  object-fit: cover;
}

.card-body {
  text-align: center;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
  color: #555;
}
</style>
