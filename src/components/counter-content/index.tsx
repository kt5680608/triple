import { useCount } from '../../hooks'
import { Box } from '../../styles/global-styles'

import { CountingItem, Number } from './styles'

function ContentCounter() {
  const peopleCount = useCount(700, 2000)
  const reviewCount = useCount(100, 2000)
  const scheduleCount = useCount(470, 2000)
  return (
    <Box
      id="content-counter-container"
      display="flex"
      direction="column"
      justify="flex-start"
      align="flex-start"
      height="100%"
    >
      <CountingItem>
        <strong>
          <Number>{peopleCount}</Number>만 명
        </strong>
        의 여행자
      </CountingItem>
      <CountingItem>
        <strong>
          <Number>{reviewCount}</Number>만 개
        </strong>
        의 여행 리뷰
      </CountingItem>
      <CountingItem>
        <strong>
          <Number>{scheduleCount}</Number>만 개
        </strong>
        의 여행 일정
      </CountingItem>
    </Box>
  )
}

export default ContentCounter
