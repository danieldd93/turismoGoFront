<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title> Publicar Actividades y Excursiones </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <publish-activity />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import PublishActivity from "components/PublishActivity.vue";

export default {
  components: {
    PublishActivity,
  },
};
</script>

<style scoped>
/* Estilos específicos para esta página */
</style>
