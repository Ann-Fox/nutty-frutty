<template>
  <aside class="sidebar">
    <h4 class="sidebar__head">Категории</h4>
    <ul>
      <li v-for="category in categories" :key="category.id">{{ category.text }}</li>
    </ul>
  </aside>
</template>

<script setup>
const categories = [
  {
    id: 1,
    text: 'Сухофрукты экзотические'
  },
  {
    id: 1,
    text: 'Ягоды сушеные'
  },
  {
    id: 1,
    text: 'Цукаты'
  },
  {
    id: 1,
    text: 'Восточные сладости'
  },
  {
    id: 1,
    text: 'Снеки'
  },
  {
    id: 1,
    text: 'Семена и бобовые'
  },
  {
    id: 1,
    text: 'Бакалея'
  },
  {
    id: 1,
    text: 'Цукаты'
  },
  {
    id: 1,
    text: 'Восточные сладости'
  },
  {
    id: 1,
    text: 'Снеки'
  },
  {
    id: 1,
    text: 'Семена и бобовые'
  },
  {
    id: 1,
    text: 'Бакалея'
  }
  
  
]
</script>

<style lang="scss" scoped>
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
</style>
