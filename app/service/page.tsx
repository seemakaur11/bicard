import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import ServiceSectionOne from '@/components/Service/ServiceSectionOne';

export const metadata: Metadata = {
  title: "About Us",
  description: "This is About Page",
};

const ServicePage= () => {
  return (
    <>
     <Breadcrumb
        pageName="Service"
        description="BECARD imparts a comprehensive training to our students with live projects and placement support which makes the candidates ready to be absorbed in the industry at any time."
      />
      <ServiceSectionOne/>
    </>
  )
}

export default ServicePage