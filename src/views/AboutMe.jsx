import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  mainVariant,
  childFromLeftVariant,
  childFromRightVariant,
} from "../helpers/viewVariants";

const AboutMe = () => {
  const divRef = useRef(null);

  const isInView = useInView(divRef, { amount: 0.1 });

  useEffect(() => {
    divRef.current.scroll(top);
  }, [isInView]);

  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      ref={divRef}
      className="no-scrollbar flex h-full flex-col overflow-x-hidden overflow-y-scroll p-4 sm:max-h-screen sm:min-h-screen sm:p-8"
    >
      <motion.div variants={childFromRightVariant}>
        <h2 className="rounded-md border-2 border-solid border-black bg-emerald-400 p-2 text-center text-3xl font-bold sm:text-4xl">
          About me
        </h2>
      </motion.div>

      <motion.div
        className="font-lg mx-3 mt-4 text-lg sm:mx-12 sm:mt-8"
        variants={childFromLeftVariant}
      >
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
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
