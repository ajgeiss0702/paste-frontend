<script lang="ts">
  import {enhance} from "$app/forms";

  let fileUpload;
  let submitButton;

  let uploading = false;

  function upload() {

    fileUpload.onchange = async e => {
      let files = e.target.files;
      if(!files) return;
      let file = files[0];

      uploading = true;

      let content = await file.text();
      if (!content) {
        return;
      }

      submitButton.click();
    }

    fileUpload.click();
  }
</script>

<svelte:head>
  <title>ajPaste</title>
</svelte:head>

<form use:enhance method="POST">
  <span class="nav-bump">
    <button bind:this={submitButton}>
      Save
    </button>
    &nbsp;
    <button formaction="javascript:void(0);" on:click|preventDefault={upload}>
      {#if uploading}
        Uploading...
      {:else}
        Upload
      {/if}
    </button>
  </span>

  <textarea
    class="input rounded-none"
    name="content"
    autofocus
    spellcheck="false"
    placeholder="Type or paste your content here, then click 'save'

Or click 'upload' to upload a text file"
  ></textarea>

  <input class="hidden" type="file" name="file" bind:this={fileUpload}>
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