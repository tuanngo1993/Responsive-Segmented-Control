import React from "react";

import "./select-control.css";

import SelectOptionControl from "../select-option-control/select-option-control";

class SelectControl extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(e) {
		this.props.onChange(e);
	}

	render() {
		return (
			<select
				className="select-control"
				value={this.props.selected}
				name="gender"
				onChange={this.handleOnChange}
			>
				{this.props.items.map((item) => (
					<SelectOptionControl key={`select-item-${item}`} item={item} />
				))}
			</select>
		);
	}
}

export default SelectControl;
