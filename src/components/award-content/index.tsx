import { Box, Image } from '../../styles/global-styles'

import { AwardInfo } from './styles'

function ContentAward() {
  return (
    <Box
      id="content-info-award-container"
      display="flex"
      justify="flex-start"
      align="center"
      margin="48px 0 0 0"
    >
      <Box
        id="content-info-award-google"
        display="flex"
        margin="0 39px 0 0"
        align="center"
      >
        <Image src="/images/play-store2x.png" width="54px" height="54px" />
        <AwardInfo>
          2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
        </AwardInfo>
      </Box>
      <Box id="content-info-award-apple" display="flex" align="center">
        <Image src="/images/badge-apple4x.png" width="54px" height="54px" />
        <AwardInfo>
          2018 애플 앱스토어 <br /> 오늘의 여행 앱 선정
        </AwardInfo>
      </Box>
    </Box>
  )
}

export default ContentAward
