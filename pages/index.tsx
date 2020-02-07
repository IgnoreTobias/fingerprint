import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import md5 from 'md5'
import { getFingerprint } from "../src/components/utils/fingerprint";

import Title from '../src/components/atoms/title'
const Main = styled.main`
  background: #282A36;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default () => {
  const [fingerprint, setFingerprint] = useState();

  useEffect(() => {
    getFingerprint().then(
      res => {
        if(res !== []){
          function objectsToString(res: unknown) {
            var str = '';
            // @ts-ignore
            for (var i = 0, len = res.length; i < len; i++) {
              // @ts-ignore
              str += res[i].key + ' is ' + res[i].value + '. ';
            }
            return str;
          }
          const fingerPrintString = objectsToString(res)
          const hashedFingerPrint = (md5(fingerPrintString))
          setFingerprint(hashedFingerPrint)
          const d = new Date()
          d.setTime(d.getTime() + 10 * 365 * 24 * 60 * 60 * 1000)
          const expires = d.toUTCString()
          document.cookie = `FINGERPRINT=${hashedFingerPrint}; expires=${expires}`
        }
      }
    )
  }, [fingerprint]);

  return (
    <Main>
      { fingerprint ? (
        <Title fingerPrint={fingerprint}/>
      ) : (
        <p>loading...</p>
      )
      }
    </Main>
  )
}
