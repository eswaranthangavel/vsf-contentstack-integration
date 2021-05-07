<template>
      <SfContentPages title="Help" active="About us">
    <SfContentPage title="About us">
      <SfTabs :openTab="1" >
        <SfTab title="Security">
          <p>Personal information provided on the website and online credit card transactions are transmitted through a secure server. We are committed to handling your 
personal information with high standards of information security. We take appropriate physical, electronic, and administrative steps to maintain the security and accuracy of personally identifiable information we collect, including limiting the number of people who have physical access to our database servers, as well as employing electronic security systems and password protections that guard against unauthorized access.</p>
    <p>This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.</p>
        </SfTab>
        <SfTab title="Privacy Policy">
          <p>To help us achieve our goal of providing the highest quality products and services, we use information from our interactions with you and other customers, as well as from other parties. Because we respect your privacy, we have implemented procedures to ensure that your personal information is handled in a safe, secure, and responsible manner. We have posted this privacy policy in order to explain our information collection practices and the choices you have about the way information is collected and used.</p>
          <p>As we continue to develop the Luma website and take advantage of advances in technology to improve the services we offer, this privacy policy likely will change. We therefore encourage you to refer to this policy on an ongoing basis so that you understand our current privacy policy.</p>
          <p>This website ("website") is operated by Luma Inc., which includes Luma stores, and Luma Private Sales. This privacy policy only covers information collected at this website, and does not cover any information collected offline by Luma. All Luma websites are covered by this privacy policy.</p>
        </SfTab>
        <SfTab title="Additional Information">
          <p>This section contains any additional information that needs to be provided to the user.&nbsp; This is placeholder text and does not have any text prior to the sub-heading nor does it have a sub title within the body.&nbsp; This text is the only text that needs to be rendered into this block.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </SfTab>
      </SfTabs>
    </SfContentPage>
    <SfContentPage title="Customer service">
        <SfTabs :openTab="1">
        <SfTab title="Size guide">
          This website ('website') is operated by Luma Inc., which includes Luma
          stores, and Luma Private Sales.
        </SfTab>
        <SfTab title="Where's my order?">
          This website ('website') is operated by Luma Inc., which includes Luma
          stores, and Luma Private Sales.
        </SfTab>
      </SfTabs>
        </SfContentPage>
    <SfContentPage title="Store locator">
        </SfContentPage>
        <SfContentPage title="Delivery">
        </SfContentPage>
        <SfContentPage title="Return Policy">
        </SfContentPage>
        <SfContentPage title="Privacy Policy">
        </SfContentPage>
        <SfContentPage title="Size Guide">
        </SfContentPage>
        <SfContentPage title="Contact Us">
        </SfContentPage>
  </SfContentPages>     
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