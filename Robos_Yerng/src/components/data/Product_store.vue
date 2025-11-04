<template>
  <div class="bg-gray-100">
    <div class="bg-white shadow-md p-4">
        <li
          v-for="(item, index) in store.respotitories"
          :key="index"
          class="mb-6"
        >
          <ProductTemplate
            :Date="item.id"
            :Title="item.description"
            :title="item.title"
            :rating="item.rating"
            :image="item.images[0]"  
            :price="item.price"
          />
        </li>
    </div>
  </div>
</template>

<script setup>
import ProductTemplate from "../cart/ProductTemplate.vue";
import { useResopitories } from "../../Stores/FakeAPI.js";

const store = useResopitories()
store.fetchResopitories() // fetch on mount
</script>
