<template>
  <v-container fluid v-if="scheduleList">
    <v-tabs class="elevation-2" v-model="week">
      <v-tab>Четная</v-tab>
      <v-tab>Нечетная</v-tab>
    </v-tabs>
        <v-row>
          <v-col v-for="(day, i) in scheduleList" :key="i" cols="12" sm="6" md="4" lg="3">
            <v-card height="100%">
              <v-card-title class="subheading font-weight-bold">{{days[i]}}</v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item class="list-group-item" v-for="(lesson, i) in day" v-bind:key="i">
                  <v-list-item-content>{{ getLesson(lesson).name }}</v-list-item-content>
                  <div v-if="getLesson(lesson).room">
                    <v-chip small class="ms-2 px-2" color="black" text-color="white">{{ getLesson(lesson).room }}</v-chip>
                  </div>
                </v-list-item>
              </v-list>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
  <v-container class="fill-height" fluid v-else>
    <v-row justify="center">
      <v-progress-circular :size="50" color="primary" indeterminate/>
    </v-row>
  </v-container>
</template>

<script>

Date.prototype.getWeek = function() {
  let onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

export default {
  data: function () {
    return {
      week: (((new Date()).getWeek() + 1) % 2),
      days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    }
  },
  methods: {
    changeWeek: function(weekNumber) {
      this.week = weekNumber;
    },
    getLesson: function(lessons) {
      if (this.week) return lessons.odd;
      else return lessons.even;
    },
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