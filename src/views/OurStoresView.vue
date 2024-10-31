<template>
  <ViewComponent :title="'Наши магазины'">
    <div class="store">
      <div class="store__item" v-for="store in stores" :key="store.id">
        <div class="store__item__img">
          <img :src="store.imgUrl" alt="store">
        </div>
        <p class="store__item__content">{{ store.text }}</p>
      </div>
    </div>
  </ViewComponent>

</template>

<script setup>
import ViewComponent from './ViewComponent.vue';

const stores = [
  {
    imgUrl: '/nutty-frutty/src/assets/img/store-1.jpg',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
  },
  {
    imgUrl: '/nutty-frutty/src/assets/img/store-2.jpg',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.'
  }
]
</script>

<style lang="scss" scoped>
.store {
  margin-top: 20px;

  &__item {
    display: flex;
    flex-direction: column;

    &__img img {
      width: 100%;
      border-radius: 8px;
    }

    p {
      color: #252525;
      font-size: 12px;
      line-height: 25px;
      margin: 18px 0 43px;
    }
  }
}

@media(min-width: 768px) {
  .store {
    &__item {
      flex-direction: row;
      gap: 12px;
      margin: 0 0 43px;

      p {
        margin: 0;
        text-align: justify;
      }
    }
  }
}

@media(min-width: 1024px) {
  .store {
    margin-top: 35px;

    &__item {
      gap: 16px;

      p {
        font-size: 16px;
        line-height: 34px;
      }
    }
  }
}

@media(min-width: 1280px) {
  .store {
    margin-top: 55px;
    justify-content: space-between;

    &__item {
      gap: 24px;

      &__img {
        width: 40%;
      }

      p {
        width: 60%;
        font-size: 20px;
      }
    }
  }
}

@media(min-width: 1360px) {
  .store {
    margin-top: 65px;

    &__item {
      p {
        line-height: 36px;
      }
    }
  }
}

@media(min-width: 1360px) {
  .store {
    margin-top: 75px;

    &__item {
      p {
        font-size: 23px;
        line-height: 40px;
      }
    }
  }
}
</style>