import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string | null;

  constructor() { }

  ngOnInit(): void {
    this.setNewGame();
  }

  setNewGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  getCurrentPlayer() {
    return this.xIsNext ? 'X' : 'O';
  }
  
  getWinner() {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // horizontal lines
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // vertical lines
      [0, 4, 8],
      [2, 4, 6]  // diagonals
    ]

    for (let index = 0; index < winningLines.length; index ++) {
      const [x, y, z] = winningLines[index];

      if (this.squares[x] && this.squares[x] === this.squares[y] && this.squares[x] === this.squares[z] ) {   
        return this.squares[x];
      }
    }

    return null;
  }

  makeMove(index: number) {
    if (!this.winner) {
      if (!this.squares[index]) {
        this.squares.splice(index, 1, this.getCurrentPlayer());
        this.xIsNext = !this.xIsNext;
      }
    }
   


    this.winner = this.getWinner();
    
  }

}
