export const mainVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

export const childFromRightVariant = {
  hidden: { opacity: 0, x: "110vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.5 },
  },
};
