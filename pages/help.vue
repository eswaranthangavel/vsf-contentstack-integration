<template>
  <SfContentPages title="Help" active="About us">
    <SfContentPage title="About us">
      <SfTabs >
        <SfTab v-for="litem in data" :key="litem.title"  :title="litem.title">
          <!-- {{litem.description}} -->
          <!-- <div style="color:black" v-html=litem.description></div>-->
          <span style="color:gray" v-html=litem.description></span>
        </SfTab>       
      </SfTabs>
    </SfContentPage>   
    <SfContentPage title="Customer service">
    </SfContentPage>
     <SfContentPage title="Store locator">
        </SfContentPage>
        <SfContentPage title="Delivery">
        </SfContentPage>
        <SfContentPage title="Return Policy">
        </SfContentPage>
        <SfContentPage title="Privacy Policy">
        </SfContentPage>
        <SfContentPage title="Size Guide">
        </SfContentPage>
        <SfContentPage title="Contact Us">
        </SfContentPage> 
  </SfContentPages>
</template>

<script>
import { SfContentPages,SfTabs } from "@storefront-ui/vue";
import Stack from "../plugins/entry";
export default {
    components:{
        SfContentPages,SfTabs
    },
    async asyncData({ store }) {   
    const staticpage=await Stack.getEntry("static_page_block");
    return { data: staticpage };
  },
  }
</script>