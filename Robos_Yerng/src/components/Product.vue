<template>
  <div class="container mx-auto p-4">
        <ProductTemplate />
  <div class="relative mb-6">
  <!-- Banner Video -->
  <video
    src="../assets/Video/snaptik_7564682473204894996_v2.mp4"
    autoplay
    loop
    muted
    playsinline
    class="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-md"
  ></video>

  <!-- Overlay Text -->
  <div class="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
    <h1 class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">
      Featured Product
    </h1>
  </div>
</div>
  </div>
</template>

<script>
import ProductTemplate from "./cart/ProductTemplate.vue"
export default {
    components: {
        ProductTemplate,
       }
    }
</script>

