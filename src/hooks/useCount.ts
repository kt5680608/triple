import { useEffect, useState } from 'react'

const useCount = (value: number, inView: boolean): number => {
  const [count, setCount] = useState(0)
  const [start, setStart] = useState(false)
  const easeOut = (x: number): number => {
    return Math.sqrt(1 - Math.pow(x - 1, 2))
  }
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setStart(true)
      }, 700)
    }
  }, [inView])
  useEffect(() => {
    // 실제 애니메이션의 시간
    if (start) {
      const totalAnimationDuration = 2000
      // 1프레임당 시간 (1s / 60 frame)
      const Fps = 1000 / 60

      // 총 프레임의 개수
      const totalFrames = Math.round(totalAnimationDuration / Fps)

      // 프레임의 진행 수
      let frame = 0

      const countingAnimation = setInterval(() => {
        frame++

        // 추천 프레임 진행도 %
        const easeOutValue = easeOut(frame / totalFrames)

        // 추천 프레임 만큼 진행된 값
        const currentCount = Math.round(easeOutValue * value)
        setCount(currentCount)

        // counting 완료시 함수 종료
        if (frame === totalFrames) {
          clearInterval(countingAnimation)
        }
      }, Fps)
    }
  }, [value, start])
  return count
}

export default useCount
