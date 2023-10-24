<template>
  <div class="assortiment center">
    <h2>Абрикосы сушеные</h2>

    <div class="assortiment__all">
      <SideBarComponent></SideBarComponent>

      <div class="cart">

        <div class="cart__image">
          <img src="/images/card-product.png" alt="Абрикосы сушеные">
          <div class="cart__image__weight">
            <p>100 г</p>
            <p>500 г</p>
            <p>1000г</p>
          </div>
        </div>

        <div class="cart__content">
          <div class="cart__content__description">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
            Lorem Ipsum является "рыбой" для текстов на латинице с начала XVI века.</div>
          <div class="cart__content__price">322.00 Р</div>
          <button>В корзину</button>
        </div>

      </div>
    </div>

    <div>
      <h2>Сопутствующие товары</h2>
      <div class="cards">
        <AssortmentItem></AssortmentItem>
      </div>
    </div>

  </div>
</template>

<script setup>
import SideBarComponent from '../components/SideBarComponent.vue';
import AssortmentItem from '../components/AssortmentItem.vue';
</script>

<style lang="scss" scoped>
.assortiment {
  margin: 62px auto 90px;

  &__all {
    display: flex;
    // gap: 59px;
    justify-content: space-between;
  }
}

.cart {
  display: flex;
  align-items: flex-start;
  gap: 107px;

  &__image {
    &__weight {
      display: flex;
      justify-content: space-around;
      border-radius: 50px;
      background: rgba(83, 141, 255, 0.05);

      p:hover {
        color: #fff;
        background: #FEB302;
        box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.10) inset;
      }
    }
  }

  &__content {
    &__description {
      max-width: 619px;
      color: #252525;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 41.5px;
      /* 188.636% */
      letter-spacing: 1px;
    }

    &__price {
      color: #DA5C5C;
      text-align: center;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 23.171px;
      /* 48.273% */
      letter-spacing: 0.891px;
    }
  }
}


button {
  border-radius: 13.368px;
  background-color: #FEB302;
  width: 184.477px;
  height: 55.254px;

  color: #FFF;
  font-size: 21.389px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.891px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 26px;
  grid-row-gap: 54px;

  margin: 100px 0;
}</style>