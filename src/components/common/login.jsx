import "./login.less"
import $axios from "../../server/request"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { Button, Checkbox, Form, Input, message } from "antd"
const Login = function () {
	const [form] = Form.useForm()
	const [checkFlag, setCheckFlag] = useState(false)
	const [goFlag, setGoFlag] = useState(false)
	const [messageApi, contextHolder] = message.useMessage()
	async function submitHandle() {
		try {
			const values = await form.validateFields()
			let data = {
				username: values.username,
				password: values.password,
				remember: checkFlag,
			}
			requestLogin(data)
		} catch (errorInfo) {
			console.log("Failed:", errorInfo)
		}
	}
	function checkChange(e) {
		setCheckFlag(e.target.checked)
	}
	async function requestLogin(data) {
		const { data: res } = await $axios.post("/api/auth/login", data)
		if (res.code == 200) {
			window.sessionStorage.setItem("token", res.token)
			window.sessionStorage.setItem("username", data.username)
			messageApi.open({
				type: "success",
				content: "登录成功",
			})
			setTimeout(() => {
				setGoFlag(true)
			}, 800)
		} else {
			messageApi.open({
				type: "error",
				content: res.msg,
			})
		}
	}
	return (
		<div className="login_container">
			<div className="login_box">
				<h3 className="title">博客管理系统</h3>
				{contextHolder}
				<Form
					form={form}
					name="basic"
					labelCol={{ span: 7 }}
					wrapperCol={{ span: 12 }}>
					<Form.Item
						label="用户名"
						name="username"
						rules={[{ required: true, tooltip: "请输入账号" }]}>
						<Input />
					</Form.Item>

					<Form.Item
						label="密码"
						name="password"
						rules={[{ required: true, tooltip: "请输入密码" }]}>
						<Input.Password />
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 7 }}>
						<Checkbox checked={checkFlag} onChange={checkChange}>
							记住我
						</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8 }}>
						<Button type="primary" onClick={submitHandle}>
							登录
						</Button>
						{goFlag && <Navigate to="/home" replace={true} />}
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}
export default Login
