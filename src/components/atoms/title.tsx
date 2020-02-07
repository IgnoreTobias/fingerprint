import React, {ReactElement, useEffect, useState} from 'react'
import styled, {css} from 'styled-components'

import md5 from 'md5'

const fontMono = css`
  font-family: monospace;
  font-weight: 400;
`

const Mono = styled.h1`
  ${fontMono}
  color: #68bccf;
  font-size: 2rem;
  margin: 0 0 20px 0;
`

const MonoSub = styled.h2`
  ${fontMono}
  color: #656778;
  font-size: 1.5rem;
  margin: 0 0 20px 0;
`



interface TitleProps {
  fingerPrint: fingerPrint[]
}

interface fingerPrint {
  key: string
  value: string
}

export default function Title({fingerPrint}: TitleProps): ReactElement {
  const [hashed, setHashed] = useState('')

  useEffect(()=>{
    setHashed(md5(fingerPrint))
    const d = new Date()
    d.setTime(d.getTime() + 10 * 365 * 24 * 60 * 60 * 1000)
    const expires = d.toUTCString()
    document.cookie = `FINGERPRINT=${hashed}; expires=${expires}`
  }, [hashed])

  return (
    <>
      <MonoSub>
        Your Unique Browser Fingerprint:
      </MonoSub>
      <Mono>
        {hashed}
      </Mono>
    </>
  )
}
