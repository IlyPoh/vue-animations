<template>
  <section class="slide-third">
    <div class="overflow-container">
      <div class="text-container">
        <SectionTitle :title="title" />
        <div class="slide-text">{{ text }}</div>
      </div>
      <div class="line-container">
        <div class="line-block">
          <div class="line-background"></div>
          <div
            v-for="(item, index) in repeatedItems"
            :key="index"
            class="line-item"
          >
            <div class="item-image">
              <img :src="item.image" :alt="item.title" width="300" />
            </div>
            <div class="item-details">
              <div class="item-title">
                {{ item.title }}
              </div>
              <div class="item-text">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';
import { gsap } from 'gsap';

export default {
  data() {
    return {
      title: 'Created by experts in Youtube',
      text: 'Royalty is the blockchain branch of AIR Media-Tech, one the world’s largest creator ecosystems. AIR Media-Tech is dedicated to increasing the reach and revenue of digital content creators across the world.',
      items: [
        {
          image: '/src/assets/images/slide_4_1.png',
          title: '12 years',
          text: 'Of empowering content creators',
        },
        {
          image: '/src/assets/images/slide_4_2.png',
          title: '3,000+',
          text: 'Partner channels',
        },
        {
          image: '/src/assets/images/slide_4_3.png',
          title: '1 trillion',
          text: 'Total views',
        },
      ],
    };
  },

  components: {
    SectionTitle,
  },

  computed: {
    repeatedItems() {
      return [...this.items, ...this.items];
    },
  },

  mounted() {
    this.titleAnimation();
    this.underlineAnimation();
    this.textAnimation();
    this.endlessLineAnimation();
  },

  methods: {
    titleAnimation() {
      gsap.from('.slide-third .section-title', {
        scrollTrigger: {
          trigger: '.slide-third .section-title',
          start: 'top bottom-=100px',
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
      });
    },

    underlineAnimation() {
      gsap.set('.slide-third .section-title-underline', {
        strokeDashoffset: 540,
        strokeDasharray: '540 540',
      });

      gsap.to('.slide-third .section-title-underline', {
        scrollTrigger: {
          trigger: '.slide-third .section-title',
          start: 'top bottom-=100px',
        },
        strokeDashoffset: 0,
        duration: 2.5,
      });
    },

    textAnimation() {
      gsap.from('.slide-third .slide-text', {
        scrollTrigger: {
          trigger: '.slide-third .slide-text',
          start: 'top bottom-=100px',
        },
        opacity: 0,
        y: 100,
        duration: 2,
      });
    },

    endlessLineAnimation() {
      const container = document.querySelector('.line-block');
      const items = document.querySelectorAll('.line-item');

      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            x: -2100,
          },
          {
            x: -100,
            ease: 'linear',
            repeat: -1,
            duration: 20,
            scrollTrigger: {
              trigger: container,
              start: 'top bottom-=100px',
            },
          }
        );
      });
    },
  },
};
</script>
