import React from 'react'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import '@styles/global.css'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider disableTransitionOnChange enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  )
}
