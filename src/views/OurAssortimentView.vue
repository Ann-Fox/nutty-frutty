<template>
  <div class="assortiment center">
    <h2>Наш ассортимент</h2>

    <div class="assortiment__all">
      <aside class="sidebar">
        <h4 class="sidebar__head">Категории</h4>
        <ul>
          <li>Сухофрукты экзотические</li>
          <li>Ягоды сушеные </li>
          <li>Цукаты</li>
          <li>Восточные сладости</li>
          <li>Снеки</li>
          <li>Семена и бобовые</li>
          <li>Бакалея</li>
          <li>Цукаты</li>
          <li>Восточные сладости</li>
          <li>Снеки</li>
          <li>Семена и бобовые</li>
          <li>Бакалея</li>

        </ul>
      </aside>

      <div class="main">
        <div class="main__top">

          <NumberPageComponent></NumberPageComponent>

          <div class="banner__left__search">
            <input class="banner__left__search__input" type="text" placeholder="Кешью Австралийский">
            <button class="banner__left__search__btn">
              <IconSearch />
            </button>
          </div>

        </div>

        <div class="cards">
          <AssortmentItem></AssortmentItem>
        </div>

        <div class="main__bottom">
          <NumberPageComponent></NumberPageComponent>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import NumberPageComponent from '../components/NumberPageComponent.vue'
import AssortmentItem from '../components/AssortmentItem.vue';
import IconSearch from '../components/icons/IconSearch.vue';
</script>

<style lang="scss" scoped>
.assortiment {
  margin: 62px auto 90px;

  &__all {
    display: flex;
    gap: 59px;
    justify-content: space-between;
  }
}

.sidebar {
  border-radius: 25px;
  background: rgba(83, 141, 255, 0.05);

  padding: 28px 0 43px 46px;

  width: 392px;
  height: fit-content;

  &__head {
    color: #000;
    // text-align: center;
    font-size: 21.389px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.891px;

    margin-bottom: 27px;
  }

  ul {
    display: grid;
    gap: 26px;
  }

  li {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1px;
  }

  li:hover {
    color: #FEB302;
  }

  li:active {
    border-radius: 15px;
    background: #FEB302;
    color: #fff;
  }
}

.main {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
 
}

.banner__left__search {
  // max-width: 631px;
  display: flex;
  justify-content: start;
  border-radius: 25px;
  background: rgba(83, 141, 255, 0.05);

  &__input {
    background: none;
    border: none;
    color: #000;
    // font-family: DM Serif Display;
    font-size: 23.7px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 1px;
    opacity: 0.65;
    padding-left: 29px;
    padding-right: 268px;
  }

  &__btn {
    border-radius: 25px;
    background: #FEB302;
    padding: 33px;
  }
}

.cards {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 26px;
  grid-row-gap: 54px;


  margin: 100px 0;

}
</style>