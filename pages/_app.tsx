
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import NormalizeCss from 'normalize.css'


const MainCSS = createGlobalStyle(() => [NormalizeCss])


const MyApp = (props: { Component: any; pageProps: any; }) => {
  const { Component, pageProps } = props
  return (
    <>
      <MainCSS />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
