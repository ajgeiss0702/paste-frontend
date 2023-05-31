<script lang='ts'>
	import '../theme.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.css';

  import { autoModeWatcher } from '@skeletonlabs/skeleton';
</script>

<svelte:head>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head>

<div class="nav">
  <a href="/">
    <span class="h3 bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone">ajPaste</span>
  </a>
  &nbsp;
</div>

<style>
  .nav {
      @apply mx-2;
      @apply my-1;
      height: var(--nav-height);
      display: inline-block;
  }
</style>

<slot />
