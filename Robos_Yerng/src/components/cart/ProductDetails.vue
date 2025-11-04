<script setup>
import { ref } from "vue";

// Product images
const images = [
  "https://techpp.com/wp-content/uploads/2025/09/iPhone-17-Green-Saga-Wallpaper.jpg",
  "https://preview.redd.it/wallpaper-minimalist-black-and-white-aesthetic-iphone-17-v0-mf2ki5aovgof1.jpeg?width=640&crop=smart&auto=webp&s=573d9c60dded4899c3b64eb0fc02bc114d328d9c",
  "https://public-files.gumroad.com/7con80tzb766xpt8bj123ftwnejk",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzAbuiz7b1-OOEI5RLOtVeQnHsjg9oPRM5g&s",
];

const currentImage = ref(images[0]);

const selectImage = (image) => {
  currentImage.value = image;
};

// Color and option selection
const colors = ["Black", "Silver", "Blue", "Gold"];
const selectedColor = ref(colors[0]);

const options = ["128GB", "256GB", "512GB"];
const selectedOption = ref(options[0]);
</script>

<template>
  <div class="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl">
    
    <!-- Left Side: Image Gallery -->
    <div>
      <div class="mb-4 overflow-hidden rounded-xl border-2 border-gray-200">
        <img
          :src="currentImage"
          :alt="`Product image: ${currentImage}`"
          class="w-full h-auto object-cover transition-opacity duration-300"
        />
      </div>

      <div class="flex flex-wrap gap-2 justify-start">
        <div
          v-for="(image, index) in images"
          :key="index"
          @click="selectImage(image)"
          class="w-20 h-20 overflow-hidden rounded-lg cursor-pointer transition-all duration-200"
          :class="{
            'ring-2 ring-indigo-500 ring-offset-2': image === currentImage,
            'border border-gray-300 hover:opacity-80': image !== currentImage,
          }"
        >
          <img :src="image" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Right Side: Product Info -->
    <div class="space-y-4">
      <!-- Title -->
      <h2 class="text-3xl font-bold text-gray-900">iPhone 17 Pro Max</h2>

      <!-- Price -->
      <p class="text-2xl font-semibold text-indigo-600">$1,099.99</p>

      <!-- Rating and Views -->
      <div class="flex items-center gap-3">
        <div class="flex text-yellow-400">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <p class="text-sm text-gray-600">(4.2/5 - 320 reviews)</p>
        <p class="text-sm text-gray-500">• 2.3k views</p>
      </div>

      <!-- Description -->
      <p class="text-gray-700 leading-relaxed">
        Experience the future with the new iPhone 17 Pro Max — featuring the powerful A19 Bionic chip, 
        stunning 120Hz OLED display, and a new AI-enhanced camera system. Designed to deliver unmatched 
        performance, battery life, and style in every moment.
      </p>

      <!-- Color selection -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-2">Choose Color:</h3>
        <div class="flex gap-3">
          <button
            v-for="(color, index) in colors"
            :key="index"
            @click="selectedColor = color"
            class="px-4 py-2 border rounded-lg transition duration-150"
            :class="{
              'bg-indigo-600 text-white border-indigo-600': selectedColor === color,
              'border-gray-300 hover:bg-gray-100': selectedColor !== color,
            }"
          >
            {{ color }}
          </button>
        </div>
      </div>

      <!-- Option selection -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-2">Select Storage:</h3>
        <select
          v-model="selectedOption"
          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option v-for="(option, index) in options" :key="index" :value="option">
            {{ option }}
          </option>
        </select>
      </div>

      <!-- Add to Cart Button -->
      <button
        class="w-full mt-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Optional for fade transitions */
</style>
