import "./App.css";

import SegmentedControl from "./components/segmented-control/segmented-control";

function App() {
	return (
		<div className="App">
			<SegmentedControl items={["male", "female", "other"]} />
		</div>
	);
}

export default App;
