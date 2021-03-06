import React, { Component } from 'react';
import './Item.css';
import LookAtItem from '../LookAtItem/LookAtItem';
import EditItem from '../EditItem/EditItem';

class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			editItem: false
		};
	}

	handleModal = () => {
		this.setState({ modal: !this.state.modal });
	};

	handleEditItem = () => {
		this.setState({ editItem: !this.state.editItem });
		this.props.clearTempState();
	};

	render() {
		return (
			<div>
				<div className="item">
					<div className="item-title">{this.props.title}</div>
					<div className="item-buttons">
						<button className="btn btn-success" data-toggle="modal" onClick={this.handleModal}>
							Look
						</button>
						<button className="btn btn-primary" onClick={this.handleEditItem}>
							Edit
						</button>
						<button className="btn btn-danger" onClick={this.props.delete}>
							Delete
						</button>
					</div>
				</div>
				<LookAtItem
					modal={this.state.modal}
					showModalHandler={this.handleModal}
					title={this.props.title}
					description={this.props.description}
				/>
				<EditItem
					edit={this.state.editItem}
					title={this.props.title}
					description={this.props.description}
					saveTitle={this.props.saveTitle}
					saveDescription={this.props.saveDescription}
					editItem={this.props.editItem}
					handleEditItem={this.handleEditItem}
					tempTitle={this.props.tempTitle}
				/>
			</div>
		);
	}
}

export default Item;
