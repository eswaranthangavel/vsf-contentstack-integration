<template>
  <SfContentPages title="Help" active="About us">
    <SfContentPage title="About us">
      <SfTabs >
        <SfTab v-for="litem in data" :key="litem.title"  :title="litem.title">
          {{litem.description}}
        </SfTab>       
      </SfTabs>
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