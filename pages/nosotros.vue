<template>
  <div>
    <HeaderComponent />
    <section class="ss_about_main">
      <!--===== Section Two Start =====-->
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="ss_about_img">
              <img  loading="lazy" class="img-fluid ss_about1" src="~assets/images/about01.jpg" alt="persona" />
              <div class="ss_video_img">
                <img
                  class="ss_about2"
                  src="~assets/images/about02.jpg"
                  alt="panel solars instalados"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 align-self-center">
            <div class="ss_ab_right wow fadeIn" data-wow-delay="0.2s" data-wow-duration="1s">
              <h3>Nosotros</h3>
              <h1>Comprometidos con proporcionar soluciones de ahorro de energía.</h1>
              <p>Estamos comprometidos a mejorar la vida de todas las personas que han hecho grandes contribuciones para ayudar al medio ambiente y la sociedad</p>
              <h2 class="ss_name">Christian Alvarado</h2>
              <p>( Co-fundador )</p>
              <img  loading="lazy" class="img-fluid pt-2" src="~assets/images/ss_signature.png" alt="firma" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <footerComponent />
  </div>
</template>

<script>
import Header from '@/components/Base/Header'
import Footer from '@/components/Sections/Footer'
export default {
  components: { HeaderComponent: Header, FooterComponent: Footer }
}
</script>

<style>
.ss_about2 {
  width: 100%;
  height: auto;
  max-width: 200px;
}
</style>