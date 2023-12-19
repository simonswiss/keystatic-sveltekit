<script>
  export let data
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>Keystatic posts</h2>

{#each data.posts as post}
  <h3><a href="/posts/{post.slug}">{post.entry.title}</a></h3>
{/each}
