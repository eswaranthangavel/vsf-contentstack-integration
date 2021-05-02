<template>
 <div>Home page</div>
</template>

<script>
import Stack from "../plugins/entry";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import Portfolio from "../components/Portfolio";
// import Blog from "../components/Blog";
export default {
  // components: {
  //   About,
  //   Contact,
  //   Portfolio,
  //   Blog,
  // },
  async asyncData({ store }) {
    const res = await Stack.getEntry("footer_static_content");
    // let blogRes = await Stack.getEntry("blog_posts");
    // store.commit("setBlogList", blogRes);
    // blogRes = blogRes.filter((obj) => obj.url === "/blog-list");
    store.commit("setEntries", res[0]);
    console.log(res[0],'testlog');
    //store.commit("setFilter", res[0].portfolio.portfolo_details);

    return { data: res[0] };
  },
  layout: "Layout",
};
</script>
