// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/events/:id",
  "/api/webhook/clerk",
  "/api/uploadthing",
]);

export default clerkMiddleware((auth, req) => {
  console.log("Middleware is being applied to:", req.url); // Add this line
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
