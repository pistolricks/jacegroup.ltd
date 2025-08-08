import {defineConfig} from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import {type ClassValue, clsx} from "clsx"

export default defineConfig({
    vite: {
        // @ts-ignore
        plugins: [tailwindcss()]
    }
});
