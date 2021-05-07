<template>
  <SfFooter  
        class="sb-footer" >
        <SfFooterColumn v-for="glink in links_group" :key="glink.static_links_title" :title="glink.static_links_title">        
          <SfList v-if="glink.static_link">
            <SfListItem v-for="ilink in glink.static_link" :key="ilink.title">
              <SfMenuItem :label="ilink.title"/>
            </SfListItem>
          </SfList>
          <div v-else class="sb-footer__social" title="social">
            <SfImage v-for="picture in column.pictures" :key="picture" width="12" height="12" :src="'/assets/storybook/SfFooter/'+picture+'.svg'" class="sb-social-icon"/>
          </div>        
        </SfFooterColumn>         
          <!-- <SfFooterColumn class="sb-footer__social" title="Social">
      <SfImage src="https://docs.storefrontui.io/assets/storybook/SfFooter/facebook.svg" alt="facebook" class="sb-social-icon" />
      <SfImage src="https://docs.storefrontui.io/assets/storybook/SfFooter/pinterest.svg" alt="pinterest" class="sb-social-icon" />
      <SfImage src="https://docs.storefrontui.io/assets/storybook/SfFooter/twitter.svg" alt="twitter" class="sb-social-icon" />
      <SfImage src="https://docs.storefrontui.io/assets/storybook/SfFooter/google.svg" alt="google" class="sb-social-icon" />
      <SfImage src="https://docs.storefrontui.io/assets/storybook/SfFooter/youtube.svg" alt="youtube" class="sb-social-icon" />
    </SfFooterColumn>      -->
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


