<template>
  <div>
    <div class="bg">
      <HeaderComponent/>
    </div>
    <!-- <router-view></router-view>

    <FooterComponent/>-->
   </div>
</template>

<script setup>

import HeaderComponent from './components/HeaderComponent.vue';
// import FooterComponent from './components/FooterComponent.vue'

</script>

<style lang="scss">
.bg {
  background: rgba(83, 141, 255, 0.05);
}
</style>
<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>

</style> -->
