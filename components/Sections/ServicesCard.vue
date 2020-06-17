<template>
  <!-- Cards Service -->
  <section class="ss_section_two spacer_top" id="services">
    <!--===== Section Two Start =====-->
    <div class="container">
      <div class="ss_two">
        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-sm-6"
            @click="getInfo('Instalación de sistemas fotovoltaicos')"
          >
            <div class="ss_two_sec wow fadeIn" data-wow-delay="0.3s">
              <img class="img-fluid" src="@/assets/images/svg/icon3.svg" alt="image" />
              <h2>Instalación de sistemas fotovoltaicos</h2>
              <p>Realización de instalación a cualquier escala a nivel residencial, comercio e industria.</p>
              <p class="get-info">Haz click para solicitar informacion</p>
            </div>
          </div>
          <div
            class="col-lg-3 col-md-6 col-sm-6"
            @click="getInfo('Estudio de eficiencia energética')"
          >
            <div class="ss_two_sec wow fadeIn" data-wow-delay="0.1s">
              <img
                class="img-fluid services-svg"
                src="@/assets/images/services/consultaria.svg"
                alt="image"
              />
              <h2>Estudio de eficiencia energética</h2>
              <p>Diseño del sistema más adecuado para cubrir sus necesidades.</p>
              <p class="get-info">Haz click para solicitar informacion</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6" @click="getInfo('Soporte técnico')">
            <div class="ss_two_sec wow fadeIn" data-wow-delay="0.2s">
              <img
                class="img-fluid services-svg"
                src="@/assets/images/services/soportetecnico.svg"
                alt="image"
              />
              <h2>Soporte técnico</h2>
              <p>Ofrecemos el mantenimiento con inspecciones programadas y revisión de los sistemas solares</p>
              <p class="get-info">Haz click para solicitar informacion</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6" @click="getInfo('Calentadores solares')">
            <div class="ss_two_sec wow fadeIn" data-wow-delay="0.4s">
              <img
                class="img-fluid services-svg"
                src="@/assets/images/services/solar-water-heater.svg"
                alt="image"
              />
              <h2>Calentadores solares</h2>
              <p>Instalación, soporte y diseño del sistema más adecuado para cubrir sus necesidades</p>
              <p class="get-info">Haz click para solicitar informacion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getInfo(asunto) {
      try {
        this.$store.commit('setSubject', asunto)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>
.services-svg {
  width: auto !important;
}
.get-info {
  text-decoration: underline;
}
</style>