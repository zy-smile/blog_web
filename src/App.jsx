import "./App.css"
import "./assets/css/common.less"
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"
import Container from "./components/common/Container"
import Login from "./components/common/login"
import Article from "./components/article/article"
import User from "./components/user/user"
const App = () => {
	const token = sessionStorage.getItem("token")
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						token ? (
							<Navigate to="/home" />
						) : (
							<Navigate to="/login" />
						)
					}></Route>
				<Route path="/login" element={<Login />} />
				<Route
					path="/home"
					element={token ? <Container /> : <Navigate to="/login" />}>
					<Route path="" element={<Article />} />
					<Route path="user" element={<User />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
