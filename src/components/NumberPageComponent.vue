<template>
    <div class="main__top__list">
        <IconArrowLeft></IconArrowLeft>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <IconArrowRight></IconArrowRight>
    </div>
</template>

<script setup>
import IconArrowRight from '../components/icons/IconArrowRight.vue';
import IconArrowLeft from '../components/icons/IconArrowLeft.vue';
</script>

<style lang="scss" scoped>
.main {
    &__top {
        &__list {
            color: rgba(54, 54, 54, 0.35);
            text-align: center;
            font-size: 36px;
            font-style: normal;
            font-weight: 400;
            line-height: 23.171px;
            /* 64.364% */
            letter-spacing: 0.891px;

            display: flex;
            align-items: center;
            gap: 21px;

                 display: flex; 
     justify-content: center;

            ul {
                display: flex;
                gap: 10px;
            }

            li:hover {
                color: #363636;
                cursor: pointer;
            }
        }
    }
}
</style>
