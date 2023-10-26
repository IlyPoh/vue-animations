<template>
  <section class="container first-slide">
    <div class="first-slide-content">
      <div class="first-slide-content-text">
        <p>{{ text }}}</p>
        <button class="btn">{{ button_text }}</button>
      </div>
      <div class="first-slide-content-body">
        <div class="first-slide-content-body-title">{{ title }}</div>
        <div class="first-slide-content-body-cards">
          <div
            v-for="link in links"
            class="first-slide-content-body-cards-card"
            :style="{ 'background-image': url(link.image) }"
          >
            <div class="first-slide-content-body-cards-card-header">
              <div class="first-slide-content-body-cards-card-header-name">
                {{ link.name }}
              </div>
              <div class="first-slide-content-body-cards-card-header-text">
                {{ link.subs }} mil subscribers
              </div>
            </div>
            <div class="first-slide-content-body-cards-card-footer">
              <div class="first-slide-content-body-cards-card-footer-price">
                <div
                  class="first-slide-content-body-cards-card-footer-category"
                >
                  {{ categories.price }}
                </div>
                <div class="first-slide-content-body-cards-card-footer-content">
                  {{ link.price }} RC
                </div>
              </div>
              <div class="first-slide-content-body-cards-card-footer-time">
                <div
                  class="first-slide-content-body-cards-card-footer-category"
                >
                  {{ categories.time }}
                </div>
                <div class="first-slide-content-body-cards-card-footer-content">
                  {{ link.time.years }}Y : {{ link.time.months }}M :
                  {{ link.time.hours }}H
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
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
          image: '/images/monatik.jpg',
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
          image: '/images/diana.jpg',
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
          image: '/images/trincher.jpg',
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
  },
};
</script>
