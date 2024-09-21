import React from "react"
import ReactDOM from "react-dom/client"
import "./index.less"
import { ConfigProvider } from "antd"
import App from "./App.jsx"
import zhCN from "antd/locale/zh_CN"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ConfigProvider locale={zhCN}>
			<App />
		</ConfigProvider>
	</React.StrictMode>
)
