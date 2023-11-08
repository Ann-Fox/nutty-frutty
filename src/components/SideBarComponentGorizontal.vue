<template>
  <aside class="sidebar">
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
  }
]
</script>

<style lang="scss" scoped>
.sidebar {
  ul {
    display: flex;
    justify-content: space-around;
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
    cursor: pointer;
  }

  li:active {
    border-radius: 15px;
    background: #FEB302;
    color: #fff;
  }
}

@media(max-width: 425px) {
  .sidebar {
    ul {
      flex-direction: row;
      flex-wrap: wrap;
    }

    li {
      font-size: 10px;

    }
  }
}
</style>
