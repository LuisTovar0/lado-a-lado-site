import { writable } from "svelte/store";

export const vw = writable(0);

export function updateVw() {
  vw.set(window.innerWidth);
}
