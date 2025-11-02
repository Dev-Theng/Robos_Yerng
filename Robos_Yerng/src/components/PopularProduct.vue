<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Banner + Navbar Row -->
    <div class="bg-white shadow-md sticky top-0 z-10">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Left: Banner Text -->
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          New Popular Products
        </h1>

        <!-- Right: Product Navbar -->
        <nav>
          <ul class="flex space-x-6 overflow-x-auto">
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">
                All Products
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">
                iPhone
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">
                Samsung
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">
                Nokia
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">
                Xiaomi
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-600 font-semibold whitespace-nowrap">
                Oppo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="n in 8" :key="n" class="bg-white rounded-lg shadow-md p-4 flex flex-col">
        <img
          :src="`https://via.placeholder.com/400x300?text=Product+${n}`"
          :alt="`Product ${n}`"
          class="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 class="font-semibold text-lg mb-1">Product {{ n }}</h3>
        <p class="text-gray-500 text-sm mb-2">Short product description here.</p>
        <div class="flex items-center mb-2">
          <span class="text-yellow-400 font-bold">★★★★☆</span>
        </div>
        <div class="mb-4">
          <span class="text-gray-400 line-through mr-2">${{ 100 + n*10 }}</span>
          <span class="text-red-600 font-bold">${{ 80 + n*10 }}</span>
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
  name: "HomePage",
};
</script>

<style scoped>
ul::-webkit-scrollbar {
  display: none;
}
</style>
