<template>
    <div class="assortiment center">
        <h2>Наш ассортимент</h2>
        <div class="cards">
            <AssortmentItem></AssortmentItem>
        </div>

    </div>
</template>

<script setup>
import AssortmentItem from './AssortmentItem.vue';
</script>

<style lang="scss" scoped>
.assortiment {
    margin: 178px auto 90px;
}
.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 26px;
    grid-row-gap: 54px;

    // margin: 100px 0;
}
</style>