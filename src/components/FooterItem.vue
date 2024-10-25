<template>
    <div class="items">
        <div class="items__item" v-for="numSection in numSections" :key="numSection">
            <h4>Раздел {{ numSection }}</h4>
            <div>
                <svg width="61" height="1" viewBox="0 0 61 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="61" y2="0.5" stroke="black" />
                </svg>
            </div>
            <ul>
                <li v-for="product in filterSection(numSection)" :key="product.section">{{
                    product.nameProduct }}</li>
            </ul>
        </div>

        <div class="items__contact">
            <h4>Контакты</h4>
            <div>
                <svg width="61" height="1" viewBox="0 0 61 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="61" y2="0.5" stroke="black" />
                </svg>
            </div>
            <ul>
                <li v-for="contact of contacts" :key="contact.adress">
                    <img :src="contact.img" alt="">
                    {{ contact.adress }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
// import { ref } from 'vue';
const contacts = [
    { img: 'src/assets/img/icons/phone-call.svg', adress: '8 912 323 31 55' },
    { img: 'src/assets/img/icons/phone-call.svg', adress: '8 913 313 31 85' },
    { img: 'src/assets/img/icons/mail.svg', adress: 'nutty-frutty@gmail.com' },
    { img: 'src/assets/img/icons/maps-and-flags.svg', adress: 'г. Пермь, ул. Красные Казармы, 64' },
]
const products = [
    {
        section: 1,
        nameProduct: 'Сухофрукты',
    },
    {
        section: 1,
        nameProduct: 'Орехи',
    },
    {
        section: 1,
        nameProduct: 'Ягоды сушеные',
    },
    {
        section: 1,
        nameProduct: 'Цукаты',
    },
    {
        section: 1,
        nameProduct: 'Экзотические сухофрукты',
    },
    {
        section: 2,
        nameProduct: 'Восточные сладости',
    },
    {
        section: 2,
        nameProduct: 'Семена и бобовые',
    },
    {
        section: 2,
        nameProduct: 'Снеки',
    },
    {
        section: 2,
        nameProduct: 'Бакалея',
    },
    {
        section: 2,
        nameProduct: 'Специи',
    },
    {
        section: 3,
        nameProduct: 'Сухофрукты',
    },
    {
        section: 3,
        nameProduct: 'Орехи',
    },
    {
        section: 3,
        nameProduct: 'Ягоды сушеные',
    },
    {
        section: 3,
        nameProduct: 'Цукаты',
    },
    {
        section: 3,
        nameProduct: 'Экзотические сухофрукты',
    },
];

// const currentNum = ref([products[0]]);

const numSections = [1, 2, 3];

const filterSection = (numSection) => {
    return products.filter((el) => el.section === numSection)
}
</script>

<style lang="scss" scoped>
.items {
    width: 95%;
    margin: 0 auto;
    padding: 25px 0 45px 0;

    h4 {
        color: #000;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    &__item {
        display: none;
    }

    &__contact {
        & ul {
            gap: 10px;
            display: grid;
            padding-top: 16px;
        }

        & li {
            & img {
                width: 15px;
            }

            display: flex;
            gap: 10px;

            color: #252525;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
    }
}


@media(min-width: 1024px) {
    .items {
        display: flex;
        justify-content: space-between;
        padding: 45px 0 75px 0;


        &__item {
            display: flex;
            flex-direction: column;

            & ul {
                gap: 10px;
                display: grid;
                padding-top: 16px;
            }

            & li {
                color: #252525;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }
    }
}

@media(min-width: 1280px) {
    .items {
        h4 {
            font-size: 27px;
        }

        &__item {
            & ul {
                gap: 17px;
                padding-top: 18px;
            }

            & li {
                font-size: 20px;
            }
        }

        &__contact {
            & ul {
                gap: 17px;
                padding-top: 18px;
            }

            & li {
                font-size: 20px;
            }
        }
    }
}
</style>