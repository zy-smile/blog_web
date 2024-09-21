import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Menu, Layout, theme } from "antd"
import $axios from "../../../server/request"
import { FileOutlined, UserOutlined } from "@ant-design/icons"
import { useEffect } from "react"
import "./sidebar.less"
const { Sider } = Layout

function Sidebar() {
	const [menuList, setMenuList] = useState([])
	const [current, setCurrent] = useState("list_1")
	const navigate = useNavigate()
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	useEffect(() => {
		//初始化函数
		getList(setMenuList)
	}, [])
	function getList(cb) {
		$axios.get("/src/json/sidebar.json").then((res) => {
			let data = res.data
			if (data && data instanceof Array) {
				let newList = data.map((item, index) => {
					item.icon = React.createElement(
						[FileOutlined, UserOutlined][index]
					)
					return item
				})
				cb && cb(newList)
			}
		})
	}
	function selectClick({ item, key, keyPath, selectedKeys, domEvent }) {
		console.log({ item, key, keyPath, selectedKeys, domEvent })
		setCurrent(key)
		navigate(item.props.path)
	}
	return (
		<div className="sidebar_container">
			<Sider style={{ background: colorBgContainer }} width={200}>
				<Menu
					mode="inline"
					defaultSelectedKeys={[current]}
					defaultOpenKeys={["sub_1"]}
					style={{ height: "100%" }}
					items={menuList}
					onSelect={selectClick}
				/>
			</Sider>
		</div>
	)
}

export default Sidebar
