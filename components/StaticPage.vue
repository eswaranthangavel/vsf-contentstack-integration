<template>
    <SfContentPages
        :title="title"
        :active="activePage"
        @click:change="activePage = $event"
    >
      <template #menu-item="{ updatePage, page}">
        <button @click="updatePage(page.title)">{{page.title}}</button>
      </template>
      <SfContentPage v-for="(page, key) in pages" :key="page.title+key" :title="page.title">
        <SfTabs v-if="page.tabs" :open-tab="1">
          <SfTab v-for="(tab, key) in page.tabs" :key="tab.title+key" :title="tab.title">{{tab.content}}</SfTab>
        </SfTabs>
        <p v-else :style="{padding: '1.25rem 0'}">{{page.content}}}}</p>
      </SfContentPage>
    </SfContentPages>
</template>
<script>
import { SfContentPages, SfTabs } from "@storefront-ui/vue";
export default {
  components:{
     SfContentPages,
     SfTabs,
  },
  props:["static page"]  
};

</script>