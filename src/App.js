import React,{Component} from 'react'

import { CardList } from './components/card-list/card-list.component'

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//           Esto es una prueba para cambiar el texto
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React!!!
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
      searchMode: 2
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => 
        response.json())
      .then(users => this.setState({monsters: users}))
  }

  render(){
    const { monsters, searchField } = this.state; //monsters = this.state.monsters, just a quicker way
    var filteredMonster = [];
    if(this.state.searchMode === 0){
      filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    }
    else if(this.state.searchMode === 1){
        filteredMonster = monsters.filter(monster => 
        monster.name.toLowerCase().startsWith(searchField.toLocaleLowerCase()));
    }
    else{
        filteredMonster = monsters;
    }
    return (
      <div className="App">
        <input 
            type='search' 
            placeholder='search monsters' 
            onChange={e => this.setState({searchField: e.target.value})}
            
        />


        <input type='radio' name='options' id='1' onClick={e => this.setState({searchMode: 1})}></input>
        <label for='1'>Starts With</label>
        <input type='radio' name='options' id='2' onClick={e => this.setState({searchMode: 0})}></input>
        <label for='2'>Contains</label>

              
              
        <CardList monsters = {filteredMonster}>          
            
        </CardList>
        <h1>{this.state.searchMode}</h1>
           
      </div> 
    );
    
  }
}

export default App;
