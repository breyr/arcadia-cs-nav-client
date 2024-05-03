// get data about the current track
import { trackInfo } from "$lib/data";
import { error } from "@sveltejs/kit";

export function load({ params }) {
    // find the correct track, otherwise error
    const track = trackInfo.find(t => t.title === params.title);
    if (!track) {
        throw error(404, 'track not found');
    }
    return {
        track
    }
}