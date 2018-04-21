import { Button, Header, Modal, Input } from 'semantic-ui-react'
import Game from './Game';

class GameWrapper extends React.Component {
  state = {
    width: 10,
    height: 10,
    selectedModal: '',
    hasGameStarted: false,
  };
  validate = () => {
    const { width, height } = this.state;
    if (width <= 0) {
      return 'setWidth';
    }
    if (height <= 0) {
      return 'setHeight';
    }
    return null;
  };
  selectModal = (modalName = '') => {
    if (modalName === '') {
      const error = this.validate();
      if (error) {
        this.setState({ selectedModal: error });
      } else {
        this.setState({ hasGameStarted: true });
      }
    } else {
      this.setState({ selectedModal: modalName });
    }
  };
  handleChange = (e, { name, value }) =>
    this.setState({ [name]: Number(value) });
  finishGame = () => {
    this.setState({ selectedModal: '', hasGameStarted: false });
  };
  render() {
    const { width, height, selectedModal, hasGameStarted } = this.state;
    return (
      <div>
        {hasGameStarted && (
          <Game finishGame={this.finishGame} {...this.props} {...this.state} />
        )}
        {!hasGameStarted && (
          <div>
            <Modal
              trigger={<Button onClick={() => this.selectModal('setWidth')}>Start Game</Button>}
              open={selectedModal === 'setWidth'}
              size="tiny"
            >
              <Header icon="resize horizontal" content="Board width" />
              <Modal.Content>
                <h3>Please enter board width.</h3>
                <Input name="width" value={width} onChange={this.handleChange} />
              </Modal.Content>
              <Modal.Actions>
                <Button positive onClick={() => this.selectModal('setHeight')}>
                  Submit
                </Button>
              </Modal.Actions>
            </Modal>
            <Modal
              open={selectedModal === 'setHeight'}
              size="tiny"
            >
              <Header icon="resize vertical" content="Board height" />
              <Modal.Content>
                <h3>Please enter board height.</h3>
                <Input name="height" value={height} onChange={this.handleChange} />
              </Modal.Content>
              <Modal.Actions>
                <Button color="green" onClick={() => this.selectModal('')}>
                  Submit
                </Button>
              </Modal.Actions>
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

export default GameWrapper;
