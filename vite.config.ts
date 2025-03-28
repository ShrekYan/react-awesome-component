import {defineConfig} from 'vite';
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"


export default defineConfig({
    plugins: [
        react({
            //使用经典import导入模式，不使用运行时
            jsxRuntime: 'classic'
        }),
        dts({
            insertTypesEntry: true, // 开启自动生成类型入口
            outDir: "dist/types",   // 类型输出目录
            entryRoot: "src"
        }),
    ],
    build: {
        cssCodeSplit: true,
        lib: {
            entry: {
                //全局导出
                index: "./src/index.ts",
                //按需导出
                Loading: "src/components/Loading/Loading.tsx",
                ErrorBoundary: "src/components/ErrorBoundary/index.tsx",
                FloatButton: "src/components/FloatButton/index.tsx",
                Network: "src/components/Network/index.tsx",
                PageLoading:"src/components/PageLoading/PageLoading.tsx",
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