import {defineConfig} from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import {clsx} from "clsx"

export default defineConfig({
    server: {
        preset: "cloudflare-pages",

        rollupConfig: {
            external: ["node:async_hooks"]
        }
    },
    vite: {
        // @ts-ignore
        plugins: [tailwindcss()]
    }
});
