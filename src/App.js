import React, { Component } from 'react';
import Grid from './components/grid';
import './App.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import robot from './robot.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      initialX: '',
      initialY: '',
      movement: '',
      height: 0,
      width: 0,
      showGrid: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.setGrid = this.setGrid.bind(this);
    this.setUpGrid = this.setUpGrid.bind(this);
    this.moveRobot = this.moveRobot.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  setGrid() {
    this.setState({ showGrid: true });
  }

  moveRobot()
  {
    this.grid.moveRobot(this.state.initialX, this.state.initialY, this.state.movement);
  }

  setUpGrid() {
    return (
      <form>
          <TextField
            label="Width"
            name="width"
            type="number"
            value={this.state.width}
            onChange={this.handleInputChange}
          />
          <TextField
            label="Height"
            name="height"
            type="number"
            value={this.state.height}
            onChange={this.handleInputChange}
          />
          <Button color="primary" className="submit-button" variant="contained" onClick={this.setGrid}>
            Create Grid
          </Button>
      </form>
    );
  }

  robotForm()
  {
    return (
      <form>
          <TextField
            label="Initial X"
            name="initialX"
            value={this.state.initialX}
            onChange={this.handleInputChange}
          />
          <TextField
            label="Initial Y"
            name="initialY"
            value={this.state.initialY}
            onChange={this.handleInputChange}
          />
          <TextField
            label="Movement"
            name="movement"
            value={this.state.movement}
            onChange={this.handleInputChange}
          />
          <Button color="primary" className="submit-button" variant="contained" onClick={this.moveRobot}>
            Move Robot
          </Button>
      </form>
    );
  }

  render() {
    const showGrid = this.state.showGrid;

    return (
      <div className="App">
        <header className="App-header">
          { showGrid
          ? this.robotForm()
          : this.setUpGrid() }
          <img id="robot" src={robot} height="40px" width="40px"/>;
          <Grid onRef={ref => (this.grid = ref)} 
            robot={this.state.robot}
            width={this.state.width} 
            height={this.state.height} />
        </header>
      </div>
    );
  }
}

export default withStyles({container: {}})(App);
