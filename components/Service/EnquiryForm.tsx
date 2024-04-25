import React from "react";
import courseData from "./courseData";

const EnquiryForm = () => {
  return (
    <div className="">
      <div className="bg-primary">
        <h3 className="py-2 pl-12 text-[20px] font-medium text-white">
          Enroll Now
        </h3>
      </div>
      <form>
        <div className="mb-8">
          <label
            htmlFor="name"
            className="mb-3 mt-8 block text-lg text-dark dark:text-white"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your answer"
            className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="name"
            className="mb-3 mt-5 block text-lg text-dark dark:text-white"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your answer"
            className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
        </div>
        <div className="">
          <h3 className=" text-[20px] font-medium text-dark dark:text-white">
            Select Course <span className="text-red-500">*</span>
          </h3>
          {!!courseData &&
            courseData.map((data, index) => {
              return (
                <div key={index} className="mt-8 flex justify-center">
                  <input
                    id="shift"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="h-6 w-6 border-gray-300 bg-gray-100 text-blue-600"
                  />
                  <label
                    htmlFor="check"
                    className="w-full pl-6 text-base font-[200] text-body-color dark:font-[600] dark:text-body-color-dark"
                  >
                    {data.title}
                  </label>
                </div>
              );
            })}
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 mt-8 block text-lg text-dark dark:text-white"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="name"
              placeholder="Enter your answer"
              className="w-full rounded-sm border  border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
          <button className="text-white bg-primary py-2 px-6 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
