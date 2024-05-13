import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			components: "/src/components",
			atoms: "/src/atoms",
			pages: "/src/pages",
			hooks: "/src/hooks",
			styles: "/src/styles",
			assets: "/src/assets",
		},
	},
});
