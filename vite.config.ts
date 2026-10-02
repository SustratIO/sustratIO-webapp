import path from 'node:path';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		// make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
		tanstackRouter({
			target: 'react',
			autoCodeSplitting: true,
			routesDirectory: './src/app/routes',
			generatedRouteTree: './src/app/routeTree.gen.ts',
		}),
		react(),
	],
	build: {
		// NOTE: decide whether we want this on staging
		sourcemap: false,
		chunkSizeWarningLimit: 250,

		// Legacy code, minification and debugging
		target: 'es2022',
		minify: 'esbuild',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},

		rolldownOptions: {
			output: {
				// Deterministic naming system for caching
				entryFileNames: 'assets/[name].[hash].js',
				chunkFileNames: 'assets/[name].[hash].js',
				assetFileNames: 'assets/[name].[hash].[ext]',

				codeSplitting: {
					groups: [
						{
							name: 'vendor-core',
							test: /node_modules[\\/](react|react-dom)[\\/]/,
							priority: 20,
						},
						{
							name: 'vendor-network',
							test: /node_modules[\\/](@tanstack|axios)[\\/]/,
							priority: 15,
						},
						{
							// Catch-all
							name: 'vendor-libs',
							test: /node_modules[\\/]/,
							priority: 10,
						},
					],
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
			'@app': path.resolve(import.meta.dirname, './src/app'),
			'@appComponents': path.resolve(
				import.meta.dirname,
				'./src/app/components',
			),
			'@core': path.resolve(import.meta.dirname, './src/core'),
			'@features': path.resolve(import.meta.dirname, './src/features'),
			'@shared': path.resolve(import.meta.dirname, './src/shared'),
			'@stores': path.resolve(import.meta.dirname, './src/app/stores'),
		},
	},
	test: {
		coverage: {
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
		globals: false,
		// We need to decide what to include
		// include: ['src/**/*.{ts,tsx}'],
		exclude: [
			...configDefaults.exclude,
			'src/**/{tests,factories,types}/*.{ts,tsx}',
		],
		setupFiles: ['./src/tests/setup.ts'],
	},
});
