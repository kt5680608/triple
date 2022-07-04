import 'styled-components'

import { ContentLogo, ContentCounter } from '../../components'
import { Section } from '../../styles/globalStyles'

function GuidePage() {
  return (
    <Section display="flex" justify="space-between" align="flex-start">
      <ContentLogo />
      <ContentCounter />
    </Section>
  )
}

export default GuidePage
