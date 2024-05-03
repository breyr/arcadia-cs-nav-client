<script>
	import Nav from '$lib/components/Nav.svelte';
	import '../app.css';
</script>

<main class="min-h-screen flex flex-col dots-pattern">
	<Nav />
	<div class="flex-grow">
		<slot />
	</div>
</main>

<!-- <style>
    .dots-pattern {
        background: radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px), radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px);
        background-size: 20px 20px;
        background-position: 0 0, 10px 10px;
    }
</style> -->
