<template>
  <div class="about center bg">
    <h2>Наши магазины</h2>
    <div class="store">
      <div class="store__item" v-for="store in stores" :key="store.id">
        <div class="store__item__img">
          <!-- <img :src="store.imgUrl" alt="store"> -->
        </div>
        <p class="store__item__content">{{ store.text }}</p>
      </div>
    </div>

    <LogoMainBig />
  </div>
</template>

<script setup>
import LogoMainBig from '../components/icons/LogoMainBig.vue';

const stores = [
  {
    // imgUrl: '',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
  },
  {
    // imgUrl: '',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
  }
]
</script>

<style lang="scss" scoped>
.about {
  padding: 42px 144px 143px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1632px;
  gap: 35px;
}

.store {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 75px;

  margin: 75px 0;
}

.store__item {
  display: flex;
    gap: 76px;

  &__img {
    width: 493px;
height: 300px;

border-radius: 25px;
background: #C4C4C4;
  }

  &__content {
    width: 1024px;
  }
}
</style>