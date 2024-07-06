<template>
  <q-page class="q-pa-md">
    <q-form @submit="onSubmit">
      <q-input
        filled
        v-model="activity.name"
        label="Nombre de la Actividad"
        required
      />
      <q-input
        filled
        v-model="activity.type"
        label="Tipo de Actividad"
        required
      />
      <q-input
        filled
        v-model="activity.description"
        label="Descripción"
        required
      />
      <q-input
        filled
        v-model="activity.date"
        label="Fecha"
        type="date"
        required
      />
      <q-btn type="submit" label="Registrar" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "NewActivity",
  data() {
    return {
      activity: {
        name: "",
        type: "",
        description: "",
        date: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      await axios.post("/api/activities", this.activity);
      this.$router.push("/activities");
    },
  },
};
</script>
