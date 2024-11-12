import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { mainVariant, childFromLeftVariant } from "../helpers/viewVariants";
import { TitleCardH2 } from "../components/Title Card";

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
      className="no-scrollbar flex h-full flex-col overflow-x-hidden overflow-y-scroll p-4 sm:max-h-svh sm:min-h-svh sm:p-8"
    >
      <TitleCardH2 title="About Me" />

      <motion.div
        className="font-lg mx-3 mt-4 text-lg sm:mx-12 sm:mt-8"
        variants={childFromLeftVariant}
      >
        <p className="py-2 ">
          I have always had a passion for building things. It started with a
          curiosity of how things work and eventually led to being the product
          developer of a successful auto parts manufacturing business. With the
          aid of The Odin Project, my passion for building things has turned
          into a burgeoning career in web development.
        </p>

        <p className="py-2">
          I studied mechanical engineering at NYU Tandon School of Engineering
          (formerly Polytechnic University), but when my family needed help
          running their automotive parts manufacturing company, I transitioned
          into that industry and took on progressively more responsible
          leadership roles. The company designed and manufactured parts for
          buses and sold them throughout North America. I moved up the ranks
          from an assembler, to the shop manager, and ultimately, to operating
          the company.
        </p>

        <p className="py-2">
          I successfully maintained a complex and complicated slate of
          financial, operational, and logistical responsibilities involving both
          products and personnel. I also was responsible for client relations,
          which included managing relationships with our distributors,
          government municipalities, and direct customer sales. I oversaw
          production, sourcing of materials, as well as managing inventory and
          work orders. Another area of my purview was the research, design, and
          modification of new and existing products. I digitized the company’s
          systems, which allowed us to be more functional and productive in a
          highly competitive market.
        </p>

        <p className="py-2">
          We sold the business, and I began to transition to the field of web
          development - a space that I felt would allow me to explore my passion
          for building products and technologies. As someone who spent a lot of
          time reading, researching, and playing video games on the internet, I
          was excited to actually learn about the tools and technologies that
          bring it all to life. I became so interested and invested in this
          learning that I decided to pursue web development as my next career
          path. I studied and gained creative skills and insights through The
          Odin Project, where I learned a wealth of valuable skills that will
          propel me into the next phase of my career. I am excited to find new
          ways to learn and grow in this field and continue to build new and
          exciting products to help, educate, and entertain people.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
