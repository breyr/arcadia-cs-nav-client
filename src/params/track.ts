import { trackInfo } from "$lib/data";

// set of each track title
const titles = new Set(trackInfo.map((track) => track.title));

export function match(value) {
    return titles.has(value);
}