<template>
    <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-card>
        <v-card-title class="subheading font-weight-bold">Привет!</v-card-title>
        <v-divider></v-divider>
        <v-autocomplete class="ma-5" label="Выбери группу"
        :menu-props="menu"
        :items="groupList"
        :loading="groupList === null"
        :disabled="groupList === null"
        no-data-text="Ничего не найдено"
        filled rounded
        v-model="group"/>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

module.exports = {
  data: function () {
    return {
        set group(val) {
            localStorage.setItem('group', val);
            window.location.href = '/';
        },
        menu: {"maxHeight":160},
     }
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