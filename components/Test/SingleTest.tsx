import { Test } from "@/types/test";
import Image from "next/image";

const SingleTest = ({ review }: { review: Test }) => {
  const { name, description, icon, info, image } = review;
  return (
    <section className="mx-auto max-w-md rounded-lg bg-white p-6 dark:bg-[#121729]">
      {/* Title and Description */}
      <h2 className="mb-2 text-3xl font-bold text-black dark:text-white">
        {name}
      </h2>
      <p className="mb-4 text-lg">{description}</p>

      {/* Download Button */}
      <div className="mt-5 inline-block cursor-pointer rounded-lg bg-[#0C7DA5] px-4 py-2 text-lg font-medium text-white hover:bg-[#206882]">
        {info}
      </div>

      {/* Images */}
      <div className="mt-5 h-72 w-full">
        <Image
          src={image}
          alt={name}
          width={300}
          height={600}
          className="h-full w-full object-contain"
        />
      </div>
    </section>
  );
};

export default SingleTest;
