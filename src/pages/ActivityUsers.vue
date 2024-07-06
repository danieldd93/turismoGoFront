<template>
  <q-page class="q-pa-md">
    <q-list>
      <q-item-label header>Usuarios que solicitaron la actividad</q-item-label>
      <q-item v-for="user in users" :key="user._id" clickable>
        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label caption>{{ user.email }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "ActivityUsers",
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const activityId = this.$route.params.activityId;
    const response = await axios.get(`/api/activities/${activityId}/users`);
    this.users = response.data;
  },
};
</script>
