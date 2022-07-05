import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

import { ContentLogo, ContentCounter, ContentAward } from '../../components'
import { Section, Box } from '../../styles/globalStyles'
import { useFadeIn } from '../../hooks'

function GuidePage() {
  const [ref, inView] = useInView({ trackVisibility: true, delay: 100 })
  const animation = useAnimation()
  const fadeIn = useFadeIn()
  const [animationStart, setAnimationStart] = useState(false)

  useEffect(() => {
    if (inView) {
      setAnimationStart(true)
    }
  }, [inView])
  useEffect(() => {
    if (animationStart) {
      animation.start('show')
    }
  }, [animationStart])
  return (
    <Box
      id="main-container"
      width="100vw"
      display="flex"
      justify="flex-start"
      align="center"
      direction="column"
    >
      <Box id="scrolldown-container" height="120vh" width="100vw">
        스크롤 다운
      </Box>
      <Section
        display="flex"
        justify="space-between"
        align="flex-start"
        ref={ref}
        variants={fadeIn.parent}
        initial="hidden"
        animate={animation}
      >
        <Box id="motion-box" variants={fadeIn.child}>
          <ContentLogo />
        </Box>
        <Box id="content-info" display="flex" direction="column">
          <Box id="motion-box" variants={fadeIn.child}>
            <ContentCounter inView={inView} />
          </Box>
          <Box id="motion-box" variants={fadeIn.child}>
            <ContentAward />
          </Box>
        </Box>
      </Section>
    </Box>
  )
}

export default GuidePage
