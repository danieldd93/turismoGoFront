<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-purple" elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <img src="public/images/logo.png" alt="TurismoGO" height="50px" />
          TurismoGO
        </q-toolbar-title>
        <q-btn flat label="Inicio" @click="navigateTo('home')" />
        <q-btn flat label="Sobre Nosotros" @click="navigateTo('about')" />
        <q-btn flat label="Destinos" @click="navigateTo('destinations')" />
        <q-btn
          flat
          label="Empresas Turísticas"
          @click="navigateTo('companies')"
        />
        <q-space />
        <q-btn flat label="Iniciar Sesión" @click="navigateTo('/login')" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white" elevated>
      <q-toolbar>
        <q-toolbar-title>
          <span>© 2024 TurismoGO</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.$q.drawer.toggle();
    },
    navigateTo(path) {
      this.$router.push({ path });
    },
  },
};
</script>
