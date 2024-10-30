<template>
  <div class="bg">
    <div class="about">
      <h2>{{ props.title }}</h2>
      <slot class="slot-store" v-if="props.title === 'Наши магазины'"></slot>
      <p v-else>{{ props.text }}
      </p>
      <LogoMainBig />
    </div>
  </div>
</template>

<script setup>
import LogoMainBig from '../components/icons/LogoMainBig.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'primary'
  },
  text: {
    type: String,
    default: 'primary'
  },
})
</script>

<style lang="scss" scoped>
// .slot-store {
//   margin: 32px 0 46px;

// }
p {
  color: #252525;
  font-size: 12px;
  line-height: 25px;
  margin: 32px 0 46px;
}

.about {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 30px;
  flex-direction: column;
  text-align: center;
}

@media(min-width: 768px) {
  p {
    font-size: 14px;
    line-height: 30px;
    text-align: justify;

  }

  .about {
    font-style: 42px;
  }
}

@media(min-width: 1024px) {
  p {
    font-size: 16px;
    line-height: 34px;
  }

  .about {
    font-style: 56px;
  }
}

@media(min-width: 1280px) {

  p {
    font-size: 23px;
    line-height: 50px;
  }

  .about {
    width: 80%;
    font-style: 72px;
  }
}
</style>