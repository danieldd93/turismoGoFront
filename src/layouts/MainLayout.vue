<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-purple text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="text-white"
        />
        <q-toolbar-title> TurismoGO </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="text-black"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <q-item to="/publicarActividades" class="text-purple">
          <q-item-section avatar>
            <q-icon name="store" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Agregar Nueva Actividad</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/changePass" class="text-purple">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cambiar Password</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Botón de Salir -->
        <q-item clickable @click="logout">
          <q-item-section avatar>
            <q-icon name="exit_to_app" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Salir</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Añadir más elementos de menú según sea necesario -->
      </q-list>
    </q-drawer>

    <q-page-container class="text-dark">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    logout() {
      // Redirigir al usuario a la página de login
      //this.$router.push("/login");
      this.$router.push("/homepage");
    },
  },
};
</script>

<style scoped>
.bg-purple-8 {
  background-color: #9c28c6 !important;
}
</style>
