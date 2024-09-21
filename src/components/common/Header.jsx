import reactLogo from "../../assets/react.svg"
import "./header.less"
function Header() {
	let title = "花开花落"
	return (
		<>
			<div className="header">
				<img src={reactLogo} alt="" className="logo" />
				<div className="title">{title}</div>
			</div>
		</>
	)
}

export default Header
