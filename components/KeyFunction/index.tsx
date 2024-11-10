"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionHeader from "../Common/SectionHeader";

const FeatureSection = () => {
  const features = [
    {
      title: "គ្រប់គ្រងការលក់",
      icon: "/camcyber/Section-3/1.png",
      items: ["លក់រាយ", "ចេញវិក្កយបត្រ"],
    },
    {
      title: "រាយការណ៍",
      icon: "/camcyber/Section-3/2.png",
      items: [
        "លក់ប្រចាំថ្ងៃ សប្ដាហ៍ ខែ",
        "ប្រភេទផលិតផលដែលលក់ដាច់",
        "ផលិតផលដែលលក់ដាច់",
      ],
    },
    {
      title: "គ្រប់គ្រងផលិតផល",
      icon: "/camcyber/Section-3/3.png",
      items: ["ព័ត៍មានលម្អិត", "តម្លៃលក់ចេញ", "តម្លៃទិញចូល"],
    },
    {
      title: "ជំនួយការ​ AI",
      icon: "/camcyber/Section-3/4.png",
      items: ["ទាញយករបាយការណ៍", "ប្រាប់តំណឹង"],
    },
    {
      title: "ប្រើប្រាស់តាមអនឡាញ",
      icon: "/camcyber/Section-3/5.png",
      items: [
        "តាមកុំព្យូទ័រ ថេប្លេត ឬទូស័ព្ទ",
        "ងាយស្រួលប្រើប្រាស់",
        "ងាយស្រួលតាមដានការងារ",
      ],
    },
    {
      title: "ជូនដំណឹង",
      icon: "/camcyber/Section-3/6.png",
      items: [
        "រាយការលក់ម្តងតាមតេឡេក្រាម",
        "របាយការណ៍លក់ប្រចាំថ្ងៃ (ម៉ោង ៥ រសៀល)",
        "ពេលផលិតផលជិតអស់ពីស្តុក",
      ],
    },
  ];

  return (
    <section id="keyFunction" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Title Start */}
        <SectionHeader
          headerInfo={{
            subtitle: "មុខងារសំខាន់ៗ និង​ លក្ខណៈពិសេស",
          }}
        />
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="my-6 flex w-full justify-center"
        >
          <p className="w-1/3 text-center dark:text-white max-[800px]:w-full">
            កម្មវិធីគិតប្រាកត្រូវបាកអភិវឌ្ឈឡើងដើម្បីដោះស្រាយបញ្ហាជូនម្ចាស់អាជីវកម្មដោយផ្ទាល់នៅមុខងារសំខាន់
            ព្រមទាំងរបាយការណ៍ជាក់លាក់
          </p>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center ">
          {/* Left Features */}
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
            className="flex w-full flex-col space-y-8  md:w-1/3 "
          >
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="flex items-start justify-center gap-4 rounded-lg p-4 "
              >
                <div className="flex w-1/3 flex-shrink-0 justify-end ">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-12 w-12"
                  />
                </div>
                <div className="w-2/3 ">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white">
                    {feature.title}
                  </h4>
                  <ul className="space-y-1 text-sm ">
                    {feature.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Center Phone Mockup */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="my-8 flex w-full justify-center max-[770px]:hidden md:my-0 md:w-1/3"
          >
            <Image
              src="/camcyber/Section-3/frame.png"
              alt="POS App"
              width={300}
              height={600}
              className="object-contain"
            />
          </motion.div>

          {/* Right Features */}
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
            className="flex w-full flex-col space-y-8  md:w-1/3"
          >
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="flex items-start justify-center gap-4 rounded-lg p-4"
              >
                <div className="flex w-1/3 flex-shrink-0 justify-end ">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-12 w-12"
                  />
                </div>
                <div className="w-2/3">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-white">
                    {feature.title}
                  </h4>
                  <ul className="space-y-1 text-sm ">
                    {feature.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
