interface ImportMetaEnv {
	readonly VITE_API_URL: string;
}

// biome-ignore lint/correctness/noUnusedVariables: override of meta.env
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
