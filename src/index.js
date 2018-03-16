import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
	render() {
		return (
			React.createElement('button', { className: 'square', 'onClick': this.props.handler }, this.props.value )
		);
	}
}

class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true
		};
	}

	handleClick = index => {
		const squares = this.state.squares.slice()
	    squares[index] = this.state.xIsNext ? 'X' : 'O'
	    this.setState({
	    	squares: squares,
	    	xIsNext: !this.state.xIsNext
	    })
	}

	calculateWinner = () => {
		let winner
		const squares = this.state.squares

		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		winner = lines.find((unused, index) => {
			const [a, b, c] = lines[index]

			return (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) ? squares[a] : false;
		})

		return (winner != undefined && winner.length > 0 ? squares[winner[0]] : false)
	}

	render() {
		let winner = this.calculateWinner()
		let status
		if( winner ) {
			status = 'Winner is ' + winner
		} else {
			status = 'Next player: ' + ( this.state.xIsNext ? 'X' : 'O' )
		}
		let rows = []

		for( let i = 0; i < 3; i ++ ) {

			let index = i * 3

			rows.push( React.createElement('div', { className: 'board-row'},
				React.createElement( Square, { value: this.state.squares[index], handler: () => this.handleClick(index) } ),
				React.createElement( Square, { value: this.state.squares[index + 1], handler: () => this.handleClick(index + 1) } ),
				React.createElement( Square, { value: this.state.squares[index + 2], handler: () => this.handleClick(index + 2) } )
			) )
		}

		return (
			React.createElement('div', {},
				React.createElement('div', { className: 'status' },
					status
				),
				rows[0],
				rows[1],
				rows[2]
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
