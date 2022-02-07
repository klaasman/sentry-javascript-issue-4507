import { NextResponse } from "next/server";

export async function middleware(request, ev) {
  console.log("hello from pages _middleware");
  return NextResponse.next();
}
