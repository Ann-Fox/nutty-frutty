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
    flex-wrap: wrap;
    gap: 12px;
  }

  li {
    color: #000;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 1px;
    padding: 7px;
  }

  li:hover, li:active {
    color: #FEB302;
    cursor: pointer;
    border-radius: 8px;
    padding: 7px;
    background: #FEB302;
    color: #fff;
  }
  
}

@media(min-width: 768px) {
  .sidebar {
    li {
      font-size: 16px;
      padding: 1%;
    }
    li:hover, li:active {
      padding: 1%;
  }
  }
}
@media(min-width: 1280px) {
  .sidebar {
    li {
      font-size: 20px;
      line-height: 16px;

    }
  }
}
@media(min-width: 1380px) {
  .sidebar {
    li {
      font-size: 24px;
      line-height: 18px;

    }
  }
}
</style>
