<template>
  <q-page class="forgot-password-page">
    <div class="forgot-password-card q-pa-md">
      <q-card-section class="text-center q-py-xl">
        <div style="position: absolute; top: 10px; left: 10px; z-index: 1000">
          <img src="/src/Image/Logo6.png" style="height: 100px; width: auto" />
        </div>
        <div
          style="font-size: 1.5em; color: black; font-weight: 100"
          class="text-center"
        >
          Olvidó su contraseña
        </div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input
            outlined
            v-model="email"
            label="Correo electrónico"
            dense
            class="q-mb-md"
            prepend-inner-icon="email"
            color="red"
            required
          />
          <q-btn
            type="submit"
            icon="email"
            color="purple"
            label="Enviar correo de recuperación"
            class="full-width q-mb-md"
            style="background: linear-gradient(to right, #ff6f61, #d32f2f)"
          />
        </q-form>
      </q-card-section>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    onSubmit() {
      // Aquí puedes implementar la lógica para enviar un correo de recuperación de contraseña
      alert(`Enviar correo de recuperación a: ${this.email}`);
      // Puedes redirigir a una página de confirmación o mostrar un mensaje aquí
    },
  },
};
</script>

<style scoped>
.forgot-password-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #d974be 0%, #6e0460 100%);
}

.forgot-password-card {
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.q-input__inner {
  color: #000;
}

.q-input__inner:focus,
.q-input__inner:active,
.q-input__inner {
  border-color: rgba(0, 0, 0, 0.3);
}
</style>
