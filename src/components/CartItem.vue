<script setup>
import { useCartStore } from '../stores/cart'

defineProps({
  nameProduct: {
    type: String,
    required: true
  },

  priceProduct: {
    type: Number,
    required: true
  },

  qtyProduct: {
    type: Number,
    required: true
  },

  indexProduct: {
    type: Number,
    required: true
  },
  
})
const store = useCartStore()
</script>

<template>
  <div class="cart__item">
    <div>{{ nameProduct }}</div>
    <div>100 г</div>
    <!-- <div>{{ qtyProduct }}</div> -->
    <div class="cart__item__price">
      <!-- {{ Math.round(priceProduct * qtyProduct * 100) / 100 }} -->
      {{ priceProduct }} Р
      <button @click="() => store.remove(indexProduct)">&times;</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart__item {
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 35px;
  grid-row-gap: 0px;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);

  color: rgba(0, 0, 0, 0.75);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.891px;

  &__price {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & button {
      font-size: 40px;
      background: none;
      color: red;
      padding: 0 15px;
    }
  }
}
</style>
