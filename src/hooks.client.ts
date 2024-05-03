// this hook will run when the page first loads in the browser
import { currentUser, pb } from "$lib/pocketbase";

pb.authStore.loadFromCookie(document.cookie);
pb.authStore.onChange(() => {
    // when authStore changes, update currentUser
    currentUser.set(pb.authStore.model);
    // false so that the client can also read the cookie
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
})