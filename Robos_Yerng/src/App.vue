<template>
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
