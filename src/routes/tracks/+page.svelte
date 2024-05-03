<script lang="ts">
    export let data;
    let completed = 20;
</script>

<div class="flex flex-wrap justify-start">
    {#each data.tracks as { title, description, numNodes, createdDate, updatedDate }}
        <a href={`tracks/${title}`} class="m-4 transform transition duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
            <div class="indicator flex flex-col items-center bg-base-300 p-2 rounded-lg shadow-lg">
                <!-- if the track has been updated in the last two weeks but not created in the last month, otherwise if it was created in the last two weeks it is new
                TODO FIX
                {#if ((Number(new Date()) - Number(new Date(createdDate))) / (1000 * 60 * 60 * 24)) > 30}
                    <div class="badge badge-primary">updated!</div>
                {:else if ((Number(new Date()) - Number(new Date(createdDate))) / (1000 * 60 * 60 * 24)) <= 14}
                    <div class="badge badge-secondary">new!</div>
                {/if} -->
                <span class="indicator-item badge badge-secondary mb-1">new</span> 
                <div class="grid w-60 h-64 bg-base-300 rounded-lg p-2">
                    <h2 class="text-lg font-bold mb-1">{title}</h2>
                    <h4 class="text-xl text-gray-600 mb-2">{description}</h4>
                    <div class="mt-auto flex flex-wrap flex-col">
                        <span class="font-bold text-sm">{completed}/{numNodes}</span>
                        <progress class="progress progress-success w-42" value={completed} max={numNodes}></progress>
                    </div>
                </div>
            </div>
        </a>
    {/each}
</div>