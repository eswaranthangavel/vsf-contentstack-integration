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
// import About from "../components/About";
// import Contact from "../components/Contact";
// import Portfolio from "../components/Portfolio";
// import Blog from "../components/Blog";
export default {
   components: {
     
     SfMenuItem,
     SfBannerGrid,
     SfBanner,
     SfHeader,
  //   About,
  //   Contact,
  //   Portfolio,
  //   Blog,
   },
  async asyncData({ store }) {
    const res = await Stack.getEntry("footer_static_content");
    //const staticpage=await Stack.getEntry("static_page_block");
    let blogRes = await Stack.getEntry("static_page_block");
    store.commit("setBlogList", blogRes);
    //blogRes = blogRes.filter((obj) => obj.url === "/help");
    store.commit("setEntries", res[0]);
    console.log(res[0],'testlog');
    //console.log(staticpage,'staticpage');
    console.log(blogRes,'blogRes');
    //console.log(staticpage[1],'staticpage1');
    //console.log(staticpage[2],'staticpage2');   
    //store.commit("setFilter", res[0].portfolio.portfolo_details);

    return { data: res[0],blogRes };
  },
  layout: "Layout",
};
</script>


