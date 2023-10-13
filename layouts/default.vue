<template>
  <div id="app" >
    <SeoKit />
    <Header />
    <slot />
    <Newsletter v-if="route.path != '/contact'" />
    <Footer />
  </div>
</template>

<script setup>
import useAsset from '~/composables/useAsset';

const route = useRoute()

useHead({
  title: 'V-Store',
  meta: [
    { property: 'og:title', content: `V-Store - ${route.meta.title}` },
    { property: 'og:image', content: useAsset('jum1.jpg') }
  ],
  link: [
    { rel: 'canonical', href: process.env.NUXT_PUBLIC_SITE_URL || "https://vue-ecom.vercel.app" },
    { rel: 'icon', type: 'image/x-icon', href: '/fi.ico' }],
  htmlAttrs: { lang: 'en-US' },
})
</script>


<style lang="scss">

@tailwind base;
@tailwind components;
@tailwind utilities;
@layer base {
#app {

@apply text-2xl;
@apply font-sans;
  
}}

</style>