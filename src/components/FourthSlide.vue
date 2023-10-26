<template>
  <section class="fourth-slide">
    <div class="section-overflow-x">
      <div class="fourth-slide-texts">
        <div class="section-title fourth-slide-texts-title">{{ title }}</div>
        <div class="fourth-slide-texts-text">{{ text }}</div>
      </div>
      <div class="fourth-slide-line">
        <div class="fourth-slide-line-block">
          <div v-for="item in items" class="fourth-slide-line-block-item">
            <div class="fourth-slide-line-block-item-image">
              <img :src="item.image" :alt="item.title" width="300" />
            </div>
            <div class="fourth-slide-line-block-item-body">
              <div class="fourth-slide-line-block-item-body-title">
                {{ item.title }}
              </div>
              <div class="fourth-slide-line-block-item-body-text">
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
export default {
  data() {
    return {
      title: 'Created by experts in Youtube',
      text: 'Royalty is the blockchain branch of AIR Media-Tech, one the world’s largest creator ecosystems. AIR Media-Tech is dedicated to increasing the reach and revenue of digital content creators across the world.',
      items: [
        {
          image: '/images/slide_4_1.png',
          title: '12 years',
          text: 'Of empowering content creators',
        },
        {
          image: '/images/slide_4_2.png',
          title: '3,000+',
          text: 'Partner channels',
        },
        {
          image: '/images/slide_4_3.png',
          title: '1 trillion',
          text: 'Total views',
        },
      ],
    };
  },
};
</script>
