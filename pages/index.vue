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
import "../assets/Css/style.scss";
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