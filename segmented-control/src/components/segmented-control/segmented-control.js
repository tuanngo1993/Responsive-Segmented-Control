import React from "react";

import SegmentedOptionsControl from "../segmented-options-control/segmented-options-control";

import "./segmented-control.css";

class SegmentedControl extends React.Component {
	render() {
		return (
			<div className="segmented-control">
				{this.props.items.map((item) => (
					<SegmentedOptionsControl
						key={`item-${item}`}
						item={item}
						onChange={this.props.onChange}
						selected={this.props.selected}
					/>
				))}
			</div>
		);
	}
}

export default SegmentedControl;
