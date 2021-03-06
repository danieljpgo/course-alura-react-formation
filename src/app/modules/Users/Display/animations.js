export const container = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.0,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
