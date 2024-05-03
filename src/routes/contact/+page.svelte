<script>
    let name = '';
    let email = '';
    let message = '';
</script>

<form class="p-6 space-y-4 rounded-xl w-full max-w-md mx-auto mt-32">
    <h2 class="text-2xl font-semibold">Contact Us</h2>
    <p class="font-light">(We promise not to send you spam... much)</p>
    <div class="form-control">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
            <span class="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" class="input input-bordered" bind:value={name} />
    </div>
    <div class="form-control">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
            <span class="label-text">Email</span>
        </label>
        <input type="email" placeholder="Email" class="input input-bordered" bind:value={email} />
    </div>
    <div class="form-control">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">
            <span class="label-text">Message</span>
        </label>
        <textarea class="textarea textarea-bordered w-full min-h-[100px]" placeholder="Your message" bind:value={message}></textarea>
    </div>
    <div class="form-control mt-4">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>