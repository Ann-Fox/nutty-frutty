<template>
    <!-- <div class="assortiment center"> -->
        <div class="cards">
            <AssortmentItem v-for="product in products" :key="product.id" :url-product="product.imgUrl"
                :name-product="product.name" :description-product="product.description" :price-product="product.priceNew"
                :price-old-product="product.priceOld">
            </AssortmentItem>
        </div>
    <!-- </div> -->
</template>

<script setup>
import AssortmentItem from './AssortmentItem.vue';

const products = [
    {
        id: 1,
        imgUrl: '/nutty-frutty/images/assortiment/apricot.png',
        name: 'Абрикосы',
        description: 'Абрикосы',
        priceNew: 322.00,
        priceOld: 770.00,
        weight: 100,
    },
    {
        id: 2,
        imgUrl: '/nutty-frutty/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 323.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 3,
        imgUrl: '/nutty-frutty/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 324.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 1,
        imgUrl: '/nutty-frutty/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 1,
        imgUrl: '/nutty-frutty/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 1,
        imgUrl: '/nutty-frutty/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 1,
        imgUrl: '/nutty-frutty/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 1,
        imgUrl: '/nutty-frutty/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
        weight: 100,

    },
]
</script>

<style lang="scss" scoped>
.cards {
    display: grid;
    gap: 42px;
}

@media (min-width: 768px) {
    .cards {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    }
}
@media (min-width: 1024px) {
    .cards {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 30px;
    }
}
@media (min-width: 1440px) {
    .cards {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 25px;
        grid-row-gap: 53px;
    }
}
</style>