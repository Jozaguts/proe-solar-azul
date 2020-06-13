<template>
  <div class="ss_breadcrumb text-center" v-if="this.$route.path === '/servicios'">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1>Servicios</h1>
          <ul>
            <li>
              <router-link to="/">Inicio</router-link>
              <span>/ Servicios</span>
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