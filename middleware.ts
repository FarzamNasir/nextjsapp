// middleware.ts
// auntheticating user for api access. we are checing if a user has a authectication token in the request header and if not we are returning a 401 error.
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Your middleware logic here
  if (request.nextUrl.pathname.startsWith('/api')) {
    const authHeader = request.headers.get('Authorization')
    if (!authHeader) {
        return NextResponse.json(
            {success:false,message:'Unauthorized'},
            {status:401}
        )
    }
}
return NextResponse.next()
}

export const config={
    matcher:'/api/:path*'
}