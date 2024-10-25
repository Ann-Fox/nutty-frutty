<template>
    <div class="shop">
        <div class="shop__favorites">Избранное</div>
        <RouterLink to="/basket" class="shop__basket">
            <div class="shop__basket__text">Корзина</div>
            <div class="shop__basket__count">
                <p>3</p>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>

import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>
.shop {
    display: none;
}

@media (min-width: 1024px) {
    .shop {
        display: flex;
        gap: 20px;
        align-items: center;

        &__favorites {
            color: #606060;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        &__basket {
            display: flex;
            gap: 10px;
            border-radius: 8px;
            background: rgba(254, 179, 2, 0.45);
            padding: 5px 10px;
            justify-content: space-around;
            align-items: center;

            &__text {
                color: #FFF;
                font-size: 12px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            &__count {
                padding: 4px 8px;
                border-radius: 8px;
                background: #FFF;
                align-items: center;
                display: flex;
                justify-content: center;

                & p {
                    color: #444;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
            }
        }
    }
}

@media (min-width: 1280px) {
    .shop {
        gap: 30px;

        &__phone {
            gap: 5px;
            font-size: 16px;

            &__size {
                width: 16px;
                height: 16px;
            }

            p {
                font-size: 16px;
            }
        }

        &__favorites {
            font-size: 18px;
        }

        &__basket {
            padding: 7px 12px;

            &__text {
                font-size: 18px;
            }

            &__count {
                padding: 6px 10px;

                & p {
                    font-size: 16px;
                }
            }
        }
    }
}
</style>