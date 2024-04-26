import EnquiryForm from "../Service/EnquiryForm";
import Map from "../Footer/Map";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* <div className="-mx-4 flex flex-wrap items-center"> */}
        <div className="grid gap-16 md:grid-cols-1 lg:grid-cols-2">
          <div className="">
            <h3 className="mb-8 text-xl font-bold text-black dark:text-white sm:text-2xl">
              Get in Touch With Us
            </h3>
            <div>
              <h1 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Address
              </h1>
              <p className="mb-5 text-base text-body-color dark:text-body-color-dark">
                Office No.54-55, 3rd Floor, &apos;C&apos; Block, Shrinath
                Plaza,Dnyaneshwar Paduka Chowk, FC Road, Pune, Maharashtra
              </p>
            </div>
            <div>
              <h1 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Phone
              </h1>
              <div className="mb-2 flex">
                <FaPhoneAlt className="mr-3 text-xl text-primary" />
                <p className="cursor-pointer text-body-color hover:text-blue-400 dark:text-body-color-dark dark:hover:text-blue-400">
                  +91 7276606655
                </p>
              </div>
              <div className="mb-8 flex">
                <FaWhatsapp className="mr-3 text-2xl text-primary" />
                <p className="cursor-pointer text-body-color hover:text-blue-400 dark:text-body-color-dark dark:hover:text-blue-400">
                  +91 9595605544
                </p>
              </div>
              <div>
                <h1 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Email
                </h1>
                <div className="mb-2 flex">
                  <MdEmail className="mr-3 text-xl text-primary" />
                  <p className="cursor-pointer text-body-color hover:text-blue-400 dark:text-body-color-dark dark:hover:text-blue-400">
                    training@bicard.org
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Map />
            </div>
          </div>
          <div className="w-full rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
