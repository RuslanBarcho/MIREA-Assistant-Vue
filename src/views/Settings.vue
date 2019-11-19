<template>
    <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-card>
        <v-card-title class="subheading font-weight-bold">Настройки</v-card-title>
        <v-divider></v-divider>
        <v-autocomplete class="ma-5" label="Группа" :items="groupList" :loading="groupList === null" filled rounded/>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
module.exports = {
  data: function () {
    return { }
  },
  mounted() {
    this.$store.dispatch('GET_GROUPS');
  },
  computed: {
    groupList() {
      let groups = this.$store.getters.GROUPS;
      return groups;
    },
  },
}
</script>