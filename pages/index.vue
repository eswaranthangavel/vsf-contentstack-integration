<template>
<SfBanner
      class="desktop-only container"     
      title="Colorful summer dresses are already in store" 
      subtitle="Summer Collection 2019"
      image="https://storybook.storefrontui.io/assets/storybook/SfHero/hero.png"
    >    
    </SfBanner>
</template>
<script>
import { SfHeader,SfMenuItem,SfBannerGrid,SfBanner} from '@storefront-ui/vue';
import Stack from "../plugins/entry";
export default {
   components: {     
     SfMenuItem,
     SfBannerGrid,
     SfBanner,
     SfHeader, 
   },
  async asyncData({ store }) {
    const res = await Stack.getEntry("footer_static_content");
    store.commit("setEntries", res[0]);   
    return { data: res[0] };
  },
  layout: "Layout",
};
</script>
<style>

.UiCard {
  overflow: hidden;
  border: 1px solid #dfdfdf;
  border-radius: 0.25rem;
  background-color: #fff;
}

.container {
  padding: 0rem 2em;
}

.sf-banner {
  background-size: auto !important;   
  background-size: auto !important; 
  --banner-background-position: 90% !important;
}
</style>