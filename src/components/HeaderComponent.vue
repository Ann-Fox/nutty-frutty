<template>
    <div class="background">
        <header class="header center">
        <div class="header__left">
            <div class="header__left__logo">
                <RouterLink to="/"><LogoMain/></RouterLink>
            </div>
            <nav class="header__left__nav">
                <ul>
                    <li><RouterLink to="/">Главная</RouterLink></li>
                    <li>Каталог</li>
                    <li><RouterLink to="/about">О нас</RouterLink></li>
                    <li>О доставке</li>
                    <li>Магазины</li>
                    <li>Контакты</li>
                </ul>
            </nav>
        </div>
        <div class="header__rigth">
            <div class="header__rigth__phone">
                <IconPhone/>
                <p>+7(912) 123 85-65</p>
            </div>
            <div class="header__rigth__favorites">Избранное</div>
            <div class="header__rigth__basket">
                <p class="header__rigth__basket__text">Корзина</p>
                <div class="header__rigth__basket__count">
                    <p>3</p>
                </div>
            </div>
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
//  .background {
//     background: rgba(83, 141, 255, 0.05);
//     box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.10);
//  }

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

            color: #606060;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
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
</style>