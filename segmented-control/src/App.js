import React from "react";

import "./App.css";

import SegmentedControl from "./components/segmented-control/segmented-control";
import SelectControl from "./components/select-control/select-control";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: "male",
		};

		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(item) {
		this.setState({ selected: item.target.value });
	}

	render() {
		const genders = ["male", "female", "other"];

		return (
			<div className="App">
				<SegmentedControl
					items={genders}
					selected={this.state.selected}
					onChange={this.handleOnChange}
				/>
				<SelectControl
					items={genders}
					selected={this.state.selected}
					onChange={this.handleOnChange}
				/>
			</div>
		);
	}
}

export default App;
