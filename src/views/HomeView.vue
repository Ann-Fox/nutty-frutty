<template>
  <div class="banner bg">

    <div class="banner__left">
      <div class="banner__left__text">
        <h1 class="banner__left__text__heading">
          <span class="banner__left__text__heading__dri">Dri</span>
          <span class="banner__left__text__heading__ed">ed</span>
          <br>
          Fruits
        </h1>
        <p class="banner__left__text__tagline">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне.
          Lorem Ipsum является стандартной</p>
      </div>
      <div class="banner__left__imgs">
        <img class="banner__left__imgs__img pos1" src="/images/banner-1.png" alt="" srcset="">
        <img class="banner__left__imgs__img pos2" src="/images/banner-2.png" alt="" srcset="">
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

  <!-- <h2 class="header__assortiment">Наш ассортимент</h2>
  <SideBarComponentGorizontal></SideBarComponentGorizontal>
  <AssortmentComponent /> -->
</template>

<script setup>
// import AssortmentComponent from '../components/AssortmentComponent.vue';
import IconSearch from '../components/icons/IconSearch.vue';
// import SideBarComponentGorizontal from '../components/SideBarComponentGorizontal.vue'
</script>

<style lang="scss" scoped>
.pos2 {
  position: absolute;
  top: 21px;
  left: -40px;
}

.banner {
  padding: 0 2.5% 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  &__left {
    &__text {
      padding-bottom: 0px;

      &__heading {
        color: #232323;
        font-style: normal;

        font-size: 64px;
        font-weight: 900;
        line-height: 63px;
        letter-spacing: 1.92px;

        &__dri {
          color: #BC5D1D;
          font-weight: 300;
        }

        &__ed {
          font-weight: 300;
        }
      }

      &__tagline {
        max-width: 85%;
        color: #605F5F;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
      }
    }

    &__imgs {
      display: flex;
      padding: 0 0 0 30%;
      margin: 22px 0 56px;

      &__img {
        max-width: 40%;
        position: relative;
      }
    }

    &__search {
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      border-radius: 15px;
      margin: 15px auto;

      &__input {
        font-size: 12px;
        font-weight: 400;
        background: none;
        border: none;
        color: #000;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 1px;
        opacity: 0.65;
        padding-left: 15px;
        max-width: 80%;
      }

      &__btn {
        border-radius: 15px;
        padding: 16px;
        background: #FEB302;
      }
    }
  }

  &__right {
    display: none;
  }
}

@media(min-width: 768px) {
  .banner {
    flex-direction: row;
    &__left {
      width: 50%;
      &__text {
        &__heading {
          font-size: 80px;
          margin-bottom: 20px;
        }

        &__tagline {
          font-size: 16px;
          line-height: 20px;
        }
      }

      &__imgs {
        display: none;
      }

      &__search {
        max-width: 80%;
        margin: 50px 0;
      }
    }

    &__right {
      position: relative;
      width: 50%;
      background:   #BC5D1D;
      // url('/images/banner-lines.png'), #BC5D1D; 
     
      background-size: cover;
      background-position: top;

      border-radius: 30px;
      display: flex;

      &__img-one {
        width: 35%;
        // position: absolute;
        // top: 15%;
        // left: 20%;
        position: absolute;
    top: 50%;
    left: 35%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
      }

      &__img-two {
        width: 35%;
        position: absolute;
    top: 60%;
    left: 60%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
      }
    }
  }
}

@media(min-width: 1024px) {
  .banner {
    padding: 50px 2.5%;
    &__left {
      &__text {
        &__heading {
          font-size: 100px;
          margin-bottom: 30px;
          line-height: 83px;
        }

        &__tagline {
          font-size: 20px;
          line-height: 25px;
        }
      }
      &__search {
        &__input {
          font-size: 18px;
        }
    }
  }
}
}

@media(min-width: 1380px) {
  .banner {
    &__left {
      &__text {
        &__heading {
          font-size: 120px;
          margin-bottom: 30px;
          line-height: 103px;
        }

        &__tagline {
          font-size: 24px;
          line-height: 30px;
        }
      }
      &__search {
        &__input {
          font-size: 20px;
        }
      }
    }
  }
}

@media(min-width: 1536px) {
  .banner {
    // padding: 40px 5%; //по макету 100px 
    &__left {
      &__text {
        &__heading {
          font-size: 160px;
          margin-bottom: 40px;
          line-height: 160px;
        }

        &__tagline {
          font-size: 28px;
          line-height: 50px;
        }
      }
      &__search {
        &__input {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
