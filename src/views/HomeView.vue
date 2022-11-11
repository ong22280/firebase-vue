<template>

</template>

<script>
import { usePetsStore } from '../stores/pets';
export default {
  name: 'HomeView',

  data() {
    return {
      pets: [],
    };
  },
  async mounted() {
    await usePetsStore().fetchPets();
  }
}
</script>

<style>

</style>