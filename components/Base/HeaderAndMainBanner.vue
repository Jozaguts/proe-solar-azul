<template>
  <section class="ss_index_one" id="home">
    <!--===== Section One Start =====-->
    <div class="container">
      <div class="ss_header">
        <!--===== Top Menu =====-->
        <div class="row" id="home">
          <div class="col-lg-3 col-md-7 col-sm-12 col-12 align-self-center">
            <div class="ss_logo">
              <a v-scroll-to="'#home'">
                <img  loading="lazy" class="img-fluid logo" src="~assets/images/svg/logo.svg" alt="logo" />
              </a>
            </div>
          </div>
          <div class="col-lg-9 col-md-5 col-sm-12 col-12 align-self-center">
            <div class="ss_menu" :class="{'ss_toggle': $store.state.showMenu}">
              <ul>
                <li>
                  <a v-scroll-to="'#services'">Servicios</a>
                </li>
                <li>
                  <router-link to="/cotizar">Cotización</router-link>
                </li>
                <li>
                  <router-link to="/nosotros">Nosotros</router-link>
                </li>
              </ul>
              <div class="head_icon">
                <div class="ss_menu_bar" @click="$store.commit('toggleMenu')">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainBanner />
    </div>
  </section>
</template>

<script>
import MainBanner from '~/components/Base/MainBanner'
export default {
  components: { MainBanner: MainBanner }
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