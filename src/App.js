import React from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';
//import logo from './logo.svg';
import conRanks from './conRanks2.svg';
import SelectionForm from './components/SelectionForm';

import './App.css';

// function App(props) {
//   return (
//     <div>Test</div>
//   );
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      division: 'division-ground-force',
      faction: 'faction-decepticon',
      rank: 'rank-general',
      unit: 'unit-applied-sciences'      
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({ [event.target.id]: event.target.value});
    console.log('new selection', event.target.id, event.target.value, event.target);
    console.log('current state', this.state);
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <section className="rank-canvas">
          <SvgLoader path={conRanks}>
            <SvgProxy selector=".division" display="none" />
            <SvgProxy selector=".division" opacity="1" />
            <SvgProxy selector=".rank" display="none" />
            <SvgProxy selector=".rank" opacity="1" />
            <SvgProxy selector=".unit" display="none" />
            <SvgProxy selector=".unit" opacity="1" />
            <SvgProxy selector={"#" + this.state.division} display="inline" />
            <SvgProxy selector={"#" + this.state.rank} display="inline" />
            <SvgProxy selector={"#" + this.state.unit} display="inline" />          
          </SvgLoader>
          {/* <input value={this.state.rank}/>
          <input value={this.state.division}/>
          <input value={this.state.unit}/>           */}
        </section>
        <SelectionForm 
          handleSelectChange={this.handleSelectChange}
          currentFaction={this.state.faction}
          currentDivision={this.state.division}
          currentRank={this.state.rank}
          currentUnit={this.state.unit}
        />
      </div>
    );
  }  
}

export default App;