/*
The general idea is to use a cookie based flow:
    1. Create a new PocketBase instance for each server-side request
    2. "Load/Feed" your pb.authStore with data from the request cookie
    3. Perform your application server-side actions
    4. Before returning the response to the client, update the cookie with the latest pb.authStore state

One way to do this in sveltekit could be to create the PocketBase client in a hook handle, and then pass to other server-side actions using the event.locals
*/

import { pb } from "$lib/pocketbase";

export const handle = async ({ event, resolve }) => {
    // before response
    // configure backend client to read cookies
    pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    if (pb.authStore.isValid) {
        // not expired, but check if it's valid
        try {
            await pb.collection('users').authRefresh();
        } catch (_) {
            // if not valid, remove
            pb.authStore.clear();
        }
    }

    // set locals for pb instance and user, allow us to pass context to backend handlers
    event.locals.pb = pb;
    event.locals.user = structuredClone(pb.authStore.model);

    // during response
    const response = await resolve(event);

    // after response
    // update cookie
    response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }))
    return response;
}
