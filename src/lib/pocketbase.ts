import { PUBLIC_PB_URL } from '$env/static/public';
import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

// this client will be shared between the front end and the backend
export const pb = new PocketBase(PUBLIC_PB_URL);

// store for current user
export const currentUser = writable(pb.authStore.model);