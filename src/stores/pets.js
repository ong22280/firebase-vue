import { defineStore } from "pinia";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase";

export const usePetsStore = defineStore("pets", {
  state: () => ({
    pets: [3, 2, 3],
  }),
  getters: {
    getPets: (state) => {
      return state.pets;
    },
  },
  actions: {
    async fetchPets() {
        const queryData = await getDocs(collection(db, "pets"));
        queryData.forEach((doc) => {
            console.log(doc.data());
        });
    },
  },
});
