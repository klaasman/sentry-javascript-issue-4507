import { NextResponse } from "next/server";

export async function middleware(request, ev) {
  console.log("hello from api _middleware");
  return NextResponse.next();
}
