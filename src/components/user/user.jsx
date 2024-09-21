import "./user.less"
import axios from "axios"
import $axios from "../../server/request"
import { useState } from "react"
import { Button, Table, Tag, Modal, Form, Input, Radio } from "antd"
const { Column } = Table
const tableList = new Array(50).fill({}).map((item, index) => {
	return {
		key: index + 1,
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"],
	}
})
console.log(tableList)
function User() {
	const [form] = Form.useForm()
	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const showModal = () => {
		setOpen(true)
	}
	const handleOk = async () => {
		try {
			const values = await form.validateFields()
			registerReq(values)
		} catch (errorInfo) {}
		setConfirmLoading(true)
		setTimeout(() => {
			setOpen(false)
			setConfirmLoading(false)
		}, 2000)
	}

	const handleCancel = () => {
		console.log("Clicked cancel button")
		setOpen(false)
	}
	const registerReq = async (data) => {
		const result = await $axios.post("/api/auth/register", data)
		console.log(result, "resuult")
	}
	return (
		<div className="user_container">
			<div className="form_box">
				<Button type="primary" onClick={showModal}>
					新增用户
				</Button>
			</div>
			<Table dataSource={tableList} bordered className="table_box">
				<Column title="" dataIndex="key" key="key" />
				<Column title="用户名" dataIndex="name" key="name" />
				<Column
					title="角色"
					dataIndex="age"
					key="age"
					render={() => {
						return (
							<>
								<Tag color="green">管理员</Tag>
								<Tag color="red">普通用户</Tag>
							</>
						)
					}}
				/>
				<Column
					title="操作"
					dataIndex=""
					key=""
					render={() => {
						return (
							<>
								<Button type="primary" size="small">
									编辑
								</Button>
								<Button
									size="small"
									danger
									style={{ marginLeft: "12px" }}>
									删除
								</Button>
							</>
						)
					}}
				/>
			</Table>
			<Modal
				title="新增用户"
				cancelText="取消"
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}>
				<Form
					className="add_form"
					form={form}
					labelCol={{ span: 4 }}
					labelAlign="right"
					wrapperCol={{ span: 16 }}>
					<Form.Item
						label="用户名"
						name="username"
						rules={[{ required: true, message: "请输入用户名" }]}>
						<Input placeholder="请输入用户名" />
					</Form.Item>
					<Form.Item
						label="密码"
						name="password"
						rules={[{ required: true, message: "请输入密码" }]}>
						<Input placeholder="请输入密码" />
					</Form.Item>
					<Form.Item label="角色" name="role">
						<Radio.Group>
							<Radio value="admin">管理员</Radio>
							<Radio value="user">普通用户</Radio>
						</Radio.Group>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	)
}

export default User
