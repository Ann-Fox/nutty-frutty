import{A as N,u as g}from"./AssortmentItem-a381be8a.js";import{_,o as r,c as i,d as e,F as n,r as y,a as u,t as l,f,u as w,p as m,b as h,g as x,h as $,i as I,e as C}from"./index-1c703136.js";const O={class:"assortiment center"},S={class:"cards"},V={__name:"AssortmentComponent",setup(t){const s=[{id:1,imgUrl:"/nutty-frutty/images/assortiment/apricot.png",name:"Абрикосы",description:"Абрикосы",priceNew:322,priceOld:770,weight:100},{id:2,imgUrl:"/nutty-frutty/images/assortiment/apricot.png",name:"Абрикосы сушеные",description:"Сушенные абрикосы",priceNew:323,priceOld:450,weight:100},{id:3,imgUrl:"/nutty-frutty/images/assortiment/apricot.png",name:"Абрикосы сушеные",description:"Сушенные абрикосы",priceNew:324,priceOld:450,weight:100},{id:1,imgUrl:"/nutty-frutty/images/assortiment/apricot.png",name:"Абрикосы сушеные",description:"Сушенные абрикосы",priceNew:322,priceOld:450,weight:100},{id:1,imgUrl:"/nutty-frutty/images/assortiment/apricot.png",name:"Абрикосы сушеные",description:"Сушенные абрикосы",priceNew:322,priceOld:450,weight:100},{id:1,imgUrl:"/nutty-frutty/images/assortiment/apricot.png",name:"Абрикосы сушеные",description:"Сушенные абрикосы",priceNew:322,priceOld:450,weight:100},{id:1,imgUrl:"/nutty-frutty/images/assortiment/apricot.png",name:"Абрикосы сушеные",description:"Сушенные абрикосы",priceNew:322,priceOld:450,weight:100},{id:1,imgUrl:"/nutty-frutty/images/assortiment/apricot.png",name:"Абрикосы сушеные",description:"Сушенные абрикосы",priceNew:322,priceOld:450,weight:100}];return(c,o)=>(r(),i("div",O,[e("div",S,[(r(),i(n,null,y(s,a=>u(N,{key:a.id,"url-product":a.imgUrl,"name-product":a.name,"description-product":a.description,"price-product":a.priceNew,"price-old-product":a.priceOld},null,8,["url-product","name-product","description-product","price-product","price-old-product"])),64))])]))}},U=_(V,[["__scopeId","data-v-b0d3aa1b"]]);const q=t=>(m("data-v-d04aa66e"),t=t(),h(),t),B={class:"cart__item"},P=q(()=>e("div",null,"100 г",-1)),A={class:"cart__item__price"},E={__name:"CartItem",props:{nameProduct:{type:String,required:!0},priceProduct:{type:Number,required:!0},qtyProduct:{type:Number,required:!0},indexProduct:{type:Number,required:!0}},setup(t){const s=g();return(c,o)=>(r(),i("div",B,[e("div",null,l(t.nameProduct),1),P,e("div",A,[f(l(t.priceProduct)+" Р ",1),e("button",{onClick:o[0]||(o[0]=()=>w(s).remove(t.indexProduct))},"×")])]))}},F=_(E,[["__scopeId","data-v-d04aa66e"]]);const D=t=>(m("data-v-85153d87"),t=t(),h(),t),G={class:"basket__order__list-products"},J={class:"cart__items"},L={class:"basket__order__total"},M=D(()=>e("p",null,"Итого:",-1)),R={__name:"CartView",setup(t){const s=g(),c=x(()=>{let p=0;return s.items.forEach(v=>{p+=Math.round(v.price*100)/100}),p}),o=$(),a=()=>{console.log(JSON.stringify(s.items)),o.push("/")};return(p,v)=>(r(),i(n,null,[e("div",G,[f(" Ваш заказ "),e("div",J,[(r(!0),i(n,null,y(w(s).items,(d,k)=>(r(),I(F,{key:d.name,"name-product":d.name,"price-product":d.price,"qty-product":d.qty,"index-product":k},null,8,["name-product","price-product","qty-product","index-product"]))),128))])]),e("div",L,[M,e("p",null,l(c.value)+" руб.",1)]),e("div",{class:"basket__order__btn"},[e("button",{onClick:a},"Заказать")])],64))}},T=_(R,[["__scopeId","data-v-85153d87"]]);const b=t=>(m("data-v-5aee52d2"),t=t(),h(),t),j={class:"about center bg"},z=b(()=>e("h2",null,"Оформление заказа",-1)),H={class:"basket"},K=C('<div class="basket__form" data-v-5aee52d2><form action="" data-v-5aee52d2><h5 class="basket__form__head" data-v-5aee52d2>Ваше имя</h5><input type="text" data-v-5aee52d2><h5 class="basket__form__head" data-v-5aee52d2>Ваш телефон</h5><input type="tel" placeholder="+7 (911) 111-11-11" data-v-5aee52d2><h5 class="basket__form__head" data-v-5aee52d2>Ваш E-mail</h5><input type="mail" placeholder="E-mail@mail.ru" data-v-5aee52d2><h5 class="basket__form__head" data-v-5aee52d2>Способ оплаты</h5><input type="tel" data-v-5aee52d2><h5 class="basket__form__head" data-v-5aee52d2>Пункт выдачи</h5><input type="tel" data-v-5aee52d2></form></div>',1),Q={class:"basket__order"},W={class:"assortiment center"},X=b(()=>e("h2",null,"Похожие товары",-1)),Y={class:"cards"},Z={__name:"BasketView",setup(t){return(s,c)=>(r(),i(n,null,[e("div",j,[z,e("div",H,[K,e("div",Q,[u(T)])])]),e("div",W,[X,e("div",Y,[u(U)])])],64))}},se=_(Z,[["__scopeId","data-v-5aee52d2"]]);export{se as default};
