import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import LoadTablePage from "./pages/LoadTablePage";
import Profile from "./pages/Profile.js";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<div className="page">
				<Router>
					<Routes>
						<Route path="/Login" element={<Login />} />
						<Route path="/LoadBoard" element={<LoadTablePage />} />
						<Route path="/Profile" element={<Profile />} />
						<Route path="/About" element={<LoadTablePage />} />
						<Route path="/" element={<Navigate replace to="/Login" />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
