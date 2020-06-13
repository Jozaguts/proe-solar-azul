<template>
  <div>
    <HeaderAndMainBanner />
    <ServicesCardComponent />
    <SolarPanelInfo />
    <HowToUse />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderAndMainBanner from '~/components/Base/HeaderAndMainBanner'
import ServicesCardComponent from '~/components/Sections/ServicesCard'
import FooterComponent from '~/components/Sections/Footer'
import SolarPanelInfo from '~/components/Sections/SolarPanelInfo'
import HowToUse from '~/components/Sections/HowToUse'
export default {
  components: {
    HeaderAndMainBanner,
    ServicesCardComponent,
    SolarPanelInfo,
    HowToUse,
    FooterComponent
  }
}
</script>

<style>
</style>
