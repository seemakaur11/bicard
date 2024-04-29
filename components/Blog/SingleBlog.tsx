import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image,} = blog;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
         
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-base font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
        <Link href="/blog-details">
        <button className="bg-primary py-1 px-3 rounded text-[12px]">Read More</button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
