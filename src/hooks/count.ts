import { useEffect, useState } from 'react'

const useCount = (value: number, duration: number, inView: boolean): number => {
  const [count, setCount] = useState(0)
  const [animationTrigger, setAnimationTrigger] = useState(false)

  const easeOut = (x: number): number => {
    return Math.sqrt(1 - Math.pow(x - 1, 2))
  }
  useEffect(() => {
    if (inView) {
      setAnimationTrigger(true)
    }
  }, [inView])

  useEffect(() => {
    if (animationTrigger) {
      // 실제 애니메이션의 시간
      const totalAnimationDuration = duration

      // 1프레임당 시간 (1s / 60 frames)
      const FRAME_TIME = 1000 / 60

      // 총 프레임의 개수
      const totalFrames = Math.round(totalAnimationDuration / FRAME_TIME)

      // 프레임의 진행 수
      let frame = 0

      const countingAnimation = setInterval(() => {
        frame++

        // ease-out 프레임 진행도 %
        const easeOutValue = easeOut(frame / totalFrames)

        // ease-out 프레임 만큼 진행된 값 저장
        setCount(Math.round(easeOutValue * value))

        // counting 완료시 함수 종료
        if (frame === totalFrames) {
          clearInterval(countingAnimation)
        }
      }, FRAME_TIME)
    }
  }, [value, animationTrigger])
  return count
}

export default useCount
