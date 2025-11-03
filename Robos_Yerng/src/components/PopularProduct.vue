<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Banner + Navbar -->
    <div class="bg-white shadow-md sticky top-0 z-10">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          New Popular Products
        </h1>
        <nav>
          <ul class="flex space-x-6 overflow-x-auto">
            <li><a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">All Products</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">iPhone</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">Samsung</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">Nokia</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">Xiaomi</a></li>
            <li><a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">Oppo</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="n in 8"
        :key="n"
        class="bg-white rounded-lg shadow-md p-4 flex flex-col overflow-hidden relative group cursor-pointer"
      >
        <div class="relative">
          <img
            :src="`https://picsum.photos/400/300?random=${n}`"
            :alt="`Product ${n}`"
            class="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 group-hover:scale-105"
          />

          <!-- Overlay (hover only) -->
          <div
            class="absolute inset-0 bg-black/50 rounded-md flex justify-between items-start p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <!-- Left Discount -->
            <span class="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-bold transition-transform duration-300 group-hover:translate-x-0 transform -translate-x-3 opacity-0 group-hover:opacity-100">
              -20%
            </span>

            <!-- Right Icons -->
            <div class="flex flex-col space-y-2 transform translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <button class="bg-white/90 p-2 rounded-full hover:bg-white transition">❤️</button>
              <button class="bg-white/90 p-2 rounded-full hover:bg-white transition">🔗</button>
              <button class="bg-white/90 p-2 rounded-full hover:bg-white transition">👁️</button>
            </div>
          </div>
        </div>

        <h3 class="font-semibold text-lg mb-1">Product {{ n }}</h3>
        <p class="text-gray-500 text-sm mb-2">Short product description here.</p>
        <div class="flex items-center mb-2">
          <span class="text-yellow-400 font-bold">★★★★☆</span>
        </div>
        <div class="mb-4">
          <span class="text-gray-400 line-through mr-2">${{ 100 + n * 10 }}</span>
          <span class="text-red-600 font-bold">${{ 80 + n * 10 }}</span>
        </div>
        <button class="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGrid",
};
</script>
