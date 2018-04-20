import _ from 'lodash';
import Row from './Row';
import Cell from './Cell';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.matrix = [];
    const { width, height } = props;
    for (let h = 0; h < height; h++) {
      let row = [];
      for (let w = 0; w < width; w++) {
        row.push(`${h}-${w}`);
      }
      this.matrix.push(row);
    }
    const flatMatrix = _.flatten(this.matrix);
    const totalEnemies = Math.ceil(((width * height) / (width + height))* 2);
    this.activeCells = _.sampleSize(flatMatrix, totalEnemies);
    const inactiveCells = flatMatrix.filter((eachCell) => this.activeCells.indexOf(eachCell) === -1);
    const startPosition = inactiveCells[Math.floor(Math.random() * inactiveCells.length)];
    this.state = {
      gameStatus: 'ready',
      totalSteps: 0,
      gameScore: 0,
      totalEnemies,
      startPosition
    }
  }
  componentWillUnmount() {
    this.finishGame();
  }
  finishGame = (gameState) => {
    // the game is over
    // so set score and cleanup
  };

  movePiece = ({ cellId, hasFoundEnemy }) => {
    let { gameStatus} = this.state;
  };
  render() {
    const { gameState } = this.state;
    const {  } = this.props;
    return (
      <div className="grid">
        {this.matrix.map((row, ri) => (
          <Row key={`row-${ri}`}>
            {row.map((cellId) => (
              <Cell
                key={`cell-${cellId}`} id={cellId}
                movePiece={this.movePiece} activeCells={this.activeCells}
                {...this.state}
              />
            ))}
          </Row>
        ))}
      </div>
    );
  }
}

export default Game;
