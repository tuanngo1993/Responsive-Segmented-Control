import React from "react";

import OptionsControl from "../options-control/options-control";

import "./segmented-control.css";

class SegmentedControl extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="segmented-control">
				{this.props.items.map((item) => (
					<OptionsControl key={`item-${item}`} item={item} />
				))}
			</div>
		);
	}
}

export default SegmentedControl;
