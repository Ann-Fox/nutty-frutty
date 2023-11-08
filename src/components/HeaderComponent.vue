<template>
    <div class="background">
        <header class="header center">
            <div class="header__left">
                <div class="header__left__logo">
                    <RouterLink to="/">
                        <LogoMain />
                    </RouterLink>
                </div>
                <nav class="header__left__nav">
                    <ul>
                        <li>
                            <RouterLink to="/">Главная</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/our-assortiment">Каталог</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about">О нас</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about-delivery">О доставке</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/our-stores">Магазины</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/contacts">Контакты</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header__rigth">
                <div class="header__rigth__phone">
                    <IconPhone />
                    <p>+7(912) 123 85-65</p>
                </div>
                <div class="header__rigth__favorites">Избранное</div>
                <RouterLink to="/basket" class="header__rigth__basket">
                    <div class="header__rigth__basket__text">Корзина</div>
                    <div class="header__rigth__basket__count">
                        <p>3</p>
                    </div>
                </RouterLink>
            </div>
        </header>
    </div>
</template>

<script>

import LogoMain from './icons/LogoMain.vue';
import IconPhone from './icons/IconPhone.vue'
import { RouterLink } from 'vue-router';
export default {
    components: { LogoMain, IconPhone, RouterLink }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    padding-top: 61px;
    padding-bottom: 47px;
    justify-content: space-between;
    align-items: center;

    &__left {
        display: flex;
        gap: 27px;
        align-items: center;

        &__nav ul {
            display: flex;
            gap: 41px;

            // color: rgba(0, 0, 0, 0.35);
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    &__rigth {
        display: flex;
        gap: 41px;
        align-items: center;

        &__phone {
            display: flex;
            gap: 10px;
            align-items: center;

            p {
                color: #606060;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }

        &__favorites {
            color: #606060;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        &__basket {
            display: flex;
            border-radius: 13.368px;
            background: rgba(254, 179, 2, 0.45);
            width: 149px;
            height: 53px;
            justify-content: space-around;
            align-items: center;

            &__text {
                color: #FFF;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            &__count {
                width: 38px;
                height: 39px;
                border-radius: 10px;
                background: #FFF;
                align-items: center;
                display: flex;
                justify-content: center;

                & p {
                    color: #444;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
            }
        }
    }
}

@media (max-width: 425px) {
    .header {
        padding-top: 11px;
        padding-bottom: 30px;

        &__left {
            display: flex;
            gap: 27px;
            align-items: center;

            &__logo {
                width: 76px;
                height: 26px;
            }

            &__nav ul {
                display: none;
            }
        }

        &__rigth {
            display: flex;
            gap: 41px;
            align-items: center;

            &__phone p {
                font-size: 12px;
            }

            &__favorites {
                display: none;
            }

            &__basket {
                display: none;
            }
        }
    }
}
</style>