import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph,id } = feature;
  return (
    <>
    <div className="w-full shadow-three rounded bg-white dark:bg-dark px-4 py-6">
      <div className="wow fadeInUp px-4" data-wow-delay=".15s">
        <div className="mb-10 mt-4 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-sm mb-5 font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
        <div className={`flex justify-center ${id == 2 || id == 3 ? 'mt-[43px]' : 'mb-5'}`}>
        <Link href="/contact" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More</Link>
        </div>
      </div>
    </div>

    </>
  );
};

export default SingleFeature;
