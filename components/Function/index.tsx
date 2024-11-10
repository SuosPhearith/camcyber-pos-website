"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";

const Function = () => {
  const categories = [
    { icon: "/camcyber/Section-2/1.png", label: "ហាងកាហ្វេ" },
    { icon: "/camcyber/Section-2/2.png", label: "ផលិតផលកសិកម្ម" },
    { icon: "/camcyber/Section-2/3.png", label: "សម្លៀកបំពាក់" },
    { icon: "/camcyber/Section-2/4.png", label: "គ្រឿងសង្ហារឹម" },
    { icon: "/camcyber/Section-2/5.png", label: "ភោជនីយដ្ឋាន" },
    { icon: "/camcyber/Section-2/6.png", label: "ហាងអនឡាញ" },
    { icon: "/camcyber/Section-2/7.png", label: "ម៉ាតតូចៗ" },
    { icon: "/camcyber/Section-2/8.png", label: "ម៉ាស៊ីនបោកគក់" },
    { icon: "/camcyber/Section-2/9.png", label: "គ្រឿងអលង្ការ" },
    { icon: "/camcyber/Section-2/10.png", label: "សំណង់" },
    { icon: "/camcyber/Section-2/11.png", label: "ផ្ទះសំណាក់" },
    { icon: "/camcyber/Section-2/12.png", label: "ចំណតរថយន្ត" },
    { icon: "/camcyber/Section-2/13.png", label: "ឱសថស្ថាន" },
    { icon: "/camcyber/Section-2/14.png", label: "គ្រឿងសំអាង" },
    { icon: "/camcyber/Section-2/15.png", label: "ហាងលក់ផ្កា" },
    { icon: "/camcyber/Section-2/16.png", label: "សម្ភារៈទារក" },
    { icon: "/camcyber/Section-2/17.png", label: "ហាងលក់សៀវភៅ" },
    { icon: "/camcyber/Section-2/18.png", label: "ហាងឧបករណ៍អេឡិចត្រូនិច" },
  ];

  return (
    <>
      {/* ===== Functions Start ===== */}
      <section
        id="functions"
        className="bg-[#F1F4F9] py-20 dark:bg-[#1C2136] lg:py-25 xl:py-30 "
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              subtitle: "កម្មវិធីនេះអាចប្រើប្រាស់តាមហាងអ្វីខ្លះ?",
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
            className="container mx-auto mt-16 max-w-c-1390 px-4"
          >
            <motion.div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center rounded-lg p-4 hover:bg-white"
                >
                  <img
                    src={category.icon}
                    alt={category.label}
                    className="mx-auto h-12 w-12"
                  />
                  <motion.div className="mt-3 text-center text-sm font-medium text-gray-600">
                    {category.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* ===== Functions End ===== */}
    </>
  );
};

export default Function;
