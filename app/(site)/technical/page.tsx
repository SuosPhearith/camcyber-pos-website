"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";

const icons = Array.from({ length: 34 }, (_, i) => ({
  src: `/camcyber/Technical/Logos/${i + 1}.png`,
  alt: `${i + 1}`,
}));

export default function Page() {
  return (
    <>
      <section className="flex flex-col items-center py-20">
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
          className="w-3/5 max-w-c-1390  px-4 max-[1000px]:w-full"
        >
          <div className="flex flex-wrap items-center justify-center px-4 py-10">
            {icons.map((icon, index) => (
              <div key={index} className="m-4 flex justify-center">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                />
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
            },

            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <img
            src={"/camcyber/Technical/Logos/POS_Logo.png"}
            alt={"pos_logo"}
            className="h-18 w-18 object-contain"
          />
          <p className="mt-3 text-xl font-bold text-black dark:text-white">
            CamCyber POS
          </p>
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-center bg-[#E2E8F0] py-20 dark:bg-[#1C2136]">
        <div className="container px-4">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              subtitle: "រចនាសម្ព័ន្ធប្រព័ន្ធ",
            }}
          />
        </div>
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
          className="mt-8 flex w-[70%] max-w-c-1390  max-[800px]:w-[90%]"
        >
          <img
            src={"/camcyber/Technical/Technical1.png"}
            alt={"pos_logo"}
            className="h-auto w-full"
          />
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-center py-20">
        <div className="container px-4">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              subtitle: "រចនាសម្ព័ន្ធមូលដ្ធានទិន័យ",
            }}
          />
        </div>
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
          className="mt-8 flex w-[70%] max-w-c-1390  max-[800px]:w-[90%]"
        >
          <img
            src={"/camcyber/Technical/Technical2.png"}
            alt={"pos_logo"}
            className="h-auto w-full"
          />
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-center bg-[#E2E8F0] py-20 dark:bg-[#1C2136]">
        <div className="container px-4">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              subtitle: "រចនាសម្ព័ន្ធកម្មវិធី",
            }}
          />
        </div>
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
          className="mt-8 flex w-[70%] max-w-c-1390  max-[800px]:w-[90%]"
        >
          <img
            src={"/camcyber/Technical/Technical3.png"}
            alt={"pos_logo"}
            className="h-auto w-full"
          />
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-center py-20">
        <div className="container px-4">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              subtitle: "ដំណើរការប្រព័ន្ធ",
            }}
          />
        </div>
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
          className="mt-8 flex w-[70%] max-w-c-1390  max-[800px]:w-[90%]"
        >
          <img
            src={"/camcyber/Technical/Technical4.png"}
            alt={"pos_logo"}
            className="h-auto w-full"
          />
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-center bg-[#E2E8F0] py-20 dark:bg-[#1C2136]">
        <div className="container px-4">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              subtitle: "ទាញយកឯកសារ",
            }}
          />
        </div>
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
          className="mt-8 flex w-[70%] max-w-c-1390 flex-wrap justify-center max-[800px]:w-[90%]"
        >
          <a
            href="https://drive.google.com/file/d/1xmzngqCd_ESicr3CiwJqsyz5-x9itVg9/view"
            target="_bland"
            className="m-3 flex cursor-pointer items-center justify-center rounded-xl bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
          >
            <MdDownload className="mx-2" />
            អំពីកម្មវិធីគិតប្រាក់
          </a>
          <a
            href="/camcyber/Technical/Overview.pdf"
            download
            className="m-3 flex cursor-pointer items-center justify-center rounded-xl bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
          >
            <MdDownload className="mx-2" />
            របៀបប្រើប្រាស់
          </a>
          <a
            href="/camcyber/Technical/Technical.pdf"
            className="m-3 flex cursor-pointer items-center justify-center rounded-xl bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
          >
            <MdDownload className="mx-2" />
            ឯកសារបច្ចេកទេស
          </a>
          <a
            href="https://drive.google.com/file/d/1xmzngqCd_ESicr3CiwJqsyz5-x9itVg9/view"
            target="_bland"
            className="m-3 flex cursor-pointer items-center justify-center rounded-xl bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
          >
            <MdDownload className="mx-2" />
            កម្មវិធីសិក្សា
          </a>
        </motion.div>
      </section>
    </>
  );
}
