import { Image, Box } from '../../styles/globalStyles'

import { LogoText } from './styles'

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
