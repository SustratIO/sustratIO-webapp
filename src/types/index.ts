/**
 * Pagination object sent by the server.
 */
export interface Pagination<T> {
	/**
	 * Items within this page.
	 */
	items: T[];

	/**
	 * Pointer reference to the next page.
	 */
	next_cursor: string | null;
}
