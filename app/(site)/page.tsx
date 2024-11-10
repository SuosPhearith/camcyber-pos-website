import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Function from "@/components/Function";
import KeyFunction from "@/components/KeyFunction";
import Test from "@/components/Test";

export const metadata: Metadata = {
  title: "CamCyber - POS",
  description:
    "The Point of Sale (POS) System is a comprehensive and efficient solution developed by the skilled Camcyber team. This system streamlines the process of managing sales, inventory, and customer transactions for businesses of all sizes. Designed with user-friendliness in mind, the POS System offers robust features such as real-time sales tracking, inventory management, and detailed reporting, enabling businesses to operate smoothly and make informed decisions. With a sleek interface and reliable performance, this system caters to various industries, ensuring adaptability and ease of use. The Camcyber team has dedicated their expertise to delivering a product that enhances productivity and optimizes business operations.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Function />
      <KeyFunction />
      <About />
      <Testimonial />
      <Test />
    </main>
  );
}
