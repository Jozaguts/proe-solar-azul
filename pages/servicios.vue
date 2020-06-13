<template>
  <div>
    <HeaderComponent />
    <ServicesCard />
    <WhyChoseUs />
    <FooterComponent />
  </div>
</template>

<script>
import Header from '@/components/Base/Header'
import ServicesCard from '@/components/Sections/ServicesCard'
import WhyChoseUs from '@/components/Base/WhyChoseUs'
import FooterComponent from '@/components/Sections/Footer'
export default {
  components: {
    HeaderComponent: Header,
    ServicesCard,
    WhyChoseUs,
    FooterComponent
  },
  mounted() {
    console.log(this.$route.path)
  }
}
</script>

<style>
</style>