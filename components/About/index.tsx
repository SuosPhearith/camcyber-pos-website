"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden bg-[#F1F4F9] py-20 dark:bg-[#1C2136] lg:pb-25 xl:pb-30">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 20,
            },

            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0"
        >
          <div className="flex gap-8 max-[700px]:flex-col">
            <div className="w-1/2 max-[700px]:w-full">
              <div className="h-72 w-full">
                <Image
                  src="/camcyber/Section-4/1.png"
                  alt="About"
                  className="h-full w-full rounded-md object-cover"
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="w-1/2 max-[700px]:w-full">
              <h1 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white max-[800px]:text-xl ">
                អំពីប្រព័ន្ធគ្រប់គ្រងការលក់
              </h1>
              <div className="h-1 w-30 bg-green-400"></div>
              <h1 className="mt-4">
                ប្រព័ន្ធគ្រប់គ្រងការលក់គឺជាប្រព័ន្ធដែលអនុញ្ញាតិអោយអ្នកគិតប្រាក់អាចធ្វើការបញ្ចាទិញទំនេញនិងចេញវិក្កយបត្រជូនអតិធិជនភ្លាមៗ។
              </h1>
            </div>
          </div>
        </motion.div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
