import path from 'node:path';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		// make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
		tanstackRouter({ target: 'react', autoCodeSplitting: true }),
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
		},
	},
});
