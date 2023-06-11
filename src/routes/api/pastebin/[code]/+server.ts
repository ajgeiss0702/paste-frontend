import type { RequestHandler } from "@sveltejs/kit";
import { text } from "@sveltejs/kit";

export const GET = (async ({fetch, params}) => {
  return text(
    await fetch("https://pastebin.com/raw/" + params.code)
      .then(r => r.text())
  );
}) satisfies RequestHandler;