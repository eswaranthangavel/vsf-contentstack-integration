<template>
  <SfFooter      
        
        class="sb-footer"
      >
        <SfFooterColumn v-for="glink in links_group" :key="glink.static_links_title" :title="glink.static_links_title">        
          <SfList v-if="glink.static_link">
            <SfListItem v-for="ilink in glink.static_link" :key="ilink.title">
              <SfMenuItem :label="ilink.title"/>
            </SfListItem>
          </SfList>
          <div v-else class="sb-footer__social">
            <SfImage v-for="picture in column.pictures" :key="picture" width="12" height="12" :src="'/assets/storybook/SfFooter/'+picture+'.svg'" class="sb-social-icon"/>
          </div>
        </SfFooterColumn>
      </SfFooter>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem } from '@storefront-ui/vue';
export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem
  },
     props: ['links_group'],
  
};
</script>


