import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutMe = () => {
  const divRef = useRef(null);

  const isInView = useInView(divRef, { margin: "-2px" });

  useEffect(() => {
    divRef.current.scroll(top);
  }, [isInView]);

  return (
    <motion.div
      ref={divRef}
      className="p-8 overflow-y-scroll max-h-screen snap-start focus:bg-pink-400"
      initial={{ opacity: 0, x: 500 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
      viewport={{ amount: 0.1 }}
    >
      <h2 className="text-center text-4xl border-black border-2 border-solid rounded-md font-serif">
        About me
      </h2>
      <div className="text-base font-mono mx-12 mt-8">
        <p className="py-2 ">
          I’ve always had a passion for building things. It started with a
          curiosity of how things work and eventually led into a career in
          manufacturing and now web development.
        </p>
        <p className="py-2 ">
          I studied mechanical engineering at Polytech, but when my family
          needed help running their automotive parts manufacturing company, I
          transitioned into that industry; starting out as an assembler,
          eventually moving to shop manager, and then fully owning and operating
          the company. At Autex, we designed and manufactured parts for buses
          and sold them throughout North America.{" "}
        </p>
        <p className="py-2 ">
          During my time as the President and CEO, I had many tasks. I was
          responsible for client relations, this included our distributors,
          government municipalities, and direct to customers sales. I was in
          charge of production, sourcing raw materials as well as managing
          inventory and work orders. I also was in charge of research,
          designing, and modifying products. I worked towards digitizing the
          company’s systems and helping them to become more functional and
          productive in a competitive market.
        </p>
        <p className="py-2 ">
          As much as I loved doing what I was doing, eventually the industry
          changed from making products locally to sending designs offshore. The
          industry was also becoming less receptive to new designs and instead
          wanted carbon copies of the same few products. For these reasons, I
          did not see room to be able to continue to grow in this business.
          Because of the hardwork and investment I had put into the company we
          found ourselves in the fortunate position of receiving buyout offers.
          We were bought out and I was free to transition to a new field that
          would allow me to continue to explore my passion for building
          products.
        </p>
        <p className="py-2 ">
          After the sale of the company, I thought about the many opportunities
          that were available to me and I ultimately decided on learning web
          development and programming. I partook in The Odin Project and learned
          a ton of valuable skills that will propel me forward into the next
          phase of my career. I am excited to find new ways to learn and grow in
          this field.{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
