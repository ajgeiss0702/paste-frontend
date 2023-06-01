import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load = (async ({fetch, params}) => {

  const response = await fetch("https://bytebin.ajg0702.us/" + params.code);

  if(response.status != 200) {
    throw error(response.status, response.statusText);
  }

  return {
    code: params.code,
    created: response.headers.get("last-modified"),
    body: await response.text()
  };

}) satisfies PageLoad