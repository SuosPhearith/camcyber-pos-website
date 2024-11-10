import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, image } = review;
  return (
    <>
      <div className="flex w-full justify-center">
        <Image
          src={image}
          alt={name}
          width={300}
          height={600}
          className="object-contain"
        />
      </div>
      <div className="text-center text-xl font-semibold text-black dark:text-white">
        {name}
      </div>
    </>
  );
};

export default SingleTestimonial;
