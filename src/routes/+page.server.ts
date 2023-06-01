import type {Actions} from './$types';
import { error, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({request}) => {
    const data = await request.formData();
    let content = await data.get('content');

    if(!content) {
      content = await data.get('file')
      if(!content) {
        throw error(400, "Missing content or file");
      }
    }

    const response = await fetch("https://bytebin.ajg0702.us/post", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: content
    });

    if(response.status != 201) {
      throw error(response.status, response.statusText);
    }

    const json = await response.json();

    throw redirect(302, "/" + json.key);
  }
} satisfies Actions;