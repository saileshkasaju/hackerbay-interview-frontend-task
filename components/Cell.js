
class Cell extends React.Component {
  active = () => {
    return this.props.activeCells.indexOf(this.props.id) >= 0;
  };
  render() {
    let className = 'cell';
    if (this.active()) className += ' active';
    if (this.props.id === this.props.startPosition) className += ' hero';
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
            background-image: url("/static/mushroom.png");
            background-repeat: no-repeat;
          }

          .hero {
            background-image: url("/static/mario.png");
            background-repeat: no-repeat;
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
