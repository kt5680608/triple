import { useState, useEffect } from 'react'
import { AnimationControls } from 'framer-motion'

const useFadeIn = (animation: AnimationControls, inView: boolean) => {
  const [animationTrigger, setAnimationTrigger] = useState(false)

  useEffect(() => {
    if (inView) {
      setAnimationTrigger(true)
    }
  }, [inView])

  useEffect(() => {
    if (animationTrigger) {
      animation.start('show')
    }
  }, [animationTrigger])

  const parent = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const child = {
    hidden: { opacity: 0, y: '30px' },
    show: { opacity: 1, y: '0px', transition: { duration: 0.7 } },
  }

  return { parent, child }
}

export default useFadeIn
