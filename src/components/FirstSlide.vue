<template>
  <section class="container slide-first">
    <div class="slide-content">
      <div class="slide-content-text">
        <transition appear @enter="textAnimation">
          <p>
            <span
              v-for="(word, index) in splittingText"
              class="word"
              :key="index"
            >
              {{ word }}
              <span v-if="index !== splittingText.length - 1"> </span>
            </span>
          </p>
        </transition>
        <transition appear @enter="buttonAnimation">
          <button class="btn">{{ button_text }}</button>
        </transition>
      </div>
      <div class="slide-content-body">
        <transition appear @enter="titleAnimation">
          <div class="slide-content-body-title">
            <span
              v-for="(word, index) in splittingTitle"
              class="word"
              :key="index"
            >
              {{ word }}
              <span v-if="index !== splittingText.length - 1"> </span>
            </span>
          </div>
        </transition>
        <transition appear @enter="cardsAnimation">
          <div class="slide-content-body-cards">
            <div
              v-for="link in links"
              class="card"
              :style="{ 'background-image': url(link.image) }"
            >
              <div class="card-header">
                <div class="card-header-name">
                  {{ link.name }}
                </div>
                <div class="card-header-text">
                  {{ link.subs }} mil subscribers
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-price">
                  <div class="card-footer-category">
                    {{ categories.price }}
                  </div>
                  <div class="card-footer-content">{{ link.price }} RC</div>
                </div>
                <div class="card-footer-time">
                  <div class="card-footer-category">
                    {{ categories.time }}
                  </div>
                  <div class="card-footer-content">
                    {{ link.time.years }}Y : {{ link.time.months }}M :
                    {{ link.time.hours }}H
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <transition appear @enter="backgroundImageAnimation">
        <div class="slide-background-image">
          <svg
            width="631"
            height="494"
            viewBox="0 0 631 494"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M407.697 180.133C375.895 166.022 311.583 -12.4842 289.674 9.38802C267.766 31.2603 235.256 180.133 214.761 180.133C194.267 180.133 -2.20279 127.216 8.39807 145.561C18.9989 163.905 173.771 282.438 173.065 309.955C172.358 337.472 106.633 484.228 127.128 484.228C147.623 484.228 284.02 357.228 311.583 358.639C339.145 360.05 508.759 500.456 522.186 484.228C535.614 468 447.274 329.711 455.754 309.955C464.235 290.2 646.57 145.561 620.421 145.561C594.272 145.561 439.5 194.244 407.697 180.133Z"
              stroke="#82FF8E"
              stroke-width="15"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </transition>
    </div>
  </section>
</template>
<script>
import gsap from 'gsap';

export default {
  data() {
    return {
      title: 'Empowering Every Creator Connecting Every Fan',
      text: `With Royalty, content creators can turn ad revenue into digital tokens, giving fans the opportunity to directly support and invest in their favorite creators.`,
      button_text: 'Сonnect Wallet',
      categories: {
        price: 'Market price',
        time: 'Remaining time',
      },
      links: [
        {
          name: 'Monatik',
          image: '/src/assets/images/monatik.jpg',
          subs: 1,
          price: 1.4,
          time: {
            years: 1,
            months: 2,
            hours: 3,
          },
        },
        {
          name: 'Diana Show',
          image: '/src/assets/images/diana.jpg',
          subs: 1,
          price: 1.4,
          time: {
            years: 1,
            months: 2,
            hours: 3,
          },
        },
        {
          name: 'Anna Trincher',
          image: '/src/assets/images/trincher.jpg',
          subs: 1,
          price: 1.4,
          time: {
            years: 1,
            months: 2,
            hours: 3,
          },
        },
      ],
    };
  },
  methods: {
    url(src) {
      return `url(${src})`;
    },

    // animations
    titleAnimation() {
      gsap.from('.slide-first .slide-content-body-title .word', {
        delay: 1,
        duration: 2,
        opacity: 0,
        stagger: 0.3,
      });

      gsap.from('.slide-first .slide-content-body-title .word', {
        delay: 1,
        duration: 1.5,
        marginLeft: 20,
        stagger: 0.3,
      });
    },

    cardsAnimation() {
      gsap.from('.slide-first .card', {
        duration: 1,
        stagger: -(1 / 3),
        opacity: 0,
        color: 'trasparent',
        x: -100,
        y: 100,
        rotateZ: '-45deg',
      });

      gsap.from('.slide-first .card-header', {
        delay: 0.5,
        duration: 1.5,
        stagger: -0.5,
        opacity: 0,
        color: 'trasparent',
        y: 30,
      });
    },

    textAnimation() {
      gsap.from('.slide-first .slide-content-text .word', {
        delay: 1.5,
        duration: 0.5,
        opacity: 0,
        stagger: 0.1,
      });

      gsap.from('.slide-first .slide-content-text .word', {
        delay: 1.5,
        duration: 1,
        y: 20,
        stagger: 0.1,
      });
    },

    buttonAnimation(el) {
      gsap.from(el, {
        delay: 4,
        duration: 1,
        opacity: 0,
        y: 100,
      });
    },

    backgroundImageAnimation(el) {
      gsap.set(el, {
        strokeDashoffset: 2150,
        strokeDasharray: '2150 2150',
        rotate: -20,
      });

      gsap.to(el, {
        duration: 3,
        strokeDashoffset: 0,
        rotate: 0,
        delay: 0.5,
      });
    },
  },
  computed: {
    splittingTitle() {
      return this.title.split(' ');
    },

    splittingText() {
      return this.text.split(' ');
    },
  },
};
</script>
