import React from "react";

class OptionsControl extends React.Component {
	constructor(props) {
		super(props);
		this.refOption = React.createRef();

		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleOnBlur = this.handleOnBlur.bind(this);
	}

	handleOnClick(item) {
		this.refOption.current.focus();
		this.refOption.current.classList.add("segmented-control__item--selected");
	}

	handleOnBlur(item) {
		item.target.classList.remove("segmented-control__item--selected");
	}

	render() {
		return (
			<div
				key={`item-${this.props.item}`}
				className="segmented-control__item"
				tabIndex={-1}
				ref={this.refOption}
				onBlur={this.handleOnBlur.bind(this.props.item)}
			>
				<input
					className="segmented-control__input"
					type="radio"
					id={this.props.item}
					name="gender"
					value={this.props.item}
					onClick={this.handleOnClick}
				/>
				<label className="segmented-control__label" htmlFor={this.props.item}>
					{this.props.item}
				</label>
			</div>
		);
	}
}

export default OptionsControl;
