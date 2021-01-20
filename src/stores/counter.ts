import { writable } from "svelte/store";

export const count = writable(0);

export function increment() {
	count.update(current => {
		return current + 1;
	})
}
