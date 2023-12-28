import { Route, Routes } from "react-router-dom";
import Nav from './Nav'

import Issue from './pages/Issue.js'
import CreateIssue from "./pages/CreateIssue.js";


function App() {
	return (
		<>
			<Nav />
			
			<Routes>
				<Route path="/" element={<Issue />} />
				<Route path="/new" element={<CreateIssue/>}/>
				<Route path="/example" element={<Example />} />
			</Routes>

		</>
	);
}

export default App;

function Example() {
	return <div>Example</div>;
}
