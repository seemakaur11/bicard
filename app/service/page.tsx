import React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import ServiceSectionOne from '@/components/Service/ServiceSectionOne';

export const metadata: Metadata = {
  title: "Service",
  description: "This is Service page",
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