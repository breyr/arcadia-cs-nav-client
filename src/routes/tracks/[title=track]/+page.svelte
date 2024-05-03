<script lang="ts">
    import { page } from '$app/stores';
    import {
    	Controls,
    	SvelteFlow
    } from '@xyflow/svelte';
    import '@xyflow/svelte/dist/style.css';
    import { writable } from 'svelte/store';

    export let data;

    // We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
    const nodes = writable([
        {
            id: '1',
            type: 'input',
            data: { label: 'Input Node' },
            position: { x: 0, y: 0 }
        },
        {
            id: '2',
            type: 'default',
            data: { label: 'Node' },
            position: { x: 0, y: 150 }
        }
    ]);
    
    // same for edges
    const edges = writable([
        {
            id: '1-2',
            type: 'default',
            source: '1',
            target: '2',
            label: 'Edge Text'
        }
    ]);
    
    const snapGrid: [number, number] = [25, 25];
    const proOptions = { hideAttribution: true };

    let completed = 20; // replace with your actual progress value
    let activeChart = 'recommended';
    function setActiveChart(chart: 'recommended' | 'arcadia' | 'extra') {
        activeChart = chart;
    }
</script>

<div class="container mx-auto flex flex-col">
    <!-- breadcrumbs -->
    <div class="text-sm breadcrumbs">
        <ul>
            <li><a href="/tracks">Tracks</a></li> 
            <li>{$page.params.title}</li>
        </ul>
    </div>

    <!-- title and description -->
    <div class="text-white mb-3">
        <h1 class="text-4xl font-semibold">{data.track.title}</h1>
        <h3 class="text-xl text-gray-300 font-light mb-2">{data.track.description}</h3>
        <span class="badge badge-neutral">Last Updated: {data.track.updatedDate.toLocaleDateString()}</span>
    </div>

    <div role="tablist" class="tabs tabs-boxed mb-2">
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-interactive-supports-focus -->
        <a role="tab" class={`tab ${activeChart === 'recommended' ? 'tab-active' : ''}`} on:click={() => setActiveChart('recommended')}>Recommended Learning</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-interactive-supports-focus -->
        <a role="tab" class={`tab ${activeChart === 'arcadia' ? 'tab-active' : ''}`} on:click={() => setActiveChart('arcadia')}>Arcadia Courses</a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-interactive-supports-focus -->
        <a role="tab" class={`tab ${activeChart === 'extra' ? 'tab-active' : ''}`} on:click={() => setActiveChart('extra')}>Extra Resources</a>
    </div>

    <!-- track graph -->
    <!-- have to make hidden because nodes will disappear if inside if statement -->
    <div style="height:70vh; width: 100%;" hidden={activeChart !== 'recommended'}>
        <SvelteFlow
            {nodes}
            {edges}
            {snapGrid}
            fitView
            style="background: transparent;"
            proOptions={proOptions}
            on:nodeclick={(event) => console.log('on node click', event.detail.node)}
        >
            <Controls />
        </SvelteFlow>
    </div>
    {#if activeChart === 'arcadia'}
    <!-- TODO make this a seperate flow component so states don't mix -->
        <p>arcadia courses graph </p>
    {:else if activeChart === 'extra'}
        <p>Certs</p>
    {/if}


    <!-- Progress bar -->
    <div class="absolute bottom-0 right-0 mx-4 my-4 flex flex-col items-end glass pb-3 px-3 py-1 rounded">
        <span class="mb-1">{completed}/{data.track.numNodes}</span>
        <progress class="progress progress-success w-56" value={completed} max={data.track.numNodes}></progress>
    </div>
</div>

<style>
    .glass {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10.8px);
        -webkit-backdrop-filter: blur(10.8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
</style>