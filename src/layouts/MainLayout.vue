<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-red-8 text-white">
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
        <q-toolbar-title>
          Wong
        </q-toolbar-title>
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

        <q-item to="/products" class="text-red">
          <q-item-section avatar>
            <q-icon name="store" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Productos</q-item-label>
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

    <q-page-container class="bg-red-1 text-dark">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    logout() {
      // Redirigir al usuario a la página de login
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.bg-red-8 {
  background-color: #C62828 !important;
}

.bg-red-2 {
  background-color: #FFCDD2 !important;
}

.bg-red-1 {
  background-color: #FFEBEE !important;
}
</style>
