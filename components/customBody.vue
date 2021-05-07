<template>
   <SfSection
      title-heading="Share Your Look"
      subtitle-heading="#YOURLOOK"
      class="share-your-look"
    >
      <div class="instagram-grid">
        <div
          v-for="(col, rowKey) in instagramFeed"
          :key="rowKey"
          class="instagram-grid__row"
        >
          <div
            v-for="(image, colKey) in col"
            :key="colKey"
            class="instagram-grid__col"
          >
            <SfImage :src="image.url" :alt="image.content" width="470">{{
              image.content
            }}</SfImage>
          </div>
        </div>
      </div>
    </SfSection>  
</template>
<script>
import { SfHeader,SfSection } from '@storefront-ui/vue';
export default {
  components: {
   SfHeader,
   SfSection,
  },
     props: ["instagramFeed"],
  
};
</script>
