<template>
<<<<<<< HEAD
  <header class="bg-blue-600 text-white p-4 shadow-md">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-2xl font-bold">Test Header</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-gray-300">Home</a></li>
          <li><a href="#" class="hover:text-gray-300">About</a></li>
          <li><a href="#" class="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </div>

    <h1>Hello world</h1>
  </header>

</template>

=======
  <div>
    <Header />
    <!-- Animated page transitions -->
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->

    <banner />
    <ProductStore />
    <PopularProduct />
    <Discount />
    <AllNew />
    <DatePoster />
    <ContactUs />

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import banner from "./components/Banner.vue"
// import Product from "./components/Product.vue"
import Footer from "./components/Footer.vue"
import PopularProduct from "./components/PopularProduct.vue"
import Discount from "./components/Poster/Discount.vue"
import ContactUs from "./components/ContactUs.vue"
import AllNew from "./components/AllNew.vue"
import DatePoster from "./components/Poster/DatePoster.vue"
import ProductStore from "./components/data/Product_store.vue"

export default {
  components: {
    Header,
    banner,
    ProductStore,
    Footer,
    PopularProduct,
    Discount,
    ContactUs,
    AllNew,
    DatePoster,
  },
}
</script>

<style>
/* Transition animation for route change */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
>>>>>>> 7da8c1b3aee0db69fc0cbcb24debae36613de343
