<template>
    <div class="card bg" v-for="product in products" :key="product.id">
        <div class="card__img">
            <img :src="product.imgUrl" :alt="product.name" />
        </div>
        <div class="card__info">
            <h4 class="card__info__head">{{ product.name }}</h4>
            <p class="card__info__description">Свежие {{ product.description }}<br>
                в герметичной упаковке от фирмы</p>
            <div class="card__info__price">
                <p class="card__info__price__new">От {{ product.priceNew }} P</p>
                <p class="card__info__price__old">От {{ product.priceOld }} Р</p>
            </div>
            <div class="card__info__btns">
                <button>
                    <IconArrows></IconArrows>
                </button>
                <button>
                    <IconSearchSmall></IconSearchSmall>
                </button>
                <button>
                    <IconFaivorites></IconFaivorites>
                </button>
                <button>В корзину</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconArrows from '../components/icons/IconArrows.vue'
import IconSearchSmall from '../components/icons/IconSearchSmall.vue'
import IconFaivorites from '../components/icons/IconFaivorites.vue'

const products = [
    {
        id: 1,
        imgUrl: '../public/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
    },
    {
        id: 1,
        imgUrl: '../public/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
    },
    {
        id: 1,
        imgUrl: '../public/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
    },
    {
        id: 1,
        imgUrl: '../public/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
    },
    {
        id: 1,
        imgUrl: '../public/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
    },
    {
        id: 1,
        imgUrl: '../public/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
    },
    {
        id: 1,
        imgUrl: '../public/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
    },
    {
        id: 1,
        imgUrl: '../public/images/assortiment/apricot.png',
        name: 'Абрикосы сушеные',
        description: 'Сушенные абрикосы',
        priceNew: 322.00,
        priceOld: 450.00,
    },
]
</script>

<style lang="scss" scoped>
.card {
    border-radius: 26.736px;
    padding: 15px 15px 30px;

    &__img {
        margin-bottom: 23px;

    }

    &__info {
        &__head {
            color: #000;
            font-size: 21.389px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.891px;
            margin-bottom: 13px;
        }

        &__description {
            color: #363636;
            font-size: 16.041px;
            line-height: 23.171px;
            /* 144.444% */
            letter-spacing: 0.891px;
            margin-bottom: 18px;
            max-width: 291px;
        }

        &__price {
            // font-family: Roboto;
            font-size: 16.041px;
            font-style: normal;
            line-height: 23.171px;
            /* 144.444% */
            letter-spacing: 0.891px;
            margin-bottom: 31px;
            display: flex;
            gap: 21px;

            &__new {
                color: #DA5C5C;
                font-weight: 700;

            }

            &__old {
                color: rgba(54, 54, 54, 0.25);
                font-weight: 700;
                text-decoration: line-through;

            }
        }

        &__btns {
            align-items: center;
            display: flex;
            justify-content: space-between;

        & button {
            border-radius: 13.368px;
            // background-color: #F8F8F8;
            background-color: #e6eaf3;
            width: 55.254px;
            height: 55.254px;

            &:last-child {
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
        }
    }

}
}
</style>
