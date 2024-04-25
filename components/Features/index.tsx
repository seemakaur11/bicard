import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Bicard Pune-Best Embedded Systems Course Training Institute"
            paragraph="Bicard is Embedded Systems Course Training Institute in Pune, Maharashtra. Bicard offer courses on embedded software development, hardware design, and real-time systems. Bicard Embedded design courses are designed for both beginners and professionals, and Bicard offer both online classes and in-person or classroom training."
            center
            width="900px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
