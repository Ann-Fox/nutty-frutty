<script setup>
import { useCartStore } from '../stores/cart'

import CartItem from '../components/CartItem.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const store = useCartStore()

const total = computed(() => {
  let t = 0

  store.items.forEach((item) => {
    t += Math.round(item.price * 100) / 100
  })

  return t
})

const router = useRouter()

// const removeAllandGo = () => {
//   store.removeAll()
//   router.push('/')
// }

const showAndGo = () => {
  console.log(JSON.stringify(store.items))
  router.push('/')
}
</script>

<template>
  <div class="basket__order__list-products">
    Ваш заказ
    <div class="cart__items">
      <CartItem v-for="(item, index) in store.items" :key="item.name" :name-product="item.name"
        :price-product="item.price" :qty-product="item.qty" :index-product="index">
      </CartItem>
    </div>
  </div>
  <!-- {{ JSON.stringify(store.items) }} -->
  <!-- <div class="cart__total">
    <p>Итого</p>
    <p>{{ total }}</p>
  </div>
  <div class="cart__button">
    <button @click="showAndGo">Берем!</button>
    <button @click="removeAllandGo">Пожалуй, откажусь</button>
  </div> -->
  <div class="basket__order__total">
    <p>Итого:</p>
    <p>{{ total }} руб.</p>
  </div>

  <div class="basket__order__btn">
    <button @click="showAndGo">Заказать</button>
  </div>
</template>

<style lang="scss" scoped>
.cart__items {
  margin-top: 14px;
}

.basket {
  &__order {
    &__list-products {
      border-radius: 15px;
      background: #FFF;
      text-align: center;
      padding: 15px 30px 100px;
    }

    &__total {
      display: flex;
      justify-content: space-between;
      margin: 28px 0 50px;

      & p {
        color: #000;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.891px;
      }

      & p:last-child {
        color: #FEB302;
      }
    }

    &__btn {
      text-align: center;

      & button {
        width: 350px;
        height: 55px;

        border-radius: 13.368px;
        background: #FEB302;

        color: #FFF;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.891px;
      }
    }
  }
}

@media(max-width: 425px) {

  .basket {
    &__order {

      &__list-products {
        max-width: 280px;
        padding: 33px 6px;
      }

      &__total {
        margin: 28px 0 40px;
        flex-direction: column;
      }

      &__btn {
        & button {
          width: 274px;
        }
      }
    }
  }
}
</style>
