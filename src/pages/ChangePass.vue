<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6" color="green">Cambiar Contraseña</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="handleSubmit" @reset="resetForm">
          <q-input v-model="username" label="Usuario" filled readonly />
          <q-input
            v-model="currentPassword"
            type="password"
            label="Contraseña Actual"
            filled
            :rules="[(val) => !!val || 'Campo requerido']"
          />
          <q-input
            v-model="newPassword"
            type="password"
            label="Nueva Contraseña"
            filled
            :rules="[(val) => !!val || 'Campo requerido']"
          />
          <div class="q-mt-md">
            <q-btn
              label="Cambiar Contraseña"
              type="submit"
              color="deep-purple"
            />
            <q-btn label="Resetear" type="reset" color="secondary" flat />
          </div>
        </q-form>
      </q-card-section>

      <q-card-section
        v-if="message"
        :class="success ? 'text-positive' : 'text-negative'"
      >
        {{ message }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      currentPassword: "",
      newPassword: "",
      message: "",
      success: false,
    };
  },
  mounted() {
    // Obtener el valor de 'username' del localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.email) {
      this.username = userData.email;
    }
  },
  methods: {
    async handleSubmit() {
      try {
        //const response = await axios
        let URL = "/User/ChangePassword";
        this.$api.post(URL, {
          email: this.username,
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
        });

        this.message = "Contraseña cambiada con éxito.";
        this.success = true;
        this.resetForm();
      } catch (error) {
        this.message = "Error al cambiar la contraseña.";
        this.success = false;
      }
    },
    resetForm() {
      this.currentPassword = "";
      this.newPassword = "";
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
