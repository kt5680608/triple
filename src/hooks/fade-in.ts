const useFadeIn = () => {
  const parent = {
    hidden: {},
    show: {
      transition: {
        delay: 0.1,
        staggerChildren: 0.1,
      },
    },
  }
  const child = {
    hidden: { opacity: 0, y: '20px' },
    show: { opacity: 1, y: '0px', transition: { duration: 0.7 } },
  }
  return { parent, child }
}

export default useFadeIn
