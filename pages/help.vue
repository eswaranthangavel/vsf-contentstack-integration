<template>
  <SfContentPages active="Security">
    <SfContentPage v-for="litem in data" :key="litem.title" :title="litem.title">
      <SfTabs>
        <SfTab :title="litem.sub_title">
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
    //const res = await Stack.getEntry("footer_static_content");
    const staticpage=await Stack.getEntry("static_page_block");
    //let blogRes = await Stack.getEntry("blog_posts");
    //store.commit("setBlogList", blogRes);
    //blogRes = blogRes.filter((obj) => obj.url === "/blog-list");
    //store.commit("setEntries", staticpage);
    //store.commit("setEntries", staticpage);
    console.log(staticpage,'testlog 1');
    // console.log(staticpage[0],'staticpage');
    //store.commit("setFilter", res[0].portfolio.portfolo_details);

    return { data: staticpage };
  },
  //layout: "Layout",
    }

</script>