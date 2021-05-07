<template>
  <SfFooter class="sb-footer">
        <SfFooterColumn v-for="glink in data.links_group" :key="glink.static_links_title" :title="glink.static_links_title">        
          <SfList v-if="glink.static_link">
            <SfListItem v-for="ilink in glink.static_link" :key="ilink.title">
              <SfMenuItem :label="ilink.title"/>
            </SfListItem>
          </SfList>                   
        </SfFooterColumn>
         <SfFooterColumn title="Social">
      <div class="footer__socials">
        <SfImage class="footer__social-image" v-for="item in data.social_follow.social_media_platform" :key="item.follow_link.title" :src="'/icons/'+item.follow_link.title+'.svg'" :alt="item.follow_link.title"  />
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
     props: ['data'],  
};
</script>


