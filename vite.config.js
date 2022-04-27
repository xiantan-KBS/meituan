import { createVuePlugin } from 'vite-plugin-vue2';
const { resolve } = require('path');
import { visualizer } from "rollup-plugin-visualizer";
let plugin = [];
if (process.env.NODE_ENV === "production") {
    plugin.push(
        visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
        })
    )
}
export default {
    plugins: [createVuePlugin(), ...plugin],
    base: '/meituan/',
    resolve: {
        alias: {
            '@': resolve(__dirname, "src"),
        },
    },
    server: {
        proxy: {
            '/ptapi': "https://www.meituan.com",
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                charset: false
            }
        }
    },
}