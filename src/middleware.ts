import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_PATHS = ['/login', '/register'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get('access_token');

  if (!accessToken && !PUBLIC_PATHS.includes(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (accessToken && PUBLIC_PATHS.includes(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico|images|fonts|manifest.json).*)'],
}; 