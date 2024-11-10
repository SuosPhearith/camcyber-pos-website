"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const Feature = () => {
  const images = [
    "/camcyber/Section-1/Mobile.png",
    "/camcyber/Section-1/Mobile-1.png",
    "/camcyber/Section-1/Mobile-2.png",
    "/camcyber/Section-1/Mobile-3.png",
  ]; // Add your image paths here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <>
      {/* ===== Features Start ===== */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              subtitle: "អ្វីជាកម្មវិធីគិតប្រាក់​ - POS?",
            }}
          />
          {/* Section Title End */}

          <motion.div className="mt-8 flex w-full gap-4">
            {/* Left Section: YouTube Video */}
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
              className="flex w-2/3 items-center justify-center border border-gray-400 bg-gray-200"
            >
              <div
                className="relative h-0 w-full"
                style={{ paddingTop: "56.25%" }}
              >
                <video
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  src="/camcyber/Section-1/demo_v1.mp4"
                  controls
                  title="POS Introduction Video"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            {/* Right Section: Mobile Mockup */}
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
              className="flex w-1/3 items-center justify-center border border-gray-400 bg-gray-100"
            >
              <Image
                src={images[currentImageIndex]}
                alt="POS App Screenshot"
                width={230}
                height={400}
                className="h-full w-auto"
              />
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
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
            className="mt-8 flex w-full justify-end gap-4"
          >
            <button
              onClick={handlePrevious}
              className="rounded-full border border-gray-400 p-4"
            >
              <HiArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-gray-400 p-4"
            >
              <HiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>
      {/* ===== Features End ===== */}
    </>
  );
};

export default Feature;
