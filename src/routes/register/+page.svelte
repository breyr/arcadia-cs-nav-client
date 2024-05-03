<script lang="ts">
    import { applyAction, enhance } from '$app/forms';
    import { pb } from '$lib/pocketbase.js';
    // useful for if the request had errors or not
    export let form;
</script>

<div class="container mx-auto flex flex-col text-center">
    <h1 class="text-white text-6xl font-semibold">register</h1>
    <form method="POST" action="?/register" class="flex flex-col max-w-md mx-auto h-96" use:enhance={() => {
        return async ({ result }) => {
            // tell client that we set a new cookie 
            pb.authStore.loadFromCookie(document.cookie);
            await applyAction(result);
        }
    }}>
        <label class="input input-bordered flex items-center gap-2 mt-8 mb-5">
            Username
            <input name="username" type="text" class="grow" required>
        </label>
        <label class="input input-bordered flex items-center gap-2 mb-5">
            Email
            <input name="email" type="email" class="grow" required>
        </label>
        <label class="input input-bordered flex items-center gap-2 mb-5">
            Password
            <input name="password" type="password" class="grow" required>
        </label>
        <label class="input input-bordered flex items-center gap-2 mb-5">
            Confirm Password
            <input name="passwordConfirm" type="password" class="grow" required>
        </label>
        <div class="flex flex-col items-center w-full gap-2">
            <button type="submit" class="btn btn-wide btn-primary">Register</button>
            <a href="/login" class="btn btn-wide btn-outline btn-secondary">Have an account? login</a>
        </div>
    </form>
</div>