import { mainMetadata } from '../frontCode/metadata'
import './css/style.css'

import localFont from 'next/font/local'

const aspekta = localFont({
  src: [
    {
      path: './fonts/Aspekta-350.woff2',
      weight: '350',
    },
    {
      path: './fonts/Aspekta-400.woff2',
      weight: '400',
    },
    {
      path: './fonts/Aspekta-450.woff2',
      weight: '450',
    },
    {
      path: './fonts/Aspekta-500.woff2',
      weight: '500',
    },
    {
      path: './fonts/Aspekta-550.woff2',
      weight: '550',
    },
    {
      path: './fonts/Aspekta-700.woff2',
      weight: '700',
    },                     
  ],
  variable: '--font-aspekta',
  display: 'swap',  
})

export const metadata = mainMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${aspekta.variable} font-aspekta antialiased bg-white text-slate-800 font-[350]`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
