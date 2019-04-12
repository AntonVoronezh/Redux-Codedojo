import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';

const initialState = { count: 0 };

function updateState(state, action) {
    switch(action.type) {
        
    }
};

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
	}

	decrement() {
	}

	render() {
		return (
			<div className="counter">
				<span className="count">{this.state.count}</span>

				<div className="buttons">
					<button className="decrement" onClick={this.decrement}>
						-
					</button>
					<button className="increment" onClick={this.increment}>
						+
					</button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('root'));
