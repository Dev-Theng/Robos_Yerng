<template>
  <div>
    <Header />
    <banner />
    <Product />
    <PopularProduct />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import banner from "./components/Banner.vue"
import Product from "./components/Product.vue"
import Footer from "./components/Footer.vue"
import PopularProduct from "./components/PopularProduct.vue"
export default {
  components: {
    Header,
    banner,
    Product,
    Footer,
    PopularProduct,
  }
}
</script>