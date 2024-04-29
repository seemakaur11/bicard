import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ChooseSection from "@/components/Choose";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "This is About Page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="BECARD imparts a comprehensive training to our students with live projects and placement support which makes the candidates ready to be absorbed in the industry at any time."
      />
      {/* <AboutSectionOne /> */}
      <ChooseSection/>
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
