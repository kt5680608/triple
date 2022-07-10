import { useEffect, useState } from 'react'
import { AnimationControls } from 'framer-motion'

const useFadeIn = (inView: boolean, animation: AnimationControls) => {
  const [animationTrigger, setAnimationTrigger] = useState(false)
  useEffect(() => {
    if (inView && !animationTrigger) {
      setAnimationTrigger(true)
    }
  }, [inView])
  useEffect(() => {
    if (animationTrigger) {
      animation.start('show')
    }
  })
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
