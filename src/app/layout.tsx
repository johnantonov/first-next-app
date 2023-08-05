import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Form } from '@/components/Form/Form'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CLOUD FLEX',
  description: 'Streaming ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='cloud_bg'>
          {typeof window === 'undefined' && <Header />}
            {children}
            <Form />
          <Footer />
        </div>
      </body>
    </html>
  )
}
