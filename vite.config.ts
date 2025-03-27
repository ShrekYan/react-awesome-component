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
        cssCodeSplit:true,
        lib: {
            entry: {
                Loading:"src/components/Loading/Loading.tsx",
                ErrorBoundary:"src/components/ErrorBoundary/index.tsx",
                FloatButton:"src/components/FloatButton/index.tsx",
                Network:"src/components/Network/index.tsx"
            },
            name: "react-awesome-component",
            formats: ["es"],
            fileName: (format) => `react-awesome-component.${format}.js`
        },
        rollupOptions: {
            external: ["react", "react-dom", "react-use"],
            output: {
                globals: {
                    react: "React",
                    'react-dom': "ReactDOM"
                }
            },

        }
    },
    css: {
        modules: {
            scopeBehaviour: "local",
            localsConvention: "camelCase"
        }
    }
})