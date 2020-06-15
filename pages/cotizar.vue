<template>
  <div>
    <HeaderComponent />
    <section class="ss_map">
      <iframe
        width="1350"
        height="600"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Puerto%20vallarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </section>
    <ContactFormComponent />
    <FooterComponent />
  </div>
</template>

<script>
import Header from '@/components/Base/Header'
import ContactForm from '@/components/Base/ContactForm'
import FooterComponent from '@/components/Sections/Footer'

export default {
  components: {
    HeaderComponent: Header,
    ContactFormComponent: ContactForm,
    FooterComponent
  }
}
</script>

<style>
.s_header {
  background: linear-gradient(237deg, #36d1dc 0%, #5b86e5 100%);
}
</style>