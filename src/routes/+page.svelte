<script lang="ts">
  import {enhance} from "$app/forms";
</script>

<svelte:head>
  <title>ajPaste</title>
</svelte:head>

<form use:enhance method="POST">
  <span class="nav-bump">
    <button>Save</button>
  </span>

  <textarea
    class="input rounded-none"
    name="content"
    autofocus
    spellcheck="false"
    placeholder="Type or paste your content here, then click 'save'..."
  ></textarea>
</form>

<style>
    form {
        display: inline-block;
    }
    textarea {
        position: absolute;
        top: calc(var(--nav-height) + 0.5em);
        left: 0;
        height: calc(100vh - var(--nav-height));
        resize: none;
        font-family: monospace;

        background-color: transparent !important;
        border-left: none !important;
        border-right: none !important;
        border-bottom: none !important;
    }
</style>