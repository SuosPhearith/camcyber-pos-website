"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-c-1390 flex-col items-center justify-center lg:flex-row lg:gap-12 xl:gap-16">
          {/* Text Section */}
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
            className="text-center lg:w-1/2 lg:text-left"
          >
            <h4 className="mb-4 text-lg font-medium">
              <span className="rounded-full bg-blue-400 px-4 py-1 text-white">
                ប្រព័ន្ធគ្រប់គ្រងការលក់
              </span>
            </h4>
            <h1 className="text-3xl font-bold leading-snug text-black dark:text-white md:text-4xl xl:text-5xl">
              កូដគម្រូនៃកម្មវិធី <br />
              សិក្សាថ្នាក់អ្នកអភិវឌ្ឍកម្មវិធី <br />
              (FullStack Developer)
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              ទាញយកកម្មវិធីទូរស័ព្ទដៃ​​​​​ ឫចូលប្រើប្រាស់សាកល្បងតាមប្រព័ន្ធអនឡាញ
            </p>

            {/* Buttons */}
            <div className="mt-6 flex justify-center gap-3 lg:justify-start">
              <Image
                src="/camcyber/Hero-Section/app_store.svg"
                alt="App Store"
                width={46}
                height={50}
                className="h-10 w-auto max-[500px]:h-6"
              />
              <Image
                src="/camcyber/Hero-Section/google_play.svg"
                alt="Google Play"
                width={46}
                height={50}
                className="h-10 w-auto max-[500px]:h-6"
              />
              <Image
                src="/camcyber/Hero-Section/visit_online.svg"
                alt="Visit Online"
                width={46}
                height={50}
                className="h-10 w-auto max-[500px]:h-6"
              />
            </div>

            {/* Tech Stack Grid */}
            <div className="mt-8 flex  max-[1024px]:justify-center">
              <div className="max-w-[1024px]:mx-auto grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                {[
                  "Docker.png",
                  "angular.png",
                  "botfather.png",
                  "figma.png",
                  "flutter.png",
                  "NestJS.png",
                  "nginx.png",
                  "PostgreSQL.png",
                  "Postman.png",
                  "ubuntu.png",
                ].map((src, idx) => (
                  <Image
                    key={idx}
                    src={`/camcyber/Hero-Section/${src}`}
                    alt={src.split(".")[0]}
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative mt-10 lg:mt-0 lg:w-1/2"
          >
            <div className="relative aspect-video w-full">
              <Image
                className="dark:hidden"
                src="/camcyber/Hero-Section/hero-device.png"
                alt="Hero Device"
                layout="fill"
                priority
              />
              <Image
                className="hidden dark:block"
                src="/camcyber/Hero-Section/hero-device.png"
                alt="Hero Device Dark"
                layout="fill"
                priority
              />
            </div>
            {/* Decorative Shapes */}
            <Image
              src="/images/shape/shape-02.svg"
              alt="shape"
              width={46}
              height={246}
              className="absolute -left-10 -top-5 hidden lg:block"
            />
            <Image
              src="/images/shape/shape-02.svg"
              alt="shape"
              width={36.9}
              height={36.7}
              className="absolute bottom-5 right-5 hidden lg:block"
            />
            <Image
              src="/images/shape/shape-03.svg"
              alt="shape"
              width={21.64}
              height={21.66}
              className="absolute -bottom-5 -right-8 hidden lg:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
