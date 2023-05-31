<script>
  export let data;
</script>
<svelte:head>
  <title>{data.code} - ajPaste</title>
</svelte:head>

<span class="nav-bump">
  <a href="https://bytebin.ajg0702.us/{data.code}">
    Raw
  </a>
</span>

<hr>

<pre class="m-2">{data.body}</pre>

<style>
  pre {
      max-width: 100vw;
      overflow-y: auto;
  }
</style>