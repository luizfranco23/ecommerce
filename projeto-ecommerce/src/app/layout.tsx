import './globals.css'
import Header from '@/components/Header/Header'
import { FilterContextProvider } from '@/contexts/FilterContexts'
import { Noto_Sans_Georgian } from 'next/font/google'

const font = Noto_Sans_Georgian({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  )
}
