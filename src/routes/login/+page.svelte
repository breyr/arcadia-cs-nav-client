<script lang="ts">
    // TODO useful for if the request had errors or not
    export let form;
</script>

<div class="container mx-auto flex flex-col text-center">
<h1 class="text-white text-6xl font-semibold mb-4">login</h1>
{#if form?.error}
    <p class="text-red-400 mb-3">{form?.error}</p>
{/if}
<form method="POST" action="?/login" class="flex flex-col max-w-md mx-auto h-96">
    <label class={`input input-bordered flex items-center gap-2 mt-4 mb-5 ${form?.error ? "border border-red-400" : ''}`}>
        Email
        <input name="email" type="email" class="grow" required value={form?.email ?? ''}>
    </label>
    <label class={`input input-bordered flex items-center gap-2 mb-10 ${form?.error ? "border border-red-400" : ''}`}>
        Password
        <input name="password" type="password" class="grow" required value={form?.password ?? ''}>
    </label>
    <div class="flex flex-col items-center w-full gap-2">
        <button class="btn btn-wide btn-primary" type="submit">Log in</button>
        <a href="/register" class="btn btn-wide btn-outline btn-secondary">Don't have an account? Register</a>
    </div>
</form>
</div>