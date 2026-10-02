import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import { server } from './server';

vi.stubEnv('VITE_AUTH_PROVIDER', 'mock');

// Starts interception before executing suite
beforeAll(() => {
	server.listen({ onUnhandledRequest: 'error' });
});

// Cleans up the custom handlers created with `server.use()`
afterEach(() => {
	cleanup();
	server.resetHandlers();
});

// Close the server interception at finish
afterAll(() => {
	server.close();
});
