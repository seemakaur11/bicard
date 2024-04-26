"use client";
import EnquiryForm from "./EnquiryForm";
import { useState } from "react";
import staffData from "./staffData";

const ServiceSectionOne = () => {
  const [activeCategory, setActiveCategory] = useState(
    "Contract Staffing Solutions",
  );
  const [showDetails, setShowDetails] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState(null);

  const handleButtonClick = (category) => {
    if (activeCategory === category && showDetails) {
      setShowDetails(false);
    } else {
      setActiveCategory(category);
      setShowDetails(true);
      const info = staffData.find((item) => item.name === category);
      setCategoryInfo(info);
    }
  };

  return (
    <section id="service" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
              <div className="w-full">
                <button
                  className={`mb-4 w-full bg-primary text-white px-6 py-3 text-start`}
                  onClick={() =>
                    handleButtonClick("Contract Staffing Solutions")
                  }
                >
                  Contract Staffing Solutions
                </button>
                {activeCategory === "Contract Staffing Solutions" &&
                  showDetails && (
                    <div className="w-full">
                      <p className="mb-2 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                        {categoryInfo.desc}
                      </p>
                    </div>
                  )}
                <button
                  className="mb-4 w-full bg-primary text-white px-6 py-3 text-start"
                  onClick={() =>
                    handleButtonClick("Permanent Staffing Solutions")
                  }
                >
                  Permanent Staffing Solutions
                </button>
                {activeCategory === "Permanent Staffing Solutions" &&
                  showDetails && (
                    <div className="w-full">
                      <p className="mb-2 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                        {categoryInfo.desc}
                      </p>
                    </div>
                  )}
                <button
                  className="mb-4 w-full bg-primary text-white px-6 py-3 text-start"
                  onClick={() =>
                    handleButtonClick("Staff Augmentation Solutions")
                  }
                >
                  Staff Augmentation Solutions
                </button>
                {activeCategory === "Staff Augmentation Solutions" &&
                  showDetails && (
                    <div className="w-full">
                      <p className="mb-2 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                        {categoryInfo.desc}
                      </p>
                    </div>
                  )}
                <button
                  className="mb-4 w-full bg-primary text-white px-6 py-3 text-start"
                  onClick={() => handleButtonClick("Internships at BICARD")}
                >
                  Internships at BICARD
                </button>
                {activeCategory === "Internships at BICARD" && showDetails && (
                  <div className="w-full ">
                    <p className="mb-2 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                      {categoryInfo.desc}
                    </p>
                  </div>
                )}
              </div>
              <div className="rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionOne;
