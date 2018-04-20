import GameWrapper from './GameWrapper';

class Container extends React.Component {
  state = {
    gameId: 1,
  };

  createNewGame = () =>
    this.setState((state) => ({ gameId: state.gameId + 1 }));
  resetGame = () =>
    this.setState({ gameId: 1 });
  render() {
    const actions = {
      newGame: this.createNewGame,
      resetGame: this.resetGame,
    };
    return (
      <div>
        <GameWrapper actions={actions} {...this.state} />
      </div>
    );
  }
}

export default Container;
