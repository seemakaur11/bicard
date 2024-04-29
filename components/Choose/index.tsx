import SectionTitle from "../Common/SectionTitle";
import ChooseData from "./ChooseData";
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";

const ChooseSection = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Why Choose Us?."
            paragraph="At BICARD, we strive to deliver the best IT training to the learners. We believe in active learning and thus, ensure that every moment of our training is relevant for the student. Our training is interactive, groups are small and our trainers bring their real-world experience to the training sessions along with hands-on practice on live projects. Our trainers and industry professionals specialize in design and delivery of IT training across a wide array of up-to-the-minute technologies, development frameworks and subjects, as well designing of corporate training programs suiting the specific requisites of the organizations. As a result, BICARD culminated as the TOP NOTCH institute to be chosen by IT learners which makes them learn fast and retain more."
            center
            width="900px"
          />
          <div className="grid sm:grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {ChooseData.map((data) => (
              <div
                key={data.id}
                className="w-full rounded bg-white px-4 py-6 shadow-three dark:bg-dark"
              >
                <div className="flex justify-center"><FaRegCircleCheck className="text-3xl text-primary"/></div>
                <div className="wow fadeInUp text-center px-4 pt-4" data-wow-delay=".15s">
               
                  <h3 className="mb-5 font-bold text-primary text-base">
                    {data.title}
                  </h3>
                  <p className="mb-5 text-sm font-medium leading-relaxed text-body-color">
                    {data.para}
                  </p>
                </div>
              </div>
            ))}
            
          </div>
          <div className="flex justify-center pt-5">
            <Link href="/contact" className="bg-primary px-4 py-3 rounded">Enquire Now</Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default ChooseSection;
