<template>
      <div>Home | Help
          <myfirstpage/>
      </div>
      
</template>
<script>
import { SfContentPages, SfTabs } from "@storefront-ui/vue";
import myfirstpage from "../components/StaticPage";
export default {
  components:{
     SfContentPages,
     SfTabs,
     myfirstpage,
  },
  props:{
      
      
    }
};

</script>