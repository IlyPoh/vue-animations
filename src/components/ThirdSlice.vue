<template>
  <section class="third-slide">
    <div class="section-overflow-x">
      <div
        class="third-slide-cards"
        @mouseenter="showLearnMore()"
        @mouseleave="hideLearnMore()"
      >
        <div
          v-for="(card, key) in cards"
          class="third-slide-cards-card"
          :style="{ 'background-image': url(card.image) }"
          :key="key"
        >
          <div class="third-slide-cards-card-body">
            <div class="third-slide-cards-card-body-title">
              {{ card.title }}
            </div>
            <div class="third-slide-cards-card-body-text">{{ card.text }}</div>
          </div>
        </div>
        <div
          class="custom-cursor"
          :class="getButtonClass()"
          :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
        >
          <div class="custom-cursor-text">Learn<br />more</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cards: {
        first: {
          title: 'Creators',
          text: 'Creators earn through token sales, engaging with existing fans and drawing in new supporters.',
          image: '/images/slide_3_1.jpg',
        },
        second: {
          title: 'Fans',
          text: 'Fans receive regular payments for holding their tokens. Payments are drawn from ad revenue of their favorite social media creators.',
          image: '/images/slide_3_2.jpg',
        },
      },
      showLearnMoreContent: false,
      cursorX: 0,
      cursorY: 0,
    };
  },
  methods: {
    url(src) {
      return `url(${src})`;
    },
    showLearnMore() {
      this.showLearnMoreContent = true;
    },
    hideLearnMore() {
      this.showLearnMoreContent = false;
    },
    getButtonClass() {
      return { visible: this.showLearnMoreContent };
    },
  },
  mounted() {
    const blockElement = document.querySelector('.third-slide-cards');
    const buttonElement = document.querySelector('.custom-cursor');

    blockElement.addEventListener('mousemove', (e) => {
      this.cursorX = e.pageX - blockElement.offsetLeft;
      this.cursorY =
        e.pageY - blockElement.offsetTop - buttonElement.offsetHeight / 2;
    });
  },
};
</script>
