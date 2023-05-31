import type { RequestHandler } from "@sveltejs/kit";

export const POST = (async ({request}) => {
  const response = await fetch("https://bytebin.ajg0702.us/post", {
    method: "POST",
    body: request.body,
    headers: request.headers
  });
  return new Response(response.body, response);
}) satisfies RequestHandler;