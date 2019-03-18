import React, { Component } from 'react';

const CELL_SIZE = 50;

const Cell = React.forwardRef((props,  ref) =>
  <div className="Cell"
    style={{
    left: `${CELL_SIZE * props.x + 1}px`,
    top: `${CELL_SIZE * props.y + 1}px`,
    width: `${CELL_SIZE - 1}px`,
    height: `${CELL_SIZE - 1}px`}}
    ref={ref} />
);

class Grid extends Component {
  constructor(props) {
    super();

    this.state = {
      cells: []
    }

    this.cellRefs = [];

    this.createCells = this.createCells.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ cells: this.makeCells(nextProps) });
  }

  makeCells(props) {
    let cells = [];
    for (let y = 0; y < props.height; y++) {
        for (let x = 0; x < props.width; x++) {
          cells.push({ x, y });
        }
    }

    return cells;
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  moveRobot(initialX, initialY, movement)
  {
    // this.moveToInitial(initialX, initialY);
  }

  setRef = (ref) => {
    this.cellRefs.push(ref);
  };

  createCells(cell)
  {
    return <Cell x={cell.x} y={cell.y} ref={this.setRef} key={`${cell.x},${cell.y}`}/>;
  }

  render() {
    return (
    <div className="Grid"
      style={{ width: (this.props.width * CELL_SIZE) + 1, height: (this.props.height * CELL_SIZE) + 1, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}>

      {this.state.cells.map(this.createCells)}
    </div>
    );
  }
}

export default Grid;
