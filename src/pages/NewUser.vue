<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6" color="green">Agregar Nuevo Usuario</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="handleSubmit" class="q-pa-md">
          <q-input
            v-model="user.email"
            label="Email"
            type="email"
            filled
            :rules="[(val) => !!val || 'Email es obligatorio']"
          />
          <q-input
            v-model="user.password"
            label="Contraseña"
            type="password"
            filled
            :rules="[(val) => !!val || 'Contraseña es obligatoria']"
          />
          <q-input
            v-model="user.firstName"
            label="Nombre"
            filled
            :rules="[(val) => !!val || 'Nombre es obligatorio']"
          />
          <q-input
            v-model="user.lastName"
            label="Apellido"
            filled
            :rules="[(val) => !!val || 'Apellido es obligatorio']"
          />
          <q-input
            v-model="user.country"
            label="País"
            filled
            :rules="[(val) => !!val || 'País es obligatorio']"
          />
          <q-input
            v-model="user.dateOfBirth"
            label="Fecha de Nacimiento"
            type="date"
            mask="date"
            filled
            :rules="[(val) => !!val || 'Fecha de nacimiento es obligatoria']"
          />
          <q-input
            v-model="user.address"
            label="Dirección"
            filled
            :rules="[(val) => !!val || 'Dirección es obligatoria']"
          />
          <div class="q-mt-md">
            <q-btn type="submit" label="Registrar Usuario" color="purple" />
            <q-btn label="Limpiar" type="reset" color="secondary" flat />
          </div>
        </q-form>
      </q-card-section>

      <q-card-section
        v-if="notification.message"
        :class="notification.success ? 'text-positive' : 'text-negative'"
      >
        {{ notification.message }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const user = ref({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  country: "",
  dateOfBirth: "",
  address: "",
});

const notification = ref({
  message: "",
  success: false,
});

const handleSubmit = async () => {
  try {
    let URL = "/User/AddUser";
    await axios.post("http://localhost:5222/api/User/AddUser", user.value);
    //this.$api.post(URL, user.value);
    notification.value = {
      message: "Usuario creado con éxito.",
      success: true,
    };
    resetForm();
  } catch (error) {
    notification.value = {
      message: error.response?.data || "Error al crear el usuario.",
      success: false,
    };
  }
};

const resetForm = () => {
  user.value = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    dateOfBirth: "",
    address: "",
  };
};
</script>

<style scoped>
.q-page {
  max-width: 600px;
  margin: 0 auto;
}
</style>
