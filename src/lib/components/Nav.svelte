<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="navbar bg-transparent glass-effect">
  <div class="flex-1">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a href="/" class="text-3xl ml-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...$$props}>
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3.519 6.746a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0" />
          <path d="M9.629 8.74c-.948 2.542-3.366 4.756-4.36 4.756c-1.25 0-4.75-3.5-4.75-6.75a4.75 4.75 0 0 1 5.19-4.73M7.696 3.77c-.334-.059-.334-.538 0-.596a3.02 3.02 0 0 0 2.433-2.33l.02-.092c.072-.33.542-.331.617-.002l.024.107a3.036 3.036 0 0 0 2.44 2.316c.335.058.335.54 0 .598a3.036 3.036 0 0 0-2.44 2.316l-.024.107c-.075.329-.545.327-.617-.003l-.02-.092a3.02 3.02 0 0 0-2.433-2.33Z" />
        </g>
      </svg>
    </a>
  </div>
  <div class="flex-none gap-2">
  <a href="/tracks" aria-current={$page.url.pathname === '/tracks'} class={$page.url.pathname === '/tracks' ? 'border-b-2 border-primary' : 'border-b-2 border-transparent hover:border-gray-300'}>tracks</a>
  <a href="/about" aria-current={$page.url.pathname === '/about'} class={$page.url.pathname === '/about' ? 'border-b-2 border-primary' : 'border-b-2 border-transparent hover:border-gray-300'}>about</a>
  <a href="/contact" aria-current={$page.url.pathname === '/contact'} class={$page.url.pathname === '/contact' ? 'border-b-2 border-primary' : 'border-b-2 border-transparent hover:border-gray-300'}>contact</a>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
		<li></li>
        <li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <li><a>Settings</a></li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

<!-- <style>
  .glass-effect {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.1px);
    -webkit-backdrop-filter: blur(10.1px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
</style> -->