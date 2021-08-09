import React,{Component} from 'react'
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
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => 
        response.json())
      .then(users => this.setState({monsters: users}))
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map(
            monster =>
             <h1 key={monster.id}> {monster.name} </h1>
          )
        }        
      </div> 
    );
    
  }
}

export default App;
