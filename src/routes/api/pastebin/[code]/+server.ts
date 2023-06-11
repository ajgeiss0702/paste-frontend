import type { RequestHandler } from "@sveltejs/kit";
import { text } from "@sveltejs/kit";

export const GET = (async ({fetch, params}) => {
  const response = await fetch("https://pastebin.com/raw/" + params.code);

  return text(await response.text(), {
    status: response.status,
    statusText: response.statusText
  });
}) satisfies RequestHandler;