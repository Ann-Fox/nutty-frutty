<template>
    <div class="items">
        <div class="item" v-for="numSection in numSections" :key="numSection">
            <h4>Раздел {{ numSection }}</h4>
            <div>
                <svg width="61" height="1" viewBox="0 0 61 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="61" y2="0.5" stroke="black" />
                </svg>
            </div>
            <ul>
                <li v-for="product in filterSection(numSection)" :key="product.section">{{
                    product.nameProduct }}</li>
            </ul>
        </div>

        <div class="item__contact">
            <h4>Контакты</h4>
            <div>
                <svg width="61" height="1" viewBox="0 0 61 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="61" y2="0.5" stroke="black" />
                </svg>
            </div>
            <ul>
                <li>8 993 313 31 33</li>
                <li>8 993 313 31 33</li>
                <li>nutfrut@Gmail.com</li>
                <li>г. Пермь, ул. Красные Казармы, 64</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
// import { ref } from 'vue';

const products = [
    {
        section: 1,
        nameProduct: 'Сухофрукты',
    },
    {
        section: 1,
        nameProduct: 'Орехи',
    },
    {
        section: 1,
        nameProduct: 'Ягоды сушеные',
    },
    {
        section: 1,
        nameProduct: 'Цукаты',
    },
    {
        section: 1,
        nameProduct: 'Экзотические сухофрукты',
    },
    {
        section: 2,
        nameProduct: 'Восточные сладости',
    },
    {
        section: 2,
        nameProduct: 'Семена и бобовые',
    },
    {
        section: 2,
        nameProduct: 'Снеки',
    },
    {
        section: 2,
        nameProduct: 'Бакалея',
    },
    {
        section: 2,
        nameProduct: 'Специи',
    },
    {
        section: 3,
        nameProduct: 'Сухофрукты',
    },
    {
        section: 3,
        nameProduct: 'Орехи',
    },
    {
        section: 3,
        nameProduct: 'Ягоды сушеные',
    },
    {
        section: 3,
        nameProduct: 'Цукаты',
    },
    {
        section: 3,
        nameProduct: 'Экзотические сухофрукты',
    },
];

// const currentNum = ref([products[0]]);

const numSections = [1, 2, 3];

const filterSection = (numSection) => {
    return products.filter((el) => el.section === numSection)
}
</script>

<style lang="scss" scoped>
.items {
    display: flex;
    justify-content: space-evenly;
    padding-top: 45px;
    padding-bottom: 75px;
}

h4 {
    color: #000;
    font-size: 27.425px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.item {
    & ul {
        gap: 17px;
        display: grid;
        padding-top: 18px;
    }

    & li {
        color: #252525;
        font-size: 20.569px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}

.item__contact {
    & ul {
        gap: 17px;
        display: grid;
        padding-top: 18px;
    }

    & li {
        color: #252525;
        font-size: 20.569px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    li {
        font-weight: 500;
    }
}


@media(max-width: 425px) {
    .item {
        display: none;
    }
}
</style>