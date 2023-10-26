<template>
  <Header />
  <FirstSlide />
  <SecondSlide />
  <ThirdSlice />
  <FourthSlide />
</template>

<script>
import Header from './components/Header.vue';
import FirstSlide from './components/FirstSlide.vue';
import SecondSlide from './components/SecondSlide.vue';
import ThirdSlice from './components/ThirdSlice.vue';
import FourthSlide from './components/FourthSlide.vue';

export default {
  components: {
    Header,
    FirstSlide,
    SecondSlide,
    ThirdSlice,
    FourthSlide,
  },
};
</script>
