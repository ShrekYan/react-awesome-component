import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic'
        }),
        dts({
            insertTypesEntry: true,
            outDir: "dist/types",
            entryRoot: "src"
        }),
        libInjectCss(),//编译后的文件添加css资源引用
    ],
    build: {
        cssCodeSplit: true, // 开启CSS代码分割
        lib: {
            entry: {
                index: "./src/index.ts",
                Loading: "src/components/Loading/Loading.tsx",
                ErrorBoundary: "src/components/ErrorBoundary/index.tsx",
                FloatButton: "src/components/FloatButton/index.tsx",
                Network: "src/components/Network/index.tsx",
                PageLoading: "src/components/PageLoading/PageLoading.tsx",
            },
            name: "react-awesome-component",
            formats: ["es"]
        },
        rollupOptions: {
            external: ["react", "react-dom", "react-use"],
            output: {
                globals: {
                    react: "React",
                    'react-dom': "ReactDOM"
                }
            }
        }
    },
 /*   css:{
        modules: {
            //去除css modules
            scopeBehaviour: "local",
            localsConvention: "camelCase"
        }
    }*/
})