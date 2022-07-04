import 'styled-components'

import { ContentLogo, ContentCounter, ContentAward } from '../../components'
import { Section, Box } from '../../styles/globalStyles'

function GuidePage() {
  return (
    <Section display="flex" justify="space-between" align="flex-start">
      <ContentLogo />
      <Box id="content-info" display="flex" direction="column">
        <ContentCounter />
        <ContentAward />
      </Box>
    </Section>
  )
}

export default GuidePage
