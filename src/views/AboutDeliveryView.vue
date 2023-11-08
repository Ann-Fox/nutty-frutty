<template>
  <div class="about center bg">
    <h2>О доставке</h2>
    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"
      для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и
      форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных
      изменений пять веков, но и перешагнул в электронный дизайн.
    </p>
    <LogoMainBig />
  </div>
</template>

<script setup>
import LogoMainBig from '../components/icons/LogoMainBig.vue';

</script>

<style lang="scss" scoped>
.about {
  padding: 42px 144px 143px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1632px;
  gap: 35px;
}

@media(max-width: 425px) {
  .about {
    padding: 0 15px;
  }
}</style>