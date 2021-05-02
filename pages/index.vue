<template>

<SfBanner
      class="app-banner desktop-only"     
      title="Summer Collection 2019" 
      subtitle="Colorful summer dresses are already in store"
      image="https://storybook.storefrontui.io/assets/storybook/SfHero/hero.png"
    >
    <div>  
        <SfHeader
          :class="customClass"
          :title="title"
          :logo="logo"
          :active-icon="activeIcon"
          :search-placeholder="searchPlaceholder"
          :search-value="searchValue"
          :cart-icon="cartIcon"
          :wishlist-icon="wishlistIcon"
          :is-sticky="isSticky"
        	:account-icon="accountIcon"
          :style="spacer"
          :cart-items-qty="cartItemsQty"
          :wishlist-items-qty="wishlistItemsQty"
          @click:cart="alert('@click:cart')"
          @click:wishlist="alert('@click:wishlist')"
          @click:account="alert('@click:account')"
          @change:search="searchValue = $event"
      >
        <template #navigation>
          <SfHeaderNavigationItem
            v-for="item in navigation"
            :key="item">
            <template slot="desktop-navigation-item">
              <SfLink href="#">{{items}}</SfLink>
            </template>
          </SfHeaderNavigationItem>
        </template>
      </SfHeader> 
      </div> 
      <div>
        <!-- <SfBannerGrid
        :banner-grid="bannerGrid"
        :style="{maxWidth: '1240px', margin: 'auto'}"
      >
        <template 
          v-for="item in banners"
          v-slot:[item.slot]
        >
          <SfBanner
            :key="item.slot"
            :title="item.title"
            :subtitle="item.subtitle"
            :description="item.description" 
            :button-text="item.buttonText"
            :image="item.image"
            :class="item.class"
          />
        </template>
      </SfBannerGrid> -->
        </div>         
    </SfBanner>    
</template>

<script>
import { SfHeader,SfMenuItem,SfBannerGrid,SfBanner} from '@storefront-ui/vue';
import Stack from "../plugins/entry";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import Portfolio from "../components/Portfolio";
// import Blog from "../components/Blog";
export default {
   components: {
     SfHeader,
     SfMenuItem,
     SfBannerGrid,
     SfBanner,
  //   About,
  //   Contact,
  //   Portfolio,
  //   Blog,
   },
  async asyncData({ store }) {
    const res = await Stack.getEntry("footer_static_content");
    // let blogRes = await Stack.getEntry("blog_posts");
    // store.commit("setBlogList", blogRes);
    // blogRes = blogRes.filter((obj) => obj.url === "/blog-list");
    store.commit("setEntries", res[0]);
    console.log(res[0],'testlog');
    //store.commit("setFilter", res[0].portfolio.portfolo_details);

    return { data: res[0] };
  },
  layout: "Layout",
};
</script>
