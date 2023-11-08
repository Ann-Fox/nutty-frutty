<template>
  <div class="banner center bg">

    <div class="banner__left">
      <div class="banner__left__text">
        <h1 class="banner__left__text__heading">
          <span class="banner__left__text__heading__dri">Dri</span>
          <span class="banner__left__text__heading__ed">ed</span>
          <br>
          Fruits
        </h1>
        <p class="banner__left__text__tagline">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
          Lorem Ipsum является стандартной</p>
      </div>
      <div class="banner__left__search">
        <input class="banner__left__search__input" type="text" placeholder="Кешью Австралийский">
        <button class="banner__left__search__btn">
          <IconSearch />
        </button>
      </div>
    </div>
    <div class="banner__right">
      <img class="banner__right__img-one" src="/images/banner-1.png" alt="">
      <img class="banner__right__img-two" src="/images/banner-2.png" alt="">
    </div>

  </div>

  <h2 class="header__assortiment">Наш ассортимент</h2>
  <SideBarComponentGorizontal></SideBarComponentGorizontal>
  <AssortmentComponent />
</template>

<script setup>
import AssortmentComponent from '../components/AssortmentComponent.vue';
import IconSearch from '../components/icons/IconSearch.vue';
import SideBarComponentGorizontal from '../components/SideBarComponentGorizontal.vue'
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: space-around;
  padding-top: 131px;
  padding-bottom: 178px;

  &__left {
    display: flex;
    flex-direction: column;
    max-width: 698px;

    &__text {
      padding-bottom: 55px;

      &__heading {
        color: #232323;
        font-size: 161.293px;
        font-style: normal;
        font-weight: 900;
        line-height: 160px;
        letter-spacing: 4.839px;

        &__dri {
          color: #BC5D1D;
          font-weight: 300;
        }

        &__ed {
          font-weight: 300;
        }
      }

      &__tagline {
        color: #605F5F;
        font-size: 23.7px;
        font-style: normal;
        font-weight: 300;
        line-height: 50px;
        /* 210.97% */
        letter-spacing: 1px;
      }
    }

    &__search {
      // max-width: 631px;
      display: flex;
      justify-content: start;
      border-radius: 25px;
      background: #ffffff;

      &__input {
        background: none;
        border: none;
        color: #000;
        // font-family: DM Serif Display;
        font-size: 23.7px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 1px;
        opacity: 0.65;
        padding-left: 29px;
        padding-right: 268px;
      }

      &__btn {
        border-radius: 25px;
        background: #FEB302;
        padding: 33px;
      }
    }
  }

  &__right {
    border-radius: 30.405px;
    background: url('/images/banner-lines.png'), #BC5D1D;
    // background: #BC5D1D;
    min-width: 707px;
    min-height: 749px;
    //     border-radius: 30.405px;
    // background: url(<path-to-image>), lightgray 0px 0px / 100% 100% no-repeat;
    position: relative;
    display: flex;
    align-items: center;

    &__img-one {
      padding-left: 55px;
    }

    &__img-two {
      position: absolute;
      top: 290px;
      left: 430px;
    }
  }
}

.header__assortiment {
  margin-top: 178px;
}

@media(max-width: 425px) {
  .banner {
    display: flex;
    padding-top: 0px;
    padding-bottom: 30px;
    flex-direction: column;

    &__left {
      &__text {
        padding-bottom: 0px;

        &__heading {
          font-size: 64px;
          font-weight: 900;
          line-height: 63px;
          letter-spacing: 1.92px;

          &__ed {
            font-weight: 300;
          }
        }

        &__tagline {
          font-size: 12px;
          line-height: 17px;
        }
      }

      &__search {
        border-radius: 15px;
        max-width: 288px;
        margin: 15px auto;

        &__input {
          font-size: 12px;
          font-weight: 400;
          padding-left: 15px;
          padding-right: 75px;
        }

        &__btn {
          border-radius: 15px;
          padding: 16px;
        }
      }
    }

    &__right {
      background: none;
      min-width: 320px;
      min-height: 195px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &__img-one {
        padding-left: 55px;
        width: 117px;
        height: 194px;
      }

      &__img-two {
        position: absolute;
        top: 30px;
        left: 135px;
        width: 117px;
        height: 194px;
      }
    }
  }
}

.header__assortiment {
  margin-top: 43px;
}
</style>
