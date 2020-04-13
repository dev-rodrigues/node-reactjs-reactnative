import React from 'react';
import Teste from './teste';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: 10,
      user2: 10,      
    }

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    
    return (
      <div>
        <div style={{ width: '200px' }}>
          <Teste
            escala={0.1}
            change={this.handleChange}
            value={this.state.user1}
            min={0.10}
            max={this.state.user1 + this.state.user2}
            colors={['#A020F0', '#006400']}>
          </Teste>

        </div>

        <div>
          <h1>
            valor1: {this.state.user1}
          </h1>
        </div>

        <div>
          <h1>
            valor2: {this.state.user2}
          </h1>
        </div>

        <div>
          total: {this.state.user1 + this.state.user2}
        </div>
      </div>
    )
  }

  handleChange = (value) => {
  

    this.setState({user1: value});
  }
}

export default App;