<template>
  <header class="header container">
    <section class="header-content">
      <a href="/" class="header-logo">
        <transition appear @enter="logoAnimation">
          <svg
            width="35"
            height="39"
            viewBox="0 0 35 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame 1849717037">
              <g id="Group 1849716341">
                <path
                  id="Vector 1348"
                  d="M31.8412 30.2853L3.11914 36.5005V15.2961L10.9524 22.9343L16.5826 7.98422L22.4168 20.0488L30.4949 6.15625L31.8412 30.2853Z"
                  stroke="#08231E"
                  stroke-width="4"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector 1349"
                  d="M2.5105 11.4043C2.27405 11.7039 2.11496 12.2291 2.02792 12.5837C1.97816 12.7864 1.99252 13.0194 2.09288 13.2074C2.26597 13.5317 2.42258 13.6539 2.86316 13.7026C3.18253 13.7379 3.76898 13.7975 4.04179 13.6157C4.30523 13.4401 4.41507 12.7447 4.26452 12.493C4.10106 12.2196 3.8087 11.7272 3.47103 11.5744C3.26086 11.4793 2.91395 11.5404 2.67755 11.5404"
                  stroke="#08231E"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 1350"
                  d="M16.5422 4.73429C16.5155 4.56001 15.9481 4.70413 15.8369 4.74941C15.3115 4.96343 15.0257 5.55707 14.8764 5.99307C14.5703 6.88653 15.8825 7.20042 16.7881 7.1082C17.2196 7.06426 17.6518 6.81385 17.9157 6.5374C18.0497 6.39707 17.9621 6.02108 17.9621 5.86832C17.9621 5.49896 17.8926 5.45885 17.4981 5.30887C17.2317 5.20759 17.0443 5.04087 16.7928 4.93842"
                  stroke="#08231E"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 1351"
                  d="M30.6183 2.5C30.3523 2.5 30.0863 2.5 29.8202 2.5C29.4018 2.5 29.2405 3.11042 29.1984 3.38455C29.0683 4.23238 29.1098 4.95961 30.3399 5.01377C30.9602 5.04109 31.4941 5.03181 31.9083 4.60552C32.2458 4.25826 32.216 3.96378 32.2053 3.53575C32.1937 3.07259 32.0288 2.88884 31.4861 2.77595C30.9302 2.66033 30.2747 2.56804 29.6996 2.56804"
                  stroke="#08231E"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </g>
            </g>
          </svg>
        </transition>
        <span>{{ logo_text }}</span>
      </a>
      <transition appear @enter="navBarAnimation">
        <nav class="header-nav">
          <a
            class="nav-link"
            v-for="(link, key) in links"
            :key="key"
            :href="link.path"
          >
            {{ link.name }}
          </a>
        </nav>
      </transition>
      <transition appear @enter="headerBorderAnimation">
        <div class="header-box">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <rect
              width="100%"
              height="40px"
              style="fill: transparent; stroke: #fff; stroke-width: 10px"
            />
          </svg>
        </div>
      </transition>
    </section>
    <transition appear @enter="buttonAnimation">
      <button class="btn btn-black header-button">{{ button_text }}</button>
    </transition>
  </header>
</template>
<script>
import gsap from 'gsap';

export default {
  data() {
    return {
      logo_text: 'Royalty',
      button_text: 'Launch platform',
      links: [
        { name: 'How it works', path: '/' },
        { name: 'Creators', path: '/creators' },
        { name: 'Holders', path: '/holders' },
        { name: 'About us', path: '/about' },
      ],
    };
  },
  methods: {
    logoAnimation() {
      gsap.set('.header-logo svg path', {
        strokeDashoffset: 131,
        strokeDasharray: '131 131',
      });

      gsap.to('.header-logo svg path', {
        strokeDashoffset: 0,
        duration: 2,
        opacity: 1,
        stagger: 0.5,
      });
    },

    navBarAnimation() {
      gsap.from('.nav-link', {
        delay: 1,
        duration: 1,
        stagger: 0.25,
        opacity: 0,
      });
    },

    getContentHeight() {
      const contentHeight =
        document.querySelector('.header-content').offsetHeight;

      console.log(contentHeight);
      return `${contentHeight}px`;
    },

    headerBorderAnimation() {
      gsap.set('.header-box svg', {
        strokeDashoffset: 0,
        strokeDasharray: '1200 1200',
      });

      gsap.to('.header-box svg', {
        strokeDashoffset: 1200,
        duration: 2,
        opacity: 1,
        delay: 0.5,
      });
    },

    buttonAnimation(el) {
      gsap.from(el, {
        duration: 1,
        opacity: 0,
        y: 100,
        color: 'trasparent',
      });
    },
  },
};
</script>
