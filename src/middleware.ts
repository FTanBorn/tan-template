// middleware.ts
import createMiddleware from 'next-intl/middleware'
import { routing } from './navigation'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const handleI18nRouting = createMiddleware(routing)

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/') {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'tr'
    return NextResponse.redirect(new URL(`/${locale}/`, request.url))
  }

  try {
    return await handleI18nRouting(request)
  } catch (error) {
    console.log(error)
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'tr'
    return NextResponse.redirect(new URL(`/${locale}/`, request.url))
  }
}

export const config = {
  matcher: ['/', '/(tr|en)/:path*']
}
