import styled from 'styled-components'

import { Box } from '../../styles/globalStyles'
import useCount from '../../hooks/useCount'

const CountingItem = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  color: var(--g-color-black);
  letter-spacing: -1px;
  &:last-child {
    margin-bottom: 0px;
  }
`
function ContentCounter() {
  const peopleCount = useCount(700)
  const reviewCount = useCount(100)
  const scheduleCount = useCount(470)
  return (
    <Box
      id="counter-container"
      display="flex"
      direction="column"
      justify="flex-start"
      align="flex-start"
      height="100%"
    >
      <CountingItem>
        <strong>{peopleCount}</strong>만 명의 여행자
      </CountingItem>
      <CountingItem>
        <strong>{reviewCount}</strong>만 개의 여행 리뷰
      </CountingItem>
      <CountingItem>
        <strong>{scheduleCount}</strong>만 개의 여행 일정
      </CountingItem>
    </Box>
  )
}

export default ContentCounter
