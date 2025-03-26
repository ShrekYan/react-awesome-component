import {defineConfig} from 'vite';
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"


export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true, // 开启自动生成类型入口
            outDir: "dist/types",   // 类型输出目录
        }),
    ],
    build: {
        lib: {
            entry: "src/index.ts",
            name: "react-awesome-component",
            formats: ["es", "umd"],
            fileName: (format) => `react-awesome-component.${format}.js`
        },
        rollupOptions: {
            external: ["react", "react-dom", "react-use", "hammerjs"],
            output: {
                globals: {
                    react: "React",
                    'react-dom': "ReactDOM"
                }
            }
        }
    },
    css: {
        modules: {
            scopeBehaviour: "local",
            localsConvention: "camelCase"
        }
    }
})