import { motion, useInView } from "framer-motion";
import { mainVariant } from "../helpers/viewVariants";
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
      className="no-scrollbar flex h-full flex-col overflow-x-hidden overflow-y-scroll p-4 sm:max-h-svh sm:min-h-svh sm:p-8"
    >
      <TitleCardH2 title="AI Assistant" />
      <h2>Have more questions about me?</h2>
      <h3>Ask a total non-bias chat bot.</h3>
      <Chat />
    </motion.div>
  );
};

export default ChatPage;
