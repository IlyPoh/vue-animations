<template>
  <section class="second-slide">
    <div class="second-slide-body">
      <div class="section-title second-slide-body-title">{{ title }}</div>
      <div class="second-slide-body-text">{{ text }}</div>
      <div class="second-slide-body-pills">
        <div v-for="n in 10" class="second-slide-body-pills-pill">
          <img
            src="/images/pill.png"
            width="94"
            height="234"
            style="width: 100%; max-width: 94px; height: auto"
            :alt="'pill ' + n"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: 'Everyone can earn in the new creator economy',
      text: 'Trade tokens on Royalty’s open marketplace platform with ease!',
    };
  },
};
</script>
