import { auth } from "@/auth"
import { NextResponse } from 'next/server'

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isOnUnauthPage = req.nextUrl.pathname === '/unauth-page'

  if (!isLoggedIn && !isOnUnauthPage) {
    return NextResponse.redirect(new URL('/unauth-page', req.url))
  }

  if (isLoggedIn && isOnUnauthPage) {
    return NextResponse.redirect(new URL('/', req.url))
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}