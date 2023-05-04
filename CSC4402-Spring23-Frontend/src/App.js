import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import LoadTablePage from "./pages/LoadTablePage";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {

	let component

	switch (window.location.pathname){
		case"/":
		component = <Home />
		break
		case "/LoadBoard":
		component = <LoadTablePage />
		break
		case "/Login":
		component = <Login />
		break
		case "/Profile":
		component = <Profile />
		break
	}
	return (
		<>
			<Navbar />
			<div className="App">
				{component}
			</div>

			{/*<div className="page">*/}
			{/*	<Router>*/}
			{/*		<Routes>*/}
			{/*			<Route index element={<Home />} />\*/}
			{/*			<Route path="/LoadBoard" element={<LoadTablePage />} />*/}
			{/*		</Routes>*/}
			{/*	</Router>*/}
			{/*</div>*/}
		</>
	);
}

export default App;
