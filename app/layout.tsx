// import Header from '@components/header'
import styles from './layout.module.css'
import '@styles/global.css'
import AnalyticsWrapper from './analytics-wrapper'
import { Inter }  from "@next/font/google";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body>
        <div className={styles.wrapper}>
          <main className={styles.main}>{children}</main>
          <div className={styles.fade} />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}

export const config = { runtime: 'experimental-edge' }
