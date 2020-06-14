<template>
  <div class="ss_breadcrumb text-center" v-if="this.$route.path==='/nosotros'">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Nosotros</h1>
          <ul>
            <li>
              <router-link to="/">Inicio</router-link>
              <span>/ Nosotros</span>
            </li>
          </ul>
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