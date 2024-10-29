<template>
    <div class="card bg">
        <div class="card__img">
            <img :src="urlProduct" :alt="nameProduct" />
        </div>
        <div class="card__info">
            <h4 class="card__info__head">{{ nameProduct }}</h4>
            <p class="card__info__description">Свежие {{ descriptionProduct }}<br>
                в герметичной упаковке от фирмы</p>
            <div class="card__info__price">
                <p class="card__info__price__new">От {{ priceProduct }} P</p>
                <p class="card__info__price__old">От {{ priceOldProduct }} Р</p>
            </div>
            <div class="card__info__btns">

                <div class="card__info__btns__icons">
                    <button class="card__info__btns__icons__icon">
                        <IconArrows></IconArrows>
                    </button>
                    <button class="card__info__btns__icons__icon">
                        <IconSearchSmall></IconSearchSmall>
                    </button>
                    <button class="card__info__btns__icons__icon">
                        <IconFaivorites></IconFaivorites>
                    </button>
                </div>

                <button class="card__info__btns__basket" @click="addMe">В корзину</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

import IconArrows from '../components/icons/IconArrows.vue'
import IconSearchSmall from '../components/icons/IconSearchSmall.vue'
import IconFaivorites from '../components/icons/IconFaivorites.vue'

const props = defineProps({
    urlProduct: {
        type: String,
        required: true
    },
    nameProduct: {
        type: String,
        required: true
    },
    descriptionProduct: {
        type: String,
        required: true
    },
    priceProduct: {
        type: Number,
        required: true
    },
    priceOldProduct: {
        type: Number,
        required: true
    },
    // weightProduct {
    //     type: Number,
    //     required: true
    // },
})
// const showModal = ref(false)
const qty = ref(0)

const store = useCartStore()

const addMe = () => {
    store.add({
        name: props.nameProduct,
        price: props.priceProduct,
        qty: qty.value
    })
    qty.value = 0
}
</script>

<style lang="scss" scoped>
.card {
    width: 95%;
    border-radius: 27px;
    padding: 3.5% 3.5% 7%;
    margin: 0 auto;

    &__img {
        margin-bottom: 23px;

        img {
            width: 100%;
        }
    }

    &__info {
        &__head {
            color: #000;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 0.891px;
            margin-bottom: 10px;
        }

        &__description {
            color: #363636;
            font-size: 12px;
            line-height: 17px;
            /* 144.444% */
            letter-spacing: 0.891px;
            margin-bottom: 18px;
            // max-width: 291px;
        }

        &__price {
            p {
                font-size: 16px;
                font-style: normal;
                line-height: 23.171px;
                /* 144.444% */
                letter-spacing: 0.891px;
            }

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
            gap: 10px;

            & button {
                border-radius: 8px;
            }

            &__icons {
                width: 60%;
                display: flex;
                justify-content: space-between;

                &__icon {
                    background-color: #e6eaf3;
                    width: 30%;
                    height: 40px;
                }
            }

            &__basket {
                background-color: #FEB302;
                padding: 12px 14px;
                width: 40%;

                color: #FFF;
                font-size: 12px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: 0.891px;
            }

        }

    }
}

@media(min-width: 425px) {
    .card {
        &__info {
            &__head {
                font-size: 18px;
            }

            &__description {
                font-size: 14px;
            }

            &__price {
                p {
                    font-size: 18px;
                }
            }

            &__btns {
                &__icons {
                    &__icon {
                        height: 50px;
                    }
                }

                &__basket {
                    padding: 16px 14px;
                    font-size: 16px;
                }

            }

        }
    }
}

@media(min-width: 425px) {
    .card {
        width: 100%;
        &__info {
            &__btns {
                &__icons {
                    &__icon {
                        height: 54px;
                    }
                }

                &__basket {
                    padding: 18px 0px;
                }

            }

        }
    }
}
@media(min-width: 425px) {
    .card {
        width: 100%;
        &__info {
            &__head {
                font-size: 20px;
            }

            &__description {
                font-size: 16px;
            }

            &__price {
                p {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>
