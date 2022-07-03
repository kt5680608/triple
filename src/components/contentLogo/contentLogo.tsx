import styled from 'styled-components'

import { Image, Box } from '../../styles/globalStyles'

const LogoText = styled.p`
  padding-top: 200px;
  color: var(--g-color-grey50);
  position: absolute;
`
function ContentLogo() {
  return (
    <Box
      id="logo-container"
      display="flex"
      justify="center"
      align="center"
      direction="column"
    >
      <Image src="/images/triple2x.png" width="400px" height="338px" />
      <LogoText>20년 12월 기준</LogoText>
    </Box>
  )
}

export default ContentLogo
