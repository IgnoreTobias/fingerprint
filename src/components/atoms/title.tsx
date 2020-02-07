import React, {ReactElement} from 'react'
import styled, {css} from 'styled-components'

const FlexItem = styled.div`
  padding: 1vw 20px;
`

const fontMono = css`
  font-family: monospace;
  font-weight: 400;
  display: inline;
  word-break: break-all;
`

const Mono = styled.h1`
  ${fontMono}
  color: #68bccf;
  font-size: 1.5rem;
  @media(min-width: 768px){
    font-size: 2.5rem;
  }
  @media(min-width: 1024px){
    font-size: 3.5rem;
  }
`

const MonoSub = styled.h2`
  ${fontMono}
  color: #656778;
  font-size: 1rem;
  @media(min-width: 768px){
    font-size: 2rem;
  }
  @media(min-width: 1024px){
    font-size: 3rem;
  }
`

interface TitleProps {
  fingerPrint: string
}

export default function Title({fingerPrint}: TitleProps): ReactElement {

  return (
    <>
      <FlexItem>
        <MonoSub>
          Your Unique Browser Fingerprint:
        </MonoSub>
      </FlexItem>
      <FlexItem>
        <Mono>
          {fingerPrint}
        </Mono>
      </FlexItem>
    </>
  )
}
