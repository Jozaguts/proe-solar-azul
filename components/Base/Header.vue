<template>
  <section class="s_header">
    <!--===== Section One Start =====-->
    <div class="container-fluid">
      <div class="ss_header">
        <!--===== Top Menu =====-->
        <div class="row" id="home">
          <div class="col-lg-3 col-md-7 col-sm-12 col-12 align-self-center">
            <div class="ss_logo">
              <router-link to="/">
                <img class="img-fluid logo" src="~assets/images/svg/logo.svg" alt="logo" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-9 col-md-5 col-sm-12 col-12 align-self-center">
            <div class="ss_menu">
              <ul>
                <li>
                  <router-link to="/servicios">Servicios</router-link>
                  <!-- <a v-scroll-to="'#services'">Servicios</a> -->
                </li>
                <li>
                  <router-link to="/cotizar">Cotización</router-link>
                  <!-- <a router-link="/cotizar">Cotización</a> -->
                </li>
                <li>
                  <a v-scroll-to="'#about'">Nosotros</a>
                </li>

                <li>
                  <a v-scroll-to="'#contact'">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- servicos complement -->
      <ServicesBanner />
    </div>
  </section>
</template>

<script>
import ServicesBanner from '@/components/Base/ServicesBanner'
export default {
  components: { ServicesBanner }
}
</script>

<style>
.logo {
  transform: translateX(100px) scale(2) translateY(0px);
}
@media screen and (max-width: 320px) {
  .logo {
    transform: translateX(100px) scale(2.5) translateY(8px);
  }
}
@media screen and (max-width: 420px) {
  .logo {
    transform: translateX(0px) scale(1.8) translateY(0px);
  }
}
</style>