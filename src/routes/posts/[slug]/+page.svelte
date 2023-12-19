<script>
  export let data
</script>

<a href="/">&larr; Back home</a>
<h1>{data.title}</h1>
<pre>{JSON.stringify(data.content, null, 2)}</pre>