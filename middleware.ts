import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  // Si aucune authentification n'est fournie
  if (!authHeader) {

    return new Response("Authentification requise", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  // Vérification des credentials
  const base64Credentials = authHeader.split(" ")[1];
  const [username, password] = Buffer.from(base64Credentials, "base64")
    .toString("utf-8")
    .split(":");


  if (username !== process.env.BASIC_AUTH_USERNAME || password !== process.env.BASIC_AUTH_PASSWORD) {
    // return new Response("Accès refusé", { status: 403 });
    return new Response("Authentification requise", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  return NextResponse.next(); // Autoriser l'accès
}

// export const config = {
//   matcher: ["/admin/:path*", "/dashboard/:path*"], // Routes protégées
// };
