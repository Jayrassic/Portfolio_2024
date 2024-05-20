import { motion, useInView } from "framer-motion";
import { mainVariant, childFromLeftVariant } from "../helpers/viewVariants";
import { useRef, useEffect } from "react";
import { TitleCardH2 } from "../components/Title Card";
import Chat from "../components/Chat";

const ChatPage = () => {
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
      className="no-scrollbar flex h-full snap-start flex-col overflow-x-hidden overflow-y-scroll p-4 sm:max-h-svh sm:min-h-svh sm:p-8"
    >
      <TitleCardH2 title="AI Assistant" />
      <motion.div variants={childFromLeftVariant}>
        <div className="px-2 pb-2 text-center">
          <h2 className="text-xl font-bold">Have more questions about me?</h2>
          <h3 className="text-lg">Ask a total non-bias chat bot.</h3>
          <p className="text-xs">* For Entertainment Purposes Only *</p>
        </div>
        <Chat />
      </motion.div>
    </motion.div>
  );
};

export default ChatPage;
