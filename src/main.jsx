import React from "react"
import ReactDOM from "react-dom/client"

import { ConfigProvider } from "antd"
import App from "./App.jsx"
import zhCN from "antd/locale/zh_CN"

import "./index.less"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ConfigProvider locale={zhCN}>
			<App />
		</ConfigProvider>
	</React.StrictMode>
)
