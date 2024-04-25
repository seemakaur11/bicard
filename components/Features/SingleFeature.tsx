import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full shadow-three rounded bg-white dark:bg-dark px-4 py-6">
      <div className="wow fadeInUp px-4" data-wow-delay=".15s">
        <div className="mb-10 mt-4 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5  text-base font-semibold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-sm font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
        {/* <button className="py-2 px-3 bg-primary text-sm text-white">Read More</button> */}
      </div>
    </div>
  );
};

export default SingleFeature;
