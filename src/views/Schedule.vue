<template>
  <div> 
    <p>{{ greeting }}</p>
    <div v-if="scheduleList">
      <li class="list-group-item" v-for="(item, i) in scheduleList.response.schedule.days" v-bind:key="i">item</li>
    </div>
    <v-progress-circular v-else
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: 'Schedule'
    }
  },
  mounted() {
    this.$store.dispatch('GET_SCHEDULE');
  },
  computed: {
    scheduleList() {
      let schedule = this.$store.getters.SCHEDULE;
      return schedule;
  },
}
}
</script>