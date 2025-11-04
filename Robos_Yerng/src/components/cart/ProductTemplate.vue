<template>
  <div>
    <!-- Header -->
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
        Related Products
      </h1>
      <div class="text-right">
        <a href="#" class="btn btn-primary">Explore All Category</a>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div
        v-for="(item, index) in products"
        :key="index"
        class="bg-white rounded-lg shadow-md p-4 flex flex-col overflow-hidden relative group cursor-pointer"
      >
        <div class="relative">
          <!-- Use first image from API -->
          <img
            :src="item.images[0]"
            :alt="item.title"
            class="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-105"
          />

          <!-- Overlay (hover only) -->
          <div
            class="absolute inset-0 bg-black/50 rounded-md flex justify-between items-start p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <!-- Left Discount -->
            <span
              class="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-bold transform -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
            >
              -{{ item.discountPercentage || 10 }}%
            </span>

            <!-- Right Icons -->
            <div class="flex flex-col space-y-2 transform translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <button class="bg-white/90 p-2 rounded-full hover:bg-white transition">❤️</button>
              <button class="bg-white/90 p-2 rounded-full hover:bg-white transition">🔗</button>
              <button class="bg-white/90 p-2 rounded-full hover:bg-white transition">👁️</button>
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <h3 class="font-semibold text-lg mb-1">{{ item.title }}</h3>
        <p class="text-gray-500 text-sm mb-2 line-clamp-2">{{ item.description }}</p>
        <div class="flex items-center mb-2">
          <span class="text-yellow-400 font-bold">
            ★★★★★
            {{ item.rating }}
          </span>
        </div>
        <div class="mb-4">
          <span class="text-gray-400 line-through mr-2">${{ Math.round(item.price * 1.2) }}</span>
          <span class="text-red-600 font-bold">${{ item.price }}</span>
        </div>
        <button class="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://dummyjson.com/products/category/smartphones')
    products.value = data.products
  } catch (err) {
    console.error("Error fetching related products:", err)
  }
})
</script>

<style scoped>
/* TailwindCSS handles most styles, line-clamp may need plugin if not installed */
</style>
