<template>
  <div>
    <div class="bg">
      <HeaderComponent/>
    </div>
    <router-view></router-view>

    <FooterComponent/>
   </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue'
</script>

<style lang="scss" scoped>
</style>