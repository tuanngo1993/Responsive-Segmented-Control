import React from "react";

class SegmentedOptionsControl extends React.Component {
	constructor(props) {
		super(props);
		this.refOption = React.createRef();

		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleOnBlur = this.handleOnBlur.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(item) {
		this.props.onChange(item);
	}

	handleOnClick(item) {
		this.refOption.current.focus();
		this.refOption.current.classList.add("segmented-control__item--selected");

		if (item) {
			this.props.onChange(item);
		}
	}

	handleOnBlur(item) {
		item.target.classList.remove("segmented-control__item--selected");
	}

	componentDidUpdate() {
		if (this.props.item === this.props.selected) {
			this.handleOnClick();
		}
	}

	render() {
		return (
			<div
				key={`item-${this.props.item}`}
				className={
					this.props.item === this.props.selected
						? " segmented-control__item segmented-control__item--selected"
						: "segmented-control__item"
				}
				ref={this.refOption}
				onBlur={this.handleOnBlur}
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

export default SegmentedOptionsControl;
