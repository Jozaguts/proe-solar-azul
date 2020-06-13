<template>
  <div class="ss_banner_main">
    <!--===== Banner =====-->
    <div class="row">
      <div class="col-lg-5">
        <div class="ss_banner_left">
          <h2 style="fontSize:16px;">Instalación y distribución</h2>
          <h1>
            Proyectos de obra eléctrica y solares
            <!-- <span>obra electrica y solares</span> -->
          </h1>
          <a href="#" class="white_btn" @click="$store.commit('setAsunto', 'Cotización')">Cotizar</a>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="ss_banner_right">
          <no-ssr>
            <carousel :autoplay="true" :nav="false" :loop="true" :items="1">
              <img
                class="img-fluid ss_cloud_one zoomOutRight"
                src="@/assets/images/slide1.png"
                alt="panel solar"
              />
              <img
                class="img-fluid ss_cloud_one zoomOutRight"
                src="@/assets/images/slide2.png"
                alt="panel solar"
              />
              <img
                class="img-fluid ss_cloud_one zoomOutRight"
                src="@/assets/images/slide3.png"
                alt="panel solar"
              />
            </carousel>
          </no-ssr>
          <img class="img-fluid ss_cloud" src="@/assets/images/cloud.png" alt="nubes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>