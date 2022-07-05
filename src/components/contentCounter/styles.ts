import styled from 'styled-components'

export const CountingItem = styled.div`
  margin-bottom: 7.5px;
  font-size: 36px;
  color: var(--g-color-black);
  letter-spacing: -1px;
  &:last-child {
    margin-bottom: 0px;
  }
`
// 애니메이션 진행에 따라 width 변경 방지
export const Number = styled.span`
  display: inline-block;
  text-align: end;
  width: 64px;
`
