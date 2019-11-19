<template>
    <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-card>
        <v-card-title class="subheading font-weight-bold">Настройки</v-card-title>
        <v-divider></v-divider>
        <v-col justify="center" align='center'>
          <v-autocomplete class="ma-0" label="Группа"
          :menu-props="menu"
          :items="groupList"
          :loading="groupList === null"
          no-data-text="Ничего не найдено"
          filled rounded
          v-model="group"/>
          <v-btn class='mb-5' rounded href="https://vk.com/r_vinter" target="_blank">Обратная связь</v-btn>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

module.exports = {
  data: function () {
    return {
      get group() {
        return localStorage.getItem('group') || '-';
      },
      set group(val) {
        localStorage.setItem('group', val);
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