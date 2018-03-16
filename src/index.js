import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
	render() {
		return (
			React.createElement('button', { className: 'square' }, this.props.param)
		);
	}
}

class Board extends React.Component {

	render() {
		const status = 'Next player: X'

		return (
			React.createElement('div', {},
				React.createElement('div', { className: 'status' },
					status
				),
				React.createElement('div', { className: 'board-row'},
					React.createElement(Square, { param: 0}),
					React.createElement(Square, { param: 1}),
					React.createElement(Square, { param: 2})
				),
				React.createElement('div', { className: 'board-row'},
					React.createElement(Square, { param: 3}),
					React.createElement(Square, { param: 4}),
					React.createElement(Square, { param: 5})
				),
				React.createElement('div', { className: 'board-row'},
					React.createElement(Square, { param: 6}),
					React.createElement(Square, { param: 7}),
					React.createElement(Square, { param: 8})
				)
			)
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			React.createElement('div', { className: 'game' },
				React.createElement('div', { className: 'game-board' },
					React.createElement(Board)
				),
				React.createElement('div', { className: 'game-info' },
					 React.createElement('div'),
          			React.createElement('ol')
				)
			)
		);
	}
}

// ========================================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
