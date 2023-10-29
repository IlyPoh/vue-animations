<template>
  <section class="slide-second" ref="slideSecond">
    <div class="slide-body">
      <SectionTitle class="second-title" :title="title" />
      <div class="slide-text">{{ text }}</div>
      <div class="slide-pills">
        <div v-for="n in 10" class="slide-pill">
          <img
            src="/src/assets/images/pill.png"
            width="94"
            height="234"
            :alt="'Pill' + n"
          />
        </div>
      </div>
      <div class="slide-shape">
        <svg
          width="1044"
          height="780"
          viewBox="0 0 1044 780"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.8638 192.052C66.1045 181.108 105.6 169.116 145.721 158.005C307.455 113.215 472.127 74.3322 643.024 43.9458C689.649 35.6555 736.629 29.8887 784.922 26.0709C794.012 25.3523 794.296 26.7149 786.3 30.5396C739.973 52.6994 693.29 74.2796 648.567 97.7833C471.877 190.64 312.495 294.487 171.963 409.743C139.094 436.7 111.949 467.185 78.318 493.585C69.6297 500.405 104.006 486.836 116.44 482.945C182.318 462.33 247.042 440.407 312.509 419.319C446.744 376.079 589.146 342.086 731.13 309.516C763.719 302.04 806.535 288.024 843.042 288.024C849.029 288.024 843.759 291.156 841.751 292.492C813.154 311.526 781.345 328.874 751.65 347.181C558.431 466.305 380.627 592.202 218.57 728.938C216.89 730.356 182.198 755.233 194.377 754.474C218.967 752.94 243.464 742.69 265.258 736.812C344.989 715.307 427.526 697.569 509.943 680.208C637.516 653.334 767.728 632.157 897.112 608.708C938.64 601.182 979.526 592.37 1018.51 581.044"
            stroke="#F4F4F4"
            stroke-width="50"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>

    <div class="overflow-container">
      <div class="cards-container">
        <div
          v-for="(card, key) in cards"
          class="card"
          :style="{ 'background-image': url(card.image) }"
          :key="key"
          @mouseenter="showLearnMore()"
          @mouseleave="hideLearnMore()"
        >
          <div class="card-body">
            <div class="card-title">
              {{ card.title }}
            </div>
            <div class="card-text">{{ card.text }}</div>
          </div>
        </div>
        <div class="cards-heart">
          <svg
            width="315"
            height="243"
            viewBox="0 0 315 243"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.9061 13.219C87.694 -18.9842 156.998 104.797 156.998 104.797C156.998 104.797 240.134 -17.5702 296.382 13.2193C352.631 44.0087 174.575 246.189 156.998 234.616C86.248 188.032 -35.2713 42.1364 22.9061 13.219Z"
              stroke="#82FF8E"
              stroke-width="15"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div
          class="cursor"
          :class="getButtonClass()"
          :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
        >
          <div class="cursor-text">Learn<br />more</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import SectionTitle from './SectionTitle.vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      title: 'Everyone can earn in the new creator economy',
      text: 'Trade tokens on Royalty’s open marketplace platform with ease!',
      cards: {
        first: {
          title: 'Creators',
          text: 'Creators earn through token sales, engaging with existing fans and drawing in new supporters.',
          image: '/src/assets/images/slide_3_1.jpg',
        },
        second: {
          title: 'Fans',
          text: 'Fans receive regular payments for holding their tokens. Payments are drawn from ad revenue of their favorite social media creators.',
          image: '/src/assets/images/slide_3_2.jpg',
        },
      },
      showLearnMoreContent: false,
      cursorX: 0,
      cursorY: 0,
    };
  },

  components: {
    SectionTitle,
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

    titleAnimation() {
      gsap.from('.slide-second .second-title', {
        scrollTrigger: {
          trigger: '.slide-second .second-title',
          start: 'top bottom',
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
      });
    },

    titleUnderlineAnimation() {
      gsap.set('.slide-second .section-title-underline', {
        strokeDashoffset: 540,
        strokeDasharray: '540 540',
      });

      gsap.to('.slide-second .section-title-underline', {
        scrollTrigger: {
          trigger: '.slide-second .second-title',
          start: 'top bottom-=100px',
        },
        strokeDashoffset: 0,
        duration: 2.5,
      });
    },

    textAnimation() {
      gsap.from('.slide-second .slide-text', {
        scrollTrigger: {
          trigger: '.slide-second .slide-text',
          start: 'top bottom-=100px',
        },
        opacity: 0,
        y: 50,
        duration: 2.5,
      });
    },

    pillsAnimation() {
      const pills = document.querySelectorAll('.slide-second .slide-pill');

      const pillsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.slide-second .slide-pills',
          start: 'top bottom',
          end: 'bottom 10%',
          scrub: true,
        },
      });

      pillsTimeline.to('.slide-second .slide-pills', {
        left: '-5%',
        duration: 7,
      });

      pillsTimeline.to('.slide-second .slide-pills', {
        left: '100%',
        duration: 4,
      });

      pills.forEach((pill) => {
        const currentRotation = gsap.getProperty(pill, 'rotation');
        const oppositeRotation = -currentRotation;

        gsap.to(pill, {
          rotation: oppositeRotation,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          repeatDelay: 0.1,
        });
      });
    },

    shapeAnimation() {
      gsap.set('.slide-body .slide-shape', {
        strokeDashoffset: 4090,
        strokeDasharray: '4090 4090',
      });

      gsap.to('.slide-body .slide-shape', {
        scrollTrigger: {
          trigger: '.slide-body .slide-shape',
          start: 'top bottom-=100px',
        },
        strokeDashoffset: -4090,
        duration: 15,
        delay: 1,
        repeat: -1,
      });
    },

    cardAnimation() {
      const cards = document.querySelectorAll('.slide-second .card');
      const backgroundPosition = {
        first: gsap.getProperty(cards[0], 'backgroundPositionX'),
        second: gsap.getProperty(cards[1], 'backgroundPositionX'),
      };

      gsap.from(cards[0], {
        scrollTrigger: {
          trigger: cards,
          start: 'top bottom-=100px',
        },
        opacity: 0,
        color: 'transparent',
        x: -400,
        y: 150,
        rotateZ: -30,
        duration: 2,
      });

      gsap.from(cards[1], {
        scrollTrigger: {
          trigger: cards,
          start: 'top bottom-=100px',
        },
        opacity: 0,
        color: 'transparent',
        x: 400,
        y: 300,
        rotateZ: -30,
        duration: 2,
      });

      cards.forEach((item) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: cards,
            start: 'top bottom-=100px',
          },
          backgroundPositionX:
            gsap.getProperty(item, 'backgroundPositionX') - 10,
          duration: 10,
          delay: 2,
          repeat: -1,
          yoyo: true,
        });
      });
    },

    cardMouseMove() {
      const blockElement = document.querySelector('.cards-container');
      const cardElements = document.querySelectorAll('.slide-second .card');
      const buttonElement = document.querySelector('.slide-second .cursor');

      cardElements.forEach((cardElement) => {
        cardElement.addEventListener('mousemove', (e) => {
          const cursorHeight = buttonElement.offsetHeight * 8;
          this.cursorX = e.pageX - blockElement.offsetLeft;
          this.cursorY = e.pageY - blockElement.offsetTop - cursorHeight - 20;
        });
      });
    },

    heartAnimation() {
      gsap.set('.slide-second .cards-heart', {
        strokeDashoffset: 920,
        strokeDasharray: '920 920',
      });

      gsap.to('.slide-second .cards-heart', {
        scrollTrigger: {
          trigger: '.slide-second .cards-heart',
          start: 'top bottom-=100px',
        },
        strokeDashoffset: 0,
        duration: 4,
        delay: 0.5,
      });
    },
  },

  mounted() {
    this.titleAnimation();
    this.titleUnderlineAnimation();
    this.textAnimation();
    this.pillsAnimation();
    this.shapeAnimation();
    this.cardAnimation();
    this.cardMouseMove();
    this.heartAnimation();
  },
};
</script>
