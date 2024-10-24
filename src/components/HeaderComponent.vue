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

        <div class="header__rigth visible__rigth">
            <div class="header__rigth__favorites">Избранное</div>
            <RouterLink to="/basket" class="header__rigth__basket">
                <div class="header__rigth__basket__text">Корзина</div>
                <div class="header__rigth__basket__count">
                    <p>3</p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import LogoMain from './icons/LogoMain.vue';
import IconPhone from './icons/IconPhone.vue'
import IconMenuBar from './icons/IconMenuBar.vue';

import { RouterLink } from 'vue-router';

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

    &__nav,
    &__rigth {
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

        &__nav,
        &__rigth {
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

        &__rigth {
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
}

@media (min-width: 1280px) {
    .header {
        &__left {
            &__nav ul {
                font-size: 18px;
            }
        }

        &__rigth {
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
}
</style>