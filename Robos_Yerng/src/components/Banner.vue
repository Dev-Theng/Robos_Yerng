<template>
    <section class="max-w-7xl mx-auto px-4 py-10">
  <div class="grid lg:grid-cols-3 gap-5">
    <!-- Left Big Banner -->
    <div class="lg:col-span-2 relative bg-gradient-to-r from-[#7b002c] via-[#4c0069] to-[#1d0069] rounded-2xl overflow-hidden p-8 flex flex-col justify-center text-white">
      <div>
        <p class="text-yellow-400 text-sm font-semibold uppercase mb-2">New Arrivals</p>
        <h2 class="text-4xl font-extrabold mb-2">4K LCD</h2>
        <h3 class="text-3xl font-bold text-yellow-400 mb-3">Quantum Vision LCD</h3>
        <p class="text-gray-200 mb-5">Limited Time: Online Only!</p>
        <a
          href="#"
          class="bg-white text-gray-800 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </div>
      <img
        src="../assets/images/image1.png"
        alt="Monitor"
        class="absolute right-6 bottom-0 w-2/5 object-contain"
      />
    </div>

    <!-- Right Small Banners -->
    <div class="flex flex-col gap-5">
      <!-- Top Small -->
      <div class="relative bg-gradient-to-r from-[#7b002c] via-[#4c0069] to-[#1d0069] rounded-2xl overflow-hidden p-6 text-white flex items-center justify-between">
        <div>
          <p class="text-sm font-semibold">Mobile</p>
          <h4 class="text-xl font-bold text-yellow-400">Nexus Mobile Pro 256GB</h4>
          <p class="text-gray-200 text-sm mt-1">Limited Time: Online Only!</p>
        </div>
        <img
          src="../assets/images/image2.png"
          alt="Phone"
          class="w-28 h-auto object-contain"
        />
      </div>

      <!-- Bottom Small -->
      <div class="relative bg-gradient-to-r from-[#7b002c] via-[#4c0069] to-[#1d0069] rounded-2xl overflow-hidden p-6 text-white flex items-center justify-between">
        <div>
          <p class="text-sm font-semibold">iPadMini</p>
          <h4 class="text-xl font-bold text-yellow-400">10 Inch iPad Mini Pro</h4>
          <p class="text-gray-200 text-sm mt-1">Limited Time: Online Only!</p>
        </div>
        <img
          src="../assets/images/image3.png"
          alt="iPad"
          class="w-28 h-auto object-contain"
        />
      </div>
    </div>
  </div>
</section>

</template>