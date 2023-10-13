<template>
  <div class="Linken navbar-item bc d-none d-xl-block d-lg-block py-0">
    <NuxtLink class="Linken" :to="link.Link" v-for="(link, idx) in navLinks" :id="idx">{{ link.name }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">

const navLinks = [
  {
    name: 'Home',
    Link: '/'
  },
  {
    name: 'Products',
    Link: '/products'
  },
  {
    name: 'Contact',
    Link: '/contact'
  }
];
</script>
<style lang="scss">

.Linken {
  @apply text-3xl;
}

</style>