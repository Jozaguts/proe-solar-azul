<template>
  <section class="ss_section_three spacer_bottom">
    <!--===== Section Three Start =====-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="ss_three_left wow fadeIn">
            <img class="img-fluid" src="@/assets/images/young-solar-panel.jpg" alt="image" />
          </div>
        </div>
        <div class="col-lg-6 align-self-center">
          <div class="ss_three_right wow fadeIn">
            <h3>Paneles Solares</h3>
            <h1 class="mt-3">Abundante. Accesible. Asequible</h1>
            <p>La instalación de paneles solares reduce significativamente la factura eléctrica mensual y la dependencia de la red pública.</p>
            <p
              class="pb-4"
            >Esta independencia energética protege contra el aumento del coste de la electricidad y contra la volatilidad en el precio de los combustibles</p>
            <a @click="$store.commit('setAsunto', 'Paneles Solares')" class="ss_btn">Cotizar</a>
          </div>
        </div>
      </div>
      <div class="ss_shape_one">
        <div class="ss_shape"></div>
      </div>
      <div class="ss_shape_dot"></div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>