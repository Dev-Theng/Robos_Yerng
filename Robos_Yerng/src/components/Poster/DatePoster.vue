<template>
  <div class="relative w-full">
    <!-- Banner Image -->
    <img
      src="https://www.macobserver.com/wp-content/uploads/2025/09/iphone-17-wallpapers.png"
      alt="Sale Banner"
      class="w-full h-64 md:h-96 object-cover"
    />

    <!-- Countdown Overlay -->
    <div
      class="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 bg-black/40 p-4 md:p-8"
    >
      <!-- Sale Text -->
      <div class="text-center md:text-left text-white">
        <p class="text-2xl md:text-3xl font-bold">
          <span class="text-yellow-300">Hurry up!</span> Offer ends in
        </p>
      </div>

      <!-- Countdown Timer -->
      <div class="grid grid-cols-4 gap-4 text-center">
        <div
          class="bg-white text-green-700 rounded-lg p-3 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <span class="text-3xl md:text-4xl font-bold">{{ days }}</span>
          <span class="text-xs md:text-sm uppercase mt-1">Days</span>
        </div>

        <div
          class="bg-white text-green-700 rounded-lg p-3 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <span class="text-3xl md:text-4xl font-bold">{{ hours }}</span>
          <span class="text-xs md:text-sm uppercase mt-1">Hrs</span>
        </div>

        <div
          class="bg-white text-green-700 rounded-lg p-3 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <span class="text-3xl md:text-4xl font-bold">{{ minutes }}</span>
          <span class="text-xs md:text-sm uppercase mt-1">Mins</span>
        </div>

        <div
          class="bg-white text-green-700 rounded-lg p-3 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <span class="text-3xl md:text-4xl font-bold">{{ seconds }}</span>
          <span class="text-xs md:text-sm uppercase mt-1">Secs</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "OfferCountdown",
  setup() {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const initialEndTime =
      Date.now() +
      392 * ONE_DAY +
      8 * 60 * 60 * 1000 +
      2 * 60 * 1000 +
      49 * 1000;
    const endTime = ref(initialEndTime);

    const days = ref("000");
    const hours = ref("00");
    const minutes = ref("00");
    const seconds = ref("00");
    let timer = null;

    const updateCountdown = () => {
      const now = Date.now();
      const diff = endTime.value - now;

      if (diff <= 0) {
        clearInterval(timer);
        days.value = hours.value = minutes.value = seconds.value = "00";
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      days.value = String(Math.floor(totalSeconds / (60 * 60 * 24))).padStart(
        3,
        "0"
      );
      hours.value = String(
        Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
      ).padStart(2, "0");
      minutes.value = String(Math.floor((totalSeconds % (60 * 60)) / 60)).padStart(
        2,
        "0"
      );
      seconds.value = String(totalSeconds % 60).padStart(2, "0");
    };

    onMounted(() => {
      updateCountdown();
      timer = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => clearInterval(timer));

    return { days, hours, minutes, seconds };
  },
};
</script>

<style scoped>
/* Optional: Smooth hover effect for countdown boxes */
.grid div:hover {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
}
</style>
