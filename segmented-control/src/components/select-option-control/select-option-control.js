import React from "react";

class SelectOptionControl extends React.Component {
	render() {
		return (
			<option
				className="select-control__item"
				value={this.props.item}
			>
				{this.props.item}
			</option>
		);
	}
}

export default SelectOptionControl;
