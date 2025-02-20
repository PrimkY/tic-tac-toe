class TicTacToe {
	constructor() {
		this.currentSymbol = 'x';
		this.playground = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];
		this.winComb = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
	}

	getCurrentPlayerSymbol() {
		return this.currentSymbol;
	}

	nextTurn(rowIndex, columnIndex) {
		if (this.playground[rowIndex][columnIndex] === null) {
			this.playground[rowIndex][columnIndex] = this.currentSymbol;
			this.currentSymbol = (this.currentSymbol === 'x' ? 'o' : 'x');
		}
	}

	isFinished() {
		return Boolean(this.getWinner()) || this.isDraw();
	}

	getWinner() {
		const playgroundArr = this.playground.flat();
		for (let i = 0; i < this.winComb.length; i++) {
			const [a, b, c] = this.winComb[i];
			if (playgroundArr[a] === playgroundArr[b] && playgroundArr[a] === playgroundArr[c]) {
				return playgroundArr[a];
			}
		}
		return null;
	}

	noMoreTurns() {
		return Boolean(this.playground.flat().indexOf(null) === -1);
	}

	isDraw() {
		return Boolean(this.noMoreTurns() && !this.getWinner());
	}

	getFieldValue(rowIndex, colIndex) {
		return this.playground[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;
