import { Route, Routes } from "react-router-dom";
import Nav from './Nav'

import Issue from './pages/Issue.js'
import CreateIssue from "./pages/CreateIssue.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import Article from "./pages/Article.js"

function App() {
	return (
		<>
			<Nav />
			
			<Routes>
				<Route path="/" element={<Issue />} />
				<Route path="/new" element={<CreateIssue/>}/>
				<Route path="/example" element={<Example />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/article/:id" element={<Article />} />
			</Routes>

		</>
	);
}

export default App;

function Example() {
	return <div>Example</div>;
}
