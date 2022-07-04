import styled from 'styled-components'

import { Box } from '../../styles/globalStyles'
import useCount from '../../hooks/useCount'

const CountingItem = styled.div`
  margin-bottom: 7.5px;
  font-size: 36px;
  color: var(--g-color-black);
  letter-spacing: -1px;
  &:last-child {
    margin-bottom: 0px;
  }
`

interface CounterProps {
  inView: boolean
}
function ContentCounter({ inView }: CounterProps) {
  const peopleCount = useCount(700, inView)
  const reviewCount = useCount(100, inView)
  const scheduleCount = useCount(470, inView)
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
        <strong>{peopleCount}만 명</strong>의 여행자
      </CountingItem>
      <CountingItem>
        <strong>{reviewCount}만 개</strong>의 여행 리뷰
      </CountingItem>
      <CountingItem>
        <strong>{scheduleCount}만 개</strong>의 여행 일정
      </CountingItem>
    </Box>
  )
}

export default ContentCounter
