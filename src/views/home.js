import React from "react";
import AppHero from "../components/Home/hero";
import AppAbout from "../components/Home/about";
import AppFeature from "../components/Home/features";
import AppWorks from "../components/Home/howItWorks";
import FaqApp from "./../components/Home/faq";
import PricingApp from "../components/Home/pricing";
import ContactApp from "../components/Home/contact";

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWorks />
      <FaqApp />
      <PricingApp />
      <ContactApp />
    </div>
  );
}
export default AppHome;
