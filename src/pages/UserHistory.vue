<template>
  <q-page class="q-pa-md">
    <q-list>
      <q-item-label header>Historial de Actividades</q-item-label>
      <q-item
        v-for="activity in history.activities"
        :key="activity._id"
        clickable
      >
        <q-item-section>
          <q-item-label>{{ activity.name }}</q-item-label>
          <q-item-label caption>{{ formatDate(activity.date) }}</q-item-label>
          <q-item-label>{{ activity.description }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "UserHistory",
  data() {
    return {
      history: {
        activities: [],
      },
    };
  },
  async created() {
    const userId = this.$route.params.userId;
    const response = await axios.get(`/api/history/user/${userId}`);
    this.history = response.data;
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>
