import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  
  constructor() {
  super();

    this.state={
      brothers: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respones => respones.json())
    .then(users => this.setState({brothers: users}));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { brothers, searchField } = this.state;
    const filteredBrothers = brothers.filter(brother => 
      brother.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Brothers Inc.</h1>
     <SearchBox
      placeholder='search brothers'
      handleChange={this.handleChange}
     />
      <CardList brothers={filteredBrothers}>
      </CardList>
    </div>
    )
  }
}

export default App;
