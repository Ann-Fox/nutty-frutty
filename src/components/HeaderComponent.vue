<template>
    <div class="header">
        <div class="header__left">
            <div class="header__left__logo">
                <RouterLink to="/">
                    <LogoMain />
                </RouterLink>
            </div>
            <nav class="header__left__nav visible__nav">
                <ul>
                    <li v-for="itemLink of navLink" :key="itemLink.name">
                        <RouterLink :to="itemLink.link">{{ itemLink.name }}</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="header__rigth__phone">
            <IconPhone class="header__rigth__phone__size" />
            <p>+7(912) 123 85-65</p>
        </div>

        <IconMenuBar class="visible__icon-menu"></IconMenuBar>

        <FavoriteBasketComponent></FavoriteBasketComponent>
    </div>
</template>

<script setup>
import LogoMain from './icons/LogoMain.vue';
import IconPhone from './icons/IconPhone.vue'
import IconMenuBar from './icons/IconMenuBar.vue';

import { RouterLink } from 'vue-router';
import FavoriteBasketComponent from './FavoriteBasketComponent.vue';

const navLink = [
    { name: 'Главная', link: '/' },
    { name: 'Каталог', link: '/our-assortiment' },
    { name: 'О нас', link: '/about' },
    { name: 'О доставке', link: '/about-delivery' },
    { name: 'Магазины', link: '/our-stores' },
    { name: 'Контакты', link: '/contacts' },
]

</script>

<style lang="scss" scoped>
.visible {
    &__nav{
        display: none;
    }
}

.header {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 30px;

    &__rigth {
        &__phone {
            display: flex;
            gap: 3px;
            font-size: 12px;
            align-items: center;

            &__size {
                width: 10px;
                height: 10px;
            }

            p {
                color: #606060;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                font-size: 12px;
                line-height: 24.5px;
            }
        }
    }
}

@media (min-width: 1024px) {
    .visible {
        &__nav {
            display: flex;
        }

        &__icon-menu {
            display: none;
        }
    }

    .header {
        &__left {
            display: flex;
            align-items: center;
            gap: 20px;

            &__nav ul {
                display: flex;
                gap: 10px;
                color: rgba(0, 0, 0, 0.35);
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
    }
}

@media (min-width: 1280px) {
    .header {
        &__left {
            &__nav ul {
                font-size: 18px;
            }
        }

        &__rigth {
            // gap: 30px;
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
        }
    }
}
</style>