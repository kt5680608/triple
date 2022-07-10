import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

import { ContentLogo, ContentCounter, ContentAward } from '../../components'
import { Section, Box } from '../../styles/global-styles'
import { useFadeIn } from '../../hooks'

function GuidePage() {
  const [ref, inView] = useInView({ trackVisibility: true, delay: 100 })
  const animation = useAnimation()
  const fadeIn = useFadeIn(inView, animation)

  return (
    <Box
      id="main-container"
      width="100vw"
      display="flex"
      justify="flex-start"
      align="center"
      direction="column"
    >
      {/*
       <Box
        id="scrolldown-container"
        height="100vh"
        width="100vw"
        display="flex"
        justify="center"
        align="center"
      >
        스크롤 다운
      </Box> */}
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
        <Box id="main-content-info" display="flex" direction="column">
          <Box id="motion-box" variants={fadeIn.child}>
            <ContentCounter />
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
