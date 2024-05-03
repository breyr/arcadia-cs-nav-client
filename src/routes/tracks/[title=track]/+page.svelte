<script lang="ts">
    import { page } from '$app/stores';
    export let data;
    let completed = 20; // replace with your actual progress value
</script>

<div class="container mx-4">
    <!-- breadcrumbs -->
    <div class="text-sm breadcrumbs">
        <ul>
            <li><a href="/tracks">Tracks</a></li> 
            <li>{$page.params.title}</li>
        </ul>
    </div>

    <!-- title and description -->
    <div class="text-white">
        <h1 class="text-4xl font-semibold">{data.track.title}</h1>
        <h3 class="text-xl text-gray-300 font-light mb-2">{data.track.description}</h3>
        <span class="badge badge-neutral">Last Updated: {data.track.updatedDate.toLocaleDateString()}</span>
    </div>

    <!-- Progress bar -->
    <div class="absolute bottom-0 right-0 mx-4 my-4 flex flex-col items-end glass pb-3 px-3 py-1 rounded">
        <span class="mb-1">{completed}/{data.track.numNodes}</span>
        <progress class="progress progress-success w-56" value={completed} max={data.track.numNodes}></progress>
    </div>
</div>

<style>
    .glass {
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10.8px);
        -webkit-backdrop-filter: blur(10.8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
</style>