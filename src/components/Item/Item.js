import React, { Component } from 'react';
import './Item.css';
import { Modal, Button } from 'react-bootstrap';
import LookAtItem from '../LookAtItem/LookAtItem';

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
	};

	render() {
		return (
			<div>
				<div className="item">
					{this.props.title}
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
				<LookAtItem
					modal={this.state.modal}
					showModalHandler={this.handleModal}
					title={this.props.title}
					description={this.props.description}
				/>
				<div>
					{this.state.editItem ? (
						<div className="static-modal">
							<Modal.Dialog>
								<Modal.Header>
									<Modal.Title>Edit task</Modal.Title>
								</Modal.Header>
								<div className="current-task">
									<p>
										<strong>Current title: </strong>
									</p>
									<p>{this.props.title}</p>
									<p>
										<strong>Current description:</strong>
									</p>
									<p>{this.props.description}</p>
								</div>
								<Modal.Body>Please enter new description below:</Modal.Body>
								<label htmlFor="new-title">Please enter new title:</label>
								<input
									type="text"
									className="form-control"
									id="new-title"
									onChange={this.props.saveTitle}
								/>
								<label htmlFor="new-description">Please enter new description:</label>
								<textarea id="new-description" onChange={this.props.saveDescription} />
								<Modal.Footer>
									<Button onClick={this.handleEditItem}>Close</Button>
									<Button bsStyle="primary" onClick={this.props.editItem}>
										Save changes
									</Button>
								</Modal.Footer>
							</Modal.Dialog>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default Item;
