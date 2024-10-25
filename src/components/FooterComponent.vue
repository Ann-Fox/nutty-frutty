<template>
    <div class="footer">

        <div class="footer__bar center">
            <div class="footer__bar__left">
                <nav class="footer__bar__left__nav">
                    <ul>
                        <li v-for="itemLinkFooter of navLinkFooter" :key="itemLinkFooter.name">
                            <RouterLink :to="itemLinkFooter.link">{{ itemLinkFooter.name }}</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <FavoriteBasketComponent></FavoriteBasketComponent>
        </div>

        <FooterItem />
    </div>
</template>

<script setup>
import FavoriteBasketComponent from './FavoriteBasketComponent.vue';
import FooterItem from './FooterItem.vue';

const navLinkFooter = [
    { name: 'Главная', link: '/' },
    { name: 'Каталог', link: '/our-assortiment' },
    { name: 'О нас', link: '/about' },
    { name: 'О доставке', link: '/about-delivery' },
    { name: 'Наша упаковка', link: '/cart-product' },
    { name: 'Магазины', link: '/our-stores' },
    { name: 'Контакты', link: '/contacts' },
]
</script>

<style lang="scss" scoped>
.footer {
    &__bar {
        display: none;
    }
}

@media (min-width: 1024px) {
    .footer {
        margin-top: 20px;

        &__bar {
            width: 95%;
            margin: 0 auto;
            display: flex;
            padding: 20px 0;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.15);

            &__left {
                display: flex;
                gap: 20px;
                align-items: center;

                &__nav ul {
                    display: flex;
                    gap: 30px;
                    color: rgba(0, 0, 0, 0.35);
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
        }
    }
}

@media (min-width: 1280px) {
    .footer {
        margin-top: 40px;

        &__bar {
            padding-top: 61px;
            padding-bottom: 47px;

            &__left {
                &__nav ul {
                    font-size: 18px;
                }
            }

        }
    }
}
</style>