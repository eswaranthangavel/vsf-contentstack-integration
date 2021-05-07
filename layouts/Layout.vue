<template>
  <div v-if="entry">
    
    <!-- <myHeader v-if="this.entry.url === '/'" :header="this.entry.header[0]" />
    <customHeader v-else :header="this.entry.header[0]"></customHeader> -->
    <nuxt />
    <myheader/>
    <myFooter :data="this.entry" />
  </div>
</template>

<script>
import { mapState } from "vuex";
// import myHeader from "../components/Header";
// import customHeader from "../components/customHeader";
import myFooter from "../components/Footer";
import myheader from "../components/customBody";
export default {
  components: {
   myheader,
    myFooter,
    
  },
  computed: mapState(["entry"]),
};
</script>
