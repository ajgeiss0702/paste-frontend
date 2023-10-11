<script>
  import { onMount } from "svelte";
  import { displayDateTime } from "$lib/utils";

  export let data;

  let updateIndex = 0;

  const rawURL = data.pastebin ? "https://pastebin.com/raw/" : "https://bytebin.ajg0702.us/";

  onMount(() => {
    let interval = setInterval(() => updateIndex++, 5e3);

    return () => clearInterval(interval);
  })

</script>
<svelte:head>
  <title>{data.code} - ajPaste</title>
</svelte:head>

<span class="nav-bump">
  <a href="{rawURL}{data.code}">
    Raw
  </a>
</span>

{#if data.created}
  <span class="created opacity-75">
    Created
      {#key updateIndex}
      {displayDateTime(data.created)}
    {/key}
  </span>
{/if}

<hr>

<pre class="m-2 mb-0">{data.body}</pre>

<style>
  pre {
      max-width: 100vw;
      overflow-y: auto;
      min-height: calc(100vh - var(--nav-height) - 1.1rem);
  }

  .created {
      position: absolute;
      right: 0.5em;
      top: 0.5em;
  }

  @media (max-width: 370px) {
      .created {
          display: none;
      }
  }
</style>