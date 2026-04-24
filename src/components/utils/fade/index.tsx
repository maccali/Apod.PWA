import React, { ReactNode, useEffect, useState } from 'react'

type FadeProps = {
  children: ReactNode
  left?: boolean
  right?: boolean
  bottom?: boolean
}

function Fade({ children, left, right, bottom }: FadeProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  let initialTransform = 'translate3d(0, 0, 0)'

  if (left) {
    initialTransform = 'translate3d(-18px, 0, 0)'
  } else if (right) {
    initialTransform = 'translate3d(18px, 0, 0)'
  } else if (bottom) {
    initialTransform = 'translate3d(0, 18px, 0)'
  }

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0)' : initialTransform,
        transition: 'opacity 360ms ease, transform 360ms ease',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  )
}

export default Fade
