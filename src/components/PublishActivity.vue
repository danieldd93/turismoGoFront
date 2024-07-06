<template>
  <q-page padding>
    <div class="content">
      <img class="bg-img" src="/src/Image/fondo2.avif" alt="Fondo de página" />
      <div class="container">
        <q-card class="form-card">
          <q-card-section class="info">
            <h4>Publicar Nueva Actividad</h4>
          </q-card-section>

          <q-form @submit.prevent="publishActivity" @reset="resetForm">
            <q-card-section class="form-section">
              <q-input
                v-model="activity.name"
                label="Nombre de la Actividad"
                filled
                required
              />
              <q-input
                v-model="activity.description"
                label="Descripción"
                type="textarea"
                filled
                required
              />
              <q-input
                v-model="activity.location"
                label="Ubicación"
                filled
                required
              />
              <q-input
                v-model="activity.duration"
                label="Duración"
                filled
                required
              />
              <q-input
                v-model="activity.price"
                label="Precio"
                type="number"
                filled
                required
              />
              <q-input
                v-model="activity.companyId"
                label="ID de la Empresa"
                type="number"
                filled
                required
              />
            </q-card-section>

            <q-card-actions align="right">
              <q-btn type="reset" label="Resetear" color="purple" flat />
              <q-btn type="submit" label="Publicar" color="purple" />
            </q-card-actions>
          </q-form>
        </q-card>
      </div>
    </div>

    <!-- Modal para ingresar excursiones -->
    <q-dialog v-model="showBookingModal">
      <q-card>
        <q-card-section>
          <h4>Registrar Excursión</h4>
          <q-form @submit.prevent="saveBooking">
            <q-input
              v-model="booking.date"
              label="Fecha de la Excursión"
              type="date"
              filled
              required
            />
            <q-input
              v-model="booking.numberOfPeople"
              label="Número de Personas"
              type="number"
              filled
              required
            />
            <q-card-actions align="right">
              <q-btn type="submit" label="Guardar Excursión" color="purple" />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { Quasar } from "quasar";
export default {
  name: "PublishActivity",
  data() {
    return {
      activity: {
        name: "",
        description: "",
        location: "",
        duration: "",
        price: 0,
        companyId: 0,
      },
      booking: {
        userId: 1, // Ajustar según la lógica de usuario
        activityId: null, // Se asignará después de publicar la actividad
        date: "",
        numberOfPeople: 0,
      },
      showBookingModal: false, // Controla la visibilidad del modal de booking
    };
  },
  methods: {
    publishActivity() {
      const URL = "/v1/Activity";
      this.$api
        .post(URL, this.activity)
        .then((response) => {
          this.activity = response.data; // Asignar la actividad creada con su ID
          this.booking.activityId = this.activity.id; // Asignar el ID de la actividad al booking
          this.showBookingModal = true; // Mostrar el modal de booking
        })
        .catch((error) => {
          console.error("Error al publicar la actividad:", error);
          this.$q.notify({
            message: "Error al publicar la actividad",
            color: "negative",
            position: "bottom",
            timeout: 5000,
          });
        });
    },
    saveBooking() {
      const bookingData = {
        userId: this.booking.userId,
        activityId: this.booking.activityId, // Usar el ID de la actividad asignado
        date: this.booking.date,
        numberOfPeople: this.booking.numberOfPeople,
      };
      const URL = "/v1/Booking";
      this.$api
        .post(URL, bookingData)
        .then((response) => {
          this.$q.notify({
            message: "Registro grabado exitosamente",
            color: "positive",
            position: "bottom",
            timeout: 5000,
          });
          this.showBookingModal = false; // Ocultar el modal de booking después de guardar
          this.resetForm(); // Opcional: resetear el formulario de actividad
        })
        .catch((error) => {
          console.error("Error al guardar la excursión:", error);
          this.$q.notify({
            message: "Error al guardar la excursión",
            color: "negative",
            position: "bottom",
            timeout: 5000,
          });
        });
    },
    resetForm() {
      this.activity = {
        name: "",
        description: "",
        location: "",
        duration: "",
        price: 0,
        companyId: 0,
      };
      this.booking = {
        userId: 1, // Ajustar según la lógica de usuario
        activityId: null,
        date: "",
        numberOfPeople: 0,
      };
    },
  },
};
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
}

.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #1161ee, #55acee);
  z-index: 0;
  overflow: hidden;
}

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  z-index: -1;
}

.container {
  max-width: 500px;
  width: 100%;
  z-index: 1;
}

.form-card {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.info h4 {
  text-align: center;
  color: purple;
  text-shadow: 1px 1px 0px #fff;
  margin-top: 20px;
}

.form-section {
  padding-top: 0;
}

.q-card-section {
  margin-bottom: 20px;
}

.q-btn {
  margin-left: 10px;
}

.q-input {
  margin-bottom: 10px;
}
</style>
