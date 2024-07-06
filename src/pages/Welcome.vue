<template>
  <q-page class="flex">
    <q-card class="q-mb-md" style="width: 100%">
      <q-card-section class="text-center">
        <div class="text-h4 q-mb-md" color="primary">
          ¡Bienvenido a TourismGo!
        </div>

        <div class="text-h6 q-mb-md">
          Estamos encantados de tenerte aquí,
          <span class="text-primary">{{ email }}</span
          >!
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "WelcomePage",
  data() {
    return {
      email: "",
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
    goToHomePage() {
      this.$router.push("/");
    },
    goToProfilePage() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
.q-page {
  background-color: #f0f0f0;
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
}
</style>
