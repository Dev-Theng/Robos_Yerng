<template>
 <!-- Main Product Section -->
   <div class="relative mb-6">
  <!-- Banner Image -->
  <img
    src="https://cdn.lotuselectronics.com/webpimages/729881IM.webp"
    alt="Featured Product"
    class="w-full h-36 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg shadow-md"
  />

  <!-- Overlay Text -->
  <div class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
    <h1 class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">
      Featured Product
    </h1>
  </div>
</div>

    <!-- Related Products Section -->
    <h2 class="text-2xl font-semibold mb-6">Related Products</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
      >
        <!-- Product Image -->
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-48 object-cover"
        />

        <!-- Product Info -->
        <div class="p-4 flex flex-col flex-1">
          <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-gray-500 text-sm mb-2">{{ product.details }}</p>

          <!-- Rating -->
          <div class="flex items-center mb-2">
            <template v-for="star in 5" :key="star">
              <svg
                v-if="star <= product.rating"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                :key="'filled-' + star"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.068 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/>
              </svg>
              <svg
                v-else
                class="w-5 h-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                :key="'empty-' + star"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.068 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"/>
              </svg>
            </template>
          </div>

          <!-- Price -->
          <div class="mb-4">
            <span class="text-gray-400 line-through mr-2">${{ product.oldPrice }}</span>
            <span class="text-red-600 font-bold">${{ product.price }}</span>
          </div>

          <!-- Add to Cart -->
          <button
            class="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {

  data() {
    return {
      products: [
        {
          name: "Product 1",
          details: "This is a short description of product 1.",
          rating: 4,
          oldPrice: 120,
          price: 90,
          image: "https://www.gsmarena.com.bd/images/products/thumb/OnePlus-Nord-5.jpg",
        },
        {
          name: "Product 2",
          details: "This is a short description of product 2.",
          rating: 5,
          oldPrice: 150,
          price: 120,
          image: "https://www.gsmarena.com.bd/images/products/thumb/OnePlus-Nord-5.jpg",
        },
        {
          name: "Product 3",
          details: "This is a short description of product 3.",
          rating: 3,
          oldPrice: 80,
          price: 65,
          image: "https://www.gsmarena.com.bd/images/products/thumb/OnePlus-Nord-5.jpg",
        },
        {
          name: "Product 4",
          details: "This is a short description of product 4.",
          rating: 4,
          oldPrice: 200,
          price: 180,
          image: "https://www.gsmarena.com.bd/images/products/thumb/OnePlus-Nord-5.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Tailwind handles most styling, extra custom styles can go here */
</style>
