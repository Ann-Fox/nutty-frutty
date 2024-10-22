<template>
    <div class="assortiment center">
        <div class="cards">
            <AssortmentItem v-for="product in products" :key="product.id" :url-product="product.imgUrl"
                :name-product="product.name" :description-product="product.description" :price-product="product.priceNew"
                :price-old-product="product.priceOld">
            </AssortmentItem>
        </div>

    </div>
</template>

<script setup>
import AssortmentItem from './AssortmentItem.vue';

const products = [
    {
        id: 1,
        imgUrl: 'src/assets/img/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 650.00,
        weight: 100,
    },
    {
        id: 2,
        imgUrl: '/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 323.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 3,
        imgUrl: '/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 324.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 1,
        imgUrl: '/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 1,
        imgUrl: '/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 1,
        imgUrl: '/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 1,
        imgUrl: '/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
        weight: 100,

    },
    {
        id: 1,
        imgUrl: '/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
        weight: 100,

    },
]
</script>

<style lang="scss" scoped>
.assortiment {
    margin: 178px auto 90px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 26px;
    grid-row-gap: 54px;
}

@media (max-width: 425px) {
    .assortiment {
        margin: 31px auto 69px;
    }

    .cards {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 42px;
    }

}
</style>