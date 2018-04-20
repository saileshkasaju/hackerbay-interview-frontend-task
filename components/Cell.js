class Cell extends React.Component {
  active = () => {
    return this.props.activeCells.indexOf(this.props.id) >= 0;
  };
  // handleClick = () => {
  //   this.props.recordGuess({
  //     cellId: this.props.id,
  //     userGuessIsCorrect: this.active(),
  //   });
  // };
  // guessState = () => {
  //   if (this.props.correctGuesses.indexOf(this.props.id) >= 0) {
  //     return true;
  //   } else if (this.props.wrongGuesses.indexOf(this.props.id) >= 0) {
  //     return false;
  //   }
  // };
  render() {
    // const { gameState } = this.props;
    let className = 'cell';
    if (this.active()) className += ' active';
    if (this.props.id === this.props.startPosition) className += ' hero';
    // className += ` guess-${this.guessState()}`
    return [
      <style jsx="true" key="cellStyle">
        {`
          .cell {
            width: 100px;
            height: 100px;
            display: inline-block;
            border: 1px solid #aaa;
            background: #f8f8f8;
            margin-right: 4px;
          }

          .active {
            background-color: #058bda;
          }

          .hero {
            background-color: #333;
          }

          .guess-true {
            background-color: #00cc00;
          }

          .guess-false {
            background-color: #cc0000;
          }
        `}
      </style>,
      <div className={className} key="cell" />];
  }
}

export default Cell;
