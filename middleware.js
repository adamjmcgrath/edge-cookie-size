import { NextResponse } from 'next/server';

export function middleware(req) {
  const x = req.cookies.get('x')?.value;

  const res = new NextResponse(
      JSON.stringify({ x, length: x?.length }),
      { headers: { 'content-type': 'application/json' } }
  )

  res.cookies.set('x', x);

  return res;
}

export const config = {
  matcher: '/',
};
