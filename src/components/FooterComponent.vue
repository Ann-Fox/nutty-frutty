<template>
    <div class="footer">
      
            <header class="header center">
                <div class="header__left">
                    <nav class="header__left__nav">
                        <ul>
                            <li>
                                <RouterLink to="/">Главная</RouterLink>
                            </li>
                            <li><RouterLink to="/our-assortiment">Каталог</RouterLink>
                                </li>
                            <li>
                                <RouterLink to="/about">О нас</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/about-delivery">О доставке</RouterLink>
                            </li>
                             <li>
                               Наша упаковка
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
                    <div class="header__rigth__favorites">Избранное</div>
                    <RouterLink to="/basket" class="header__rigth__basket">
                        <div class="header__rigth__basket__text">Корзина</div>
                        <div class="header__rigth__basket__count">
                            <p>3</p>
                        </div>
                    </RouterLink>
                </div>
            </header>
        
        <FooterItem />
    </div>
</template>

<script setup>
import FooterItem from './FooterItem.vue';

</script>

<style lang="scss" scoped>
.footer {
    margin-top: 40px;
    // border-top: 1px solid rgba(0, 0, 0, 0.15);
}

.header {
    display: flex;
    padding-top: 61px;
    padding-bottom: 47px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);

    &__left {
        display: flex;
        gap: 27px;
        align-items: center;

        &__nav ul {
            display: flex;
            gap: 41px;

            // color: rgba(0, 0, 0, 0.35);
            color: #000;
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
</style>