<template>
  <div class="about center bg">
    <h2>Оформление заказа</h2>
    <div class="basket">
      <div class="basket__form">
        <form action="">
          <h5 class="basket__form__head">Ваше имя</h5>

          <input type="text">
          <h5 class="basket__form__head">Ваш телефон</h5>
          <input type="tel" placeholder="+7 (911) 111-11-11">
          <h5 class="basket__form__head">Ваш E-mail</h5>
          <input type="mail" placeholder="E-mail@mail.ru">
          <h5 class="basket__form__head">Способ оплаты</h5>
          <input type="tel">
          <h5 class="basket__form__head">Пункт выдачи</h5>
          <input type="tel">
        </form>
      </div>
      <div class="basket__order">
        <CartView></CartView>
      </div>
    </div>

  </div>

  <div class="assortiment center">
    <h2>Похожие товары</h2>
    <div class="cards">
      <AssortmentComponent></AssortmentComponent>
    </div>

  </div>
</template>

<script setup>
import AssortmentComponent from '../components/AssortmentComponent.vue';
import CartView from './CartView.vue';

</script>

<style lang="scss" scoped>
.about {
  padding: 42px 144px 143px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1632px;
  gap: 98px;

  background: rgba(83, 141, 255, 0.05);
}

.basket {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 206px;
  grid-row-gap: 0px;

  color: #000;
  font-size: 21.389px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.891px;

  &__form {
    max-width: 532px;

    &__head {
      margin-left: 12px;
      font-size: 21.389px;
      font-weight: 700;

    }
  }

  &__order {
    max-width: 532px;

    // &__list-products {
    //   border-radius: 15px;
    //   background: #FFF;
    //   text-align: center;
    // }
  }
}


input {
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #FFF;

  width: 532px;
  height: 62px;

  margin-bottom: 25px;
  margin-top: 5px;
  padding-left: 12px;

  color: rgba(0, 0, 0, 0.35);
  font-size: 21.389px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.891px;
}

.assortiment {
  margin: 62px auto 90px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 26px;
  grid-row-gap: 54px;

  margin: 100px 0;
}

@media(max-width: 425px) {
  .about {
    padding: 0 15px;
    gap: 52px;
  }

  .basket {
    grid-template-columns: repeat(1, 1fr);
  }

  input {
    width: 262px;
  }

  .cards {
    grid-template-columns: repeat(1, 1fr);
    margin: 16px 0;
  }
}
</style>