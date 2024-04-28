import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us ",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="BECARD imparts a comprehensive training to our students with live projects and placement support which makes the candidates ready to be absorbed in the industry at any time."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
