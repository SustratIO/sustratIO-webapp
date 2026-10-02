import { configDefaults, defineConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default defineConfig({
	plugins: [...(viteConfig.plugins ?? [])],
	resolve: { ...(viteConfig.resolve ?? {}) },
	test: {
		coverage: {
			enabled: true,
			exclude: [
				...(configDefaults.coverage.exclude ?? []),
				'src/**/{tests,factories,types}/*.{ts,tsx}',
			],
			provider: 'v8',
			reporter: ['clover', 'html', 'lcov', 'text'],
			reportsDirectory: './coverage',
			thresholds: {
				branches: 95,
				functions: 95,
				lines: 95,
				statements: 95,
			},
		},
		environment: 'jsdom',
		// We need to decide what to include
		// include: ['src/**/*.{ts,tsx}'],
		exclude: [
			...configDefaults.exclude,
			'src/**/{tests,factories,types}/*.{ts,tsx}',
		],
		// Ensure route tree is generated before tests
		globals: true,
		setupFiles: ['./src/tests/setup.ts'],
		typecheck: { enabled: true },
		watch: false,
	},
});
