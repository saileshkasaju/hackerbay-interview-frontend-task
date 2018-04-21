
class Cell extends React.Component {
  active = () => {
    return this.props.activeCells.indexOf(this.props.id) >= 0;
  };
  render() {
    let className = 'cell';
    if (this.active()) className += ' enemy';
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

          .enemy {
            background-image: url("/static/mushroom.png");
            background-repeat: no-repeat;
          }

          .hero {
            background-image: url("/static/mario.png");
            background-repeat: no-repeat;
          }
        `}
      </style>,
      <div className={className} key="cell" />];
  }
}

export default Cell;
