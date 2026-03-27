import '../index.css'
import '../App.css'
import NavBar, { pages } from '../components/NavBar'

export const metadata = {
    title:'livecode-la',
    description: 'Landing page for livecodeLA'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      <NavBar pages={pages} />
      <div id="root">{children}</div>
    </body>
    </html>

  )
}