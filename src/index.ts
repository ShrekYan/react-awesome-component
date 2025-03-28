// src/index.ts
// 先导入所有组件的 CSS 文件
import './components/ErrorBoundary/index.scss'; // 新增 CSS 导入
import './components/FloatButton/index.scss'; // 新增 CSS 导入
import "./components/Loading/Loading.scss"
import "./components/Network/index.scss"
import "./components/PageLoading/PageLoading.scss"


// 再导出组件
export { default as FloatButton } from "./components/FloatButton";
export { default as ErrorBoundary } from "./components/ErrorBoundary";
export { default as Loading } from "./components/Loading/Loading";
export { default as Network } from './components/Network';
export { default as PageLoading } from "./components/PageLoading/PageLoading";