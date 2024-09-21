import { Outlet } from "react-router-dom"
import Header from "./Header"
import Article from "../article/article"
import User from "../user/user"
// 侧边导航
import SideBar from "./SideBar"
// 右边统计
import RightStatistics from "../statistics/right-statistics"
import { Layout, theme } from "antd"

const { Content } = Layout

const Container = () => {
	const {
		token: { borderRadiusLG },
	} = theme.useToken()

	return (
		<div className="container">
			<Layout className="he_fill">
				<Header
					style={{
						display: "flex",
						alignItems: "center",
					}}></Header>
				<Content
					style={{ padding: "16px 16px 0 16px" }}
					className="content">
					<Layout
						className="he_fill"
						style={{ borderRadius: borderRadiusLG }}>
						<SideBar />
						<Content
							style={{
								paddingBottom: "16px",
								margin: "0 0 0 16px",
								minHeight: 280,
							}}
							className="scroll_box">
							<Outlet />
						</Content>
					</Layout>
				</Content>
			</Layout>
		</div>
	)
}

export default Container
