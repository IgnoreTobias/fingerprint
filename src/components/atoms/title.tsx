import React, {ReactElement} from 'react'
import styled, {css} from 'styled-components'
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
  fingerPrint: string
}

export default function Title({fingerPrint}: TitleProps): ReactElement {

  return (
    <>
      <MonoSub>
        Your Unique Browser Fingerprint:
      </MonoSub>
      <Mono>
        {fingerPrint}
      </Mono>
    </>
  )
}
