<template>
  <q-page class="results-page">
    <div class="header">
      <q-img :src="getImageUrl(activity.name)" class="header-img">
        <div class="header-text">
          <h1>{{ activity.name }}</h1>
          <p class="subtitle">{{ activity.description }}</p>
        </div>
        <div class="review-section">
          <div class="review-header">
            <h3 class="text-purple">Déjanos tu comentario y Valoramos</h3>
            <div class="rating">
              <q-rating v-model="rating" max="5" color="purple" />
              <span class="rating-value text-purple">{{
                rating.toFixed(1)
              }}</span>
              <span class="review-count">(12.4k Reviews)</span>
            </div>
          </div>
          <q-input
            v-model="comment"
            label="Escribe tu comentario..."
            outlined
            class="q-mt-md"
          />
          <q-btn
            label="Registrar"
            color="purple"
            @click="submitReview"
            class="q-mt-md"
          />
        </div>
      </q-img>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "ResultsPage",
  data() {
    return {
      activity: {},
      rating: 4,
      comment: "",
    };
  },
  methods: {
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
      return images[activityName] || "path/to/default_image.jpg";
    },
    fetchActivity() {
      const activityId = this.$route.query.activityId;
      axios
        .get(`http://localhost:5222/api/v1/Activity/${activityId}`)
        .then((response) => {
          this.activity = response.data;
        })
        .catch((error) => {
          console.error("Error fetching activity:", error);
        });
    },
    submitReview() {
      const reviewData = {
        userId: 1, // O el ID del usuario actual, si lo tienes disponible en tu aplicación
        activityId: this.activity.id, // Asegúrate de que `activity.id` tiene el ID correcto de la actividad
        comment: this.comment,
        rating: this.rating,
      };

      // Depuración: Imprimir los datos en la consola
      console.log("Review Data to be submitted:", reviewData);

      axios
        .post("http://localhost:5222/api/v1/Review", reviewData)
        .then((response) => {
          console.log("Review submitted:", response.data);
          alert("Review submitted successfully!");
          // Puedes agregar lógica adicional aquí, como limpiar el formulario o actualizar la interfaz de usuario
        })
        .catch((error) => {
          console.error(
            "Error submitting review:",
            error.response ? error.response.data : error.message
          );
          alert("Failed to submit review.");
        });
    },
  },
  created() {
    this.fetchActivity();
  },
};
</script>

<style scoped>
.results-page {
  padding: 0;
  margin: 0;
}

.header {
  position: relative;
  width: 100%;
  height: 700px;
}

.header-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-text {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.header-text h1 {
  font-size: 3rem;
  margin: 0;
}

.subtitle {
  font-size: 1.2rem;
  margin: 5px 0;
}

.review-section {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.review-header {
  text-align: center;
}

.rating {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.rating-value {
  font-size: 1.5rem;
  margin-left: 10px;
}

.review-count {
  margin-left: 10px;
  color: gray;
}
</style>
