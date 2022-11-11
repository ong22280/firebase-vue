<template>
  <div>
    <div v-for="pet in pets" :key="pet.id">
      <h2>{{ pet.name }}</h2>
      <p>{{ pet.age }}</p>
      <p>{{ pet.type }}</p>
      <div v-if="pet.IsVac">
        <p>Is vaccinated</p>
      </div>
    </div>
  </div>
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
    this.pets = usePetsStore().pets;
  },
}
</script>

<style>

</style>