<template>
  <header class="header container">
    <section class="header-section">
      <a href="" class="header-section-logo">
        <img
          src="/src/assets/icons/Frame 1849717037.svg"
          height="50"
          width="44"
          alt="logo"
        />
        <span>{{ logo_text }}</span>
      </a>

      <nav class="header-section-nav">
        <a v-for="link in links" :key="link.name" :href="link.path">
          {{ link.name }}
        </a>
      </nav>
    </section>
    <button class="btn btn-black header-button">{{ button_text }}</button>
  </header>
</template>
<script>
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
};
</script>
