import React from 'react'
import App, { Container } from 'next/app'

import '../styles/style.scss'

class MyApp extends App {
    
    render() {
        const { Component, pageProps } = this.props
    
        return (
          <Container>
            <Component {...pageProps} />
          </Container>
        )
    }
}

export default MyApp