<template>
  <div class="section-title">
    {{ title }}
    <div class="section-title-underline">
      <svg
        width="598"
        height="67"
        viewBox="0 0 598 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 36.6339C96.1353 36.6339 162.366 37.6648 228.485 36.2668C305.221 34.6443 381.975 30.7191 458.698 30.0258C484.078 29.7964 509.349 31.1584 534.532 31.6778C545.704 31.9082 556.999 34.9819 568 34.9819"
          stroke="#82FF8E"
          stroke-width="60"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
