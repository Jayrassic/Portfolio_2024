export const mainVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.00001,
      when: "beforeChildren",
    },
  },
};

export const childFromRightVariant = {
  hidden: { opacity: 0, x: "110vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.5 },
  },
};

export const childFromLeftVariant = {
  hidden: { opacity: 0, x: "-110vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.5 },
  },
};
