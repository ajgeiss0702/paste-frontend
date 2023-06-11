import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load = (async ({fetch, params}) => {

  let response: Response;
  const pastebin = params.pastebin && params.pastebin.toLowerCase() === "pastebin";

  if(pastebin) {
    response = await fetch("/api/pastebin/" + params.code);
  } else {
    response = await fetch("https://bytebin.ajg0702.us/" + params.code);
  }

  if(response.status != 200) {
    throw error(response.status, response.statusText);
  }

  return {
    code: params.code,
    created: response.headers.get("last-modified"),
    body: await response.text(),
    pastebin
  };

}) satisfies PageLoad